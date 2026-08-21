import { useState } from "react";
import { submitKlaviyoForm } from "@/utils/submitKlaviyoForm";

/**
 * @param {string} pageSource - e.g. "home", "about", "success-stories", "my-book"
 * @param {{ form?: "waitlist" | "my-book" | "book-waitlist" }} [options]
 */
export function useWaitlistForm(pageSource, { form = "waitlist" } = {}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleNameChange(value) {
    setName(value);
    if (status === "success" || status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  function handleEmailChange(value) {
    setEmail(value);
    if (status === "success" || status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitKlaviyoForm({
        name: name.trim(),
        email: email.trim(),
        pageSource,
        form,
      });
      setStatus("success");
      setName("");
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
    name,
    setName: handleNameChange,
    email,
    setEmail: handleEmailChange,
    status,
    errorMessage,
    handleSubmit,
    isLoading: status === "loading",
  };
}
