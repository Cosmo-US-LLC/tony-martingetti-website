import { useEffect, useRef, useState } from "react";

export default function useCountUp(targets, { duration = 1500 } = {}) {
  const ref = useRef(null);
  const [values, setValues] = useState(targets.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimated.current) return;
          hasAnimated.current = true;
          observer.disconnect();

          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValues(targets.map((t) => t * eased));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return [ref, values];
}
