import { useState } from "react";
import { submitHubSpotForm } from "@/utils/submitHubSpotForm";

/**
 * @param {string} pageSource - e.g. "home", "about", "success-stories", "my-book"
 * @param {{ form?: "waitlist" | "my-book" }} [options]
 */
export function useWaitlistForm(pageSource, { form = "waitlist" } = {}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleEmailChange(value) {
    setEmail(value);
    if (status === "success" || status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitHubSpotForm({
        email: email.trim(),
        pageSource,
        form,
      });
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return {
    email,
    setEmail: handleEmailChange,
    status,
    errorMessage,
    handleSubmit,
    isLoading: status === "loading",
  };
}
