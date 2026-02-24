function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-heading text-3xl font-bold text-[#0f172a]">
        Contact Us
      </h1>
      <p className="mt-4 font-sans text-gray-600">
        Get in touch at{" "}
        <a
          href="mailto:support@tonymartignetti.com"
          className="text-[#059669] hover:underline"
        >
          support@tonymartignetti.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
