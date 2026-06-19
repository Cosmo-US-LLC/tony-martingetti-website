import { usePageMeta } from "@/hooks/usePageMeta";
import PrivacyPolicyContent from "@/components/PageComponents/PrivacyPolicy/PrivacyPolicyContent";

export default function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy | Planned Giving Accelerated",
    "Learn how Planned Giving Accelerated collects, uses, and protects your information when you visit our website or sign up for our programs.",
  );

  return (
    <div className="w-full bg-white py-12 md:py-20" data-name="Privacy Policy">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <PrivacyPolicyContent />
      </div>
    </div>
  );
}
