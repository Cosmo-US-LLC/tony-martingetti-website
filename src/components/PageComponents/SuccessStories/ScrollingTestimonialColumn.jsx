import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";

function buildLoopItems(items) {
  if (items.length === 0) return [];
  const repeats = items.length < 3 ? 4 : 2;
  return Array.from({ length: repeats }, () => items).flat();
}

export default function ScrollingTestimonialColumn({
  items,
  direction = "up",
  className = "",
  slow = false,
}) {
  const [paused, setPaused] = useState(false);
  const loopItems = buildLoopItems(items);

  if (loopItems.length === 0) return null;

  const animationClass =
    direction === "up" ? "testimonial-scroll-up" : "testimonial-scroll-down";
  const speedClass = slow ? "testimonial-scroll-slow" : "";

  return (
    <div
      className={`testimonial-scroll-column relative overflow-hidden ${className} ${
        paused ? "testimonial-scroll-paused" : ""
      }`}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
    >
      <div className={`flex flex-col gap-5 ${animationClass} ${speedClass}`}>
        {loopItems.map((item, index) => (
          <TestimonialCard key={`${item.id}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
