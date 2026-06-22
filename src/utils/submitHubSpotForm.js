const HUBSPOT_SUBMIT_URL =
  "https://api.hsforms.com/submissions/v3/integration/submit";

const FORM_ENV_KEYS = {
  waitlist: {
    portalId: "VITE_HUBSPOT_PORTAL_ID",
    formGuid: "VITE_HUBSPOT_FORM_GUID",
  },
  "my-book": {
    portalId: "VITE_HUBSPOT_MY_BOOK_PORTAL_ID",
    formGuid: "VITE_HUBSPOT_MY_BOOK_FORM_GUID",
  },
};

function getHubspotUtk() {
  const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]*)/);
  return match?.[1];
}

function getConfig(form = "waitlist") {
  const keys = FORM_ENV_KEYS[form];
  if (!keys) return null;

  const portalId = import.meta.env[keys.portalId];
  const formGuid = import.meta.env[keys.formGuid];

  if (!portalId || !formGuid) {
    console.error(
      `HubSpot form config missing for "${form}". Set ${keys.portalId} and ${keys.formGuid}.`,
    );
    return null;
  }

  return { portalId, formGuid };
}

async function parseHubSpotError(response) {
  let message = "Something went wrong. Please try again.";

  try {
    const data = await response.json();
    console.error("HubSpot form submission failed:", data);

    if (data?.errors?.length) {
      const details = data.errors
        .map((err) => err.message)
        .filter(Boolean)
        .join(" ");
      if (details) message = details;
    } else if (data?.message) {
      message = data.message;
    }
  } catch {
    console.error("HubSpot form submission failed with status", response.status);
  }

  return message;
}

/**
 * Submit email to HubSpot Forms API v3.
 * @param {{ email: string, pageSource: string, form?: "waitlist" | "my-book" }} options
 */
export async function submitHubSpotForm({
  email,
  pageSource,
  form = "waitlist",
}) {
  const config = getConfig(form);
  if (!config) {
    throw new Error(
      "Signup is temporarily unavailable. Please try again later.",
    );
  }

  const { portalId, formGuid } = config;
  const hutk = getHubspotUtk();

  const body = {
    fields: [{ name: "email", value: email }],
    context: {
      pageUri: window.location.href,
      pageName: `${document.title} (${pageSource})`,
      ...(hutk ? { hutk } : {}),
    },
  };

  const response = await fetch(
    `${HUBSPOT_SUBMIT_URL}/${portalId}/${formGuid}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );

  if (response.ok) {
    return { ok: true };
  }

  throw new Error(await parseHubSpotError(response));
}
