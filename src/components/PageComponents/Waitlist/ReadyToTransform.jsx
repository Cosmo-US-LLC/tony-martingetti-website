import { useState } from "react";

function ReadyToTransform() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    // TODO: replace with your waitlist API
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  }

  return (
    <section
      id="join"
      className="w-full bg-[#059669] px-4 py-10 md:px-8 md:py-16"
      data-name="Section"
    >
      <div
        className="mx-auto flex max-w-[672px] w-full flex-col items-center gap-6"
        data-name="Container"
      >
        <h2
          className="heading_two text-center text-white"
          data-name="Heading 2"
        >
          <span className="block">Ready to Transform Your</span>
          <span className="block">Fundraising?</span>
        </h2>

        <p
          className="max-w-[580px] text-center paragraph_one text-white opacity-95"
          data-name="Subheading"
        >
          Join the waitlist now and get instant access to your FREE toolkit
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[576px] flex-col gap-4 pt-4 sm:flex-row sm:items-stretch"
          data-name="Form"
        >
          <label className="sr-only" htmlFor="waitlist-email">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            disabled={status === "loading"}
            className="min-h-[56px] flex-1 rounded-lg border-0 bg-white px-6 py-[16px] font-sans text-lg text-[#0f172a] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#059669] disabled:opacity-60"
            data-name="Input"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="secondary_btn cursor-pointer shrink-0 inline-flex! flex-row! py-[16px]! sm:w-auto"
            data-name="Button"
          >
            {status === "loading" ? "Joining…" : "Join Waitlist"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-center font-sans text-lg font-medium text-white">
            Thanks! You’re on the list.
          </p>
        )}

        <p
          className="text-center font-sans text-[12px] md:text-[16px] font-normal leading-5 text-white opacity-80"
          data-name="Privacy"
        >
          🔒 Your information is safe. We respect your privacy.
        </p>
      </div>
    </section>
  );
}

export default ReadyToTransform;
