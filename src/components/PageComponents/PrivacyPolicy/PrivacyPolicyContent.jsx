import { Link } from "react-router-dom";
import { PRIVACY_POLICY_CONFIG as config } from "@/constants/privacyPolicy";

function PolicySection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 flex flex-col gap-4">
      <h2 className="font-landing text-xl font-semibold leading-7 text-black">
        {title}
      </h2>
      <div className="policy_prose flex flex-col gap-3.5">{children}</div>
    </section>
  );
}

function PolicyParagraph({ children }) {
  return (
    <p className="font-landing text-base font-normal leading-[22.4px] tracking-[-0.16px] text-black">
      {children}
    </p>
  );
}

function PolicyList({ items }) {
  return (
    <ul className="flex flex-col gap-2 pl-5 font-landing text-base leading-[22.4px] tracking-[-0.16px] text-black">
      {items.map((item) => (
        <li key={item} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
  );
}

function PolicyLabel({ children }) {
  return (
    <p className="font-landing text-base font-semibold leading-[22.4px] tracking-[-0.16px] text-black">
      {children}
    </p>
  );
}

export const PRIVACY_SECTIONS = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use-your-information", title: "How We Use Your Information" },
  { id: "how-we-share-your-information", title: "How We Share Your Information" },
  { id: "cookies-and-tracking-technologies", title: "Cookies and Tracking Technologies" },
  { id: "email-communications", title: "Email Communications" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-rights-and-choices", title: "Your Rights and Choices" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "data-security", title: "Data Security" },
  { id: "changes-to-this-policy", title: "Changes to This Policy" },
  { id: "contact-us", title: "Contact Us" },
];

export default function PrivacyPolicyContent() {
  const mailto = `mailto:${config.contactEmail}`;

  return (
    <article className="flex w-full flex-col gap-8 rounded-xl bg-white p-6 md:p-10">
      <header className="flex flex-col gap-3.5">
        <h1 className="font-landing text-2xl font-bold leading-[28.8px] tracking-[-0.48px] text-black">
          Privacy Policy
        </h1>
        <p className="font-landing text-xl font-semibold leading-7 text-black">
          Effective Date: {config.effectiveDate}
        </p>
        <PolicyParagraph>
          Planned Giving Accelerated (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) operates the website <a href={`https://${config.website}`} className="text-[#059669] underline hover:text-[#047857]"> {config.website} </a>(the
          &quot;Site&quot;). This Privacy Policy explains how we collect, use,
          disclose, and protect your information when you visit the Site, sign
          up for our content, or enroll in our programs.
        </PolicyParagraph>
        <PolicyParagraph>
          By using the Site, you agree to the collection and use of information
          in accordance with this policy.
        </PolicyParagraph>
      </header>

      <PolicySection id="information-we-collect" title="1. Information We Collect">
        <PolicyParagraph>
          We collect information in the following ways:
        </PolicyParagraph>
        <PolicyLabel>Information you provide directly</PolicyLabel>
        <PolicyList
          items={[
            "Name, email address, and phone number (if provided) when you sign up for our newsletter, download a free resource, or fill out a contact form",
            "Information you submit when registering for a course, webinar, or program",
            "Any messages, questions, or content you send us directly",
          ]}
        />
        <PolicyLabel>Information collected automatically</PolicyLabel>
        <PolicyList
          items={[
            "IP address, browser type, device type, and operating system",
            "Pages visited, time spent on the Site, and referring website",
            "Cookies and similar tracking technologies (see Section 4 below)",
          ]}
        />
        <PolicyParagraph>
          <strong className="font-semibold text-[#0f172a]">
            We do not collect or store payment information.
          </strong>{" "}
          We do not process credit card numbers, bank account details, or other
          financial payment information through this Site. If you purchase a
          course or program, payment is handled directly by{" "}
          {config.paymentProvider}, which collects and processes that
          information under its own privacy policy. We recommend reviewing their
          policy before making a purchase.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection id="how-we-use-your-information" title="2. How We Use Your Information">
        <PolicyParagraph>
          We use the information we collect to:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Deliver the content, resources, or course materials you've requested",
            "Send newsletters, updates, and marketing communications (you can opt out at any time)",
            "Respond to your questions, comments, or support requests",
            "Improve the Site's content, functionality, and user experience",
            "Monitor and analyze usage trends and traffic patterns",
            "Comply with legal obligations and protect against fraud or misuse",
          ]}
        />
        <PolicyParagraph>
          We do not use your information for any purpose beyond what is
          described in this policy without first asking for your consent.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection id="how-we-share-your-information" title="3. How We Share Your Information">
        <PolicyParagraph>
          We do not sell, rent, or trade your personal information. We may share
          information with:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Service providers who help us operate the Site and deliver our services (e.g., email marketing platforms, course-hosting platforms, analytics providers, hosting providers). These providers only access the information needed to perform their function and are obligated to protect it.",
            "Legal authorities, if required to comply with a law, regulation, legal process, or governmental request.",
            "A successor entity, in the event of a merger, acquisition, or sale of assets — your information may be transferred as part of that transaction, subject to this policy.",
          ]}
        />
      </PolicySection>

      <PolicySection id="cookies-and-tracking-technologies" title="4. Cookies and Tracking Technologies">
        <PolicyParagraph>
          The Site uses cookies and similar technologies to:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Remember your preferences",
            "Understand how visitors use the Site",
            "Measure the effectiveness of our content and marketing",
          ]}
        />
        <PolicyParagraph>
          We currently use the following tools: {config.trackingTools}.
        </PolicyParagraph>
        <PolicyParagraph>
          You can disable cookies through your browser settings; however, some
          features of the Site may not function properly if cookies are
          disabled.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection id="email-communications" title="5. Email Communications">
        <PolicyParagraph>
          If you sign up for our newsletter or opt in to receive updates, we
          will send you emails related to Planned Giving Accelerated, including
          content, course updates, and promotional offers. You may unsubscribe
          at any time by clicking the &quot;unsubscribe&quot; link in any email
          or by contacting us directly at{" "}
          <a href={mailto} className="text-[#059669] underline hover:text-[#047857]">
            {config.contactEmail}
          </a>
          .
        </PolicyParagraph>
      </PolicySection>

      <PolicySection id="data-retention" title="6. Data Retention">
        <PolicyParagraph>
          We retain personal information for as long as necessary to fulfill the
          purposes outlined in this policy, unless a longer retention period is
          required by law. If you&apos;d like your information deleted sooner,
          you can contact us using the details in Section 11.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection id="your-rights-and-choices" title="7. Your Rights and Choices">
        <PolicyParagraph>
          Depending on your location, you may have the right to:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Access the personal information we hold about you",
            "Request correction of inaccurate information",
            "Request deletion of your information",
            "Opt out of marketing communications",
            "Withdraw consent where processing is based on consent",
          ]}
        />
        <PolicyParagraph>
          To exercise any of these rights, contact us at{" "}
          <a href={mailto} className="text-[#059669] underline hover:text-[#047857]">
            {config.contactEmail}
          </a>
          . We will respond within a reasonable timeframe.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection id="childrens-privacy" title="8. Children's Privacy">
        <PolicyParagraph>
          The Site is not directed at children under the age of 16, and we do
          not knowingly collect personal information from children. If you
          believe a child has provided us with personal information, please
          contact us so we can delete it.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection id="data-security" title="9. Data Security">
        <PolicyParagraph>
          We use reasonable administrative, technical, and physical safeguards
          to protect your information. However, no method of transmission or
          storage is 100% secure, and we cannot guarantee absolute security.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection id="changes-to-this-policy" title="10. Changes to This Policy">
        <PolicyParagraph>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated &quot;Effective Date.&quot; We
          encourage you to review this policy periodically.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection id="contact-us" title="11. Contact Us">
        <PolicyParagraph>
          If you have questions about this Privacy Policy or how your information
          is handled, please contact us:
        </PolicyParagraph>
        <div className="flex flex-col gap-1 font-sans text-base leading-[26px] text-[#1f2937]">
          <p className="font-semibold text-[#0f172a]">
            Planned Giving Accelerated
          </p>
          <p>
            Email:{" "}
            <a href={mailto} className="text-[#059669] underline hover:text-[#047857]">
              {config.contactEmail}
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href={`https://${config.website}`}
              className="text-[#059669] underline hover:text-[#047857]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {config.website}
            </a>
          </p>
        </div>
      </PolicySection>

      <footer className="border-t border-[#e5e7eb] pt-8">
        <p className="font-sans text-sm italic leading-[22px] text-[#6b7280]">
          Governing Law: This policy is governed by the laws of{" "}
          {config.governingLaw}, without regard to conflict-of-law principles.
        </p>
      </footer>
    </article>
  );
}
