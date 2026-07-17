const KLAVIYO_SUBSCRIBE_URL = "https://a.klaviyo.com/client/subscriptions/";
const KLAVIYO_API_REVISION = "2024-10-15";

const FORM_ENV_KEYS = {
  waitlist: {
    listId: "VITE_KLAVIYO_LIST_ID_WAITLIST",
  },
  "my-book": {
    listId: "VITE_KLAVIYO_LIST_ID_MY_BOOK",
  },
};

function getConfig(form = "waitlist") {
  const keys = FORM_ENV_KEYS[form];
  if (!keys) return null;

  const publicApiKey = import.meta.env.VITE_KLAVIYO_PUBLIC_API_KEY;
  const listId = import.meta.env[keys.listId];

  if (!publicApiKey || !listId) {
    console.error(
      `Klaviyo form config missing for "${form}". Set VITE_KLAVIYO_PUBLIC_API_KEY and ${keys.listId}.`,
    );
    return null;
  }

  return { publicApiKey, listId };
}

async function parseKlaviyoError(response) {
  let message = "Something went wrong. Please try again.";

  try {
    const data = await response.json();
    console.error("Klaviyo form submission failed:", data);

    if (data?.errors?.length) {
      const details = data.errors
        .map((err) => err.detail)
        .filter(Boolean)
        .join(" ");
      if (details) message = details;
    }
  } catch {
    console.error("Klaviyo form submission failed with status", response.status);
  }

  return message;
}

/**
 * Submit email to Klaviyo's Client Subscriptions API.
 * @param {{ email: string, pageSource?: string, form?: "waitlist" | "my-book" }} options
 */
export async function submitKlaviyoForm({ email, form = "waitlist" }) {
  const config = getConfig(form);
  if (!config) {
    throw new Error(
      "Signup is temporarily unavailable. Please try again later.",
    );
  }

  const { publicApiKey, listId } = config;

  const body = {
    data: {
      type: "subscription",
      attributes: {
        profile: {
          data: {
            type: "profile",
            attributes: { email },
          },
        },
      },
      relationships: {
        list: {
          data: { type: "list", id: listId },
        },
      },
    },
  };

  const response = await fetch(
    `${KLAVIYO_SUBSCRIBE_URL}?company_id=${publicApiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        revision: KLAVIYO_API_REVISION,
      },
      body: JSON.stringify(body),
    },
  );

  if (response.ok) {
    return { ok: true };
  }

  throw new Error(await parseKlaviyoError(response));
}
