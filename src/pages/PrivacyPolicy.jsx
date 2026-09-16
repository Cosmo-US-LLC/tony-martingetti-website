import { useEffect, useRef, useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PrivacyPolicyContent, {
  PRIVACY_SECTIONS,
} from "@/components/PageComponents/PrivacyPolicy/PrivacyPolicyContent";
import PrivacyFooter from "@/components/PageComponents/PrivacyPolicy/PrivacyFooter";

export default function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy | Planned Giving Accelerated",
    "Learn how Planned Giving Accelerated collects, uses, and protects your information when you visit our website or sign up for our programs.",
  );

  const [activeId, setActiveId] = useState(PRIVACY_SECTIONS[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px" },
    );

    PRIVACY_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const activeIndex = PRIVACY_SECTIONS.findIndex((s) => s.id === activeId);

  return (
    <>
      <div className="w-full bg-white px-4 py-12 md:px-[60px] md:py-20">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:flex-row md:gap-4">
          <aside className="hidden shrink-0 md:block md:w-[300px]">
            <div className="sticky top-[120px] flex flex-col gap-[21px]">
              <h2 className="text-2xl font-bold leading-[28.8px] tracking-[-0.48px] text-black">
                Table of Contents
              </h2>
              <div className="flex gap-3">
                <div className="relative w-1 shrink-0 rounded-full bg-[#f1f1f1]">
                  <div
                    className="absolute left-0 w-1 rounded-full bg-[#079669] transition-[top] duration-200"
                    style={{
                      height: `${100 / PRIVACY_SECTIONS.length}%`,
                      top: `${(activeIndex / PRIVACY_SECTIONS.length) * 100}%`,
                    }}
                  />
                </div>
                <nav className="flex flex-1 flex-col gap-3.5">
                  {PRIVACY_SECTIONS.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`border-b border-[#e2e2e2] pb-3.5 text-base leading-[22.4px] tracking-[-0.16px] transition-colors ${
                        activeId === s.id
                          ? "font-semibold text-black"
                          : "text-black/80 hover:text-black"
                      }`}
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <PrivacyPolicyContent />
          </div>
        </div>
      </div>

      <PrivacyFooter />
    </>
  );
}
