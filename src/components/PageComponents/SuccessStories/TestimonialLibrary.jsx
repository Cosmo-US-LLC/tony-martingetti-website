import { useMemo, useState } from "react";
import {
  SUCCESS_STORY_FILTERS,
  TESTIMONIALS,
} from "@/constants/successStories";
import { TestimonialCard } from "./TestimonialCard";
import ScrollingTestimonialColumn from "./ScrollingTestimonialColumn";

const COLUMN_DIRECTIONS = ["up", "down", "up"];

function splitIntoColumns(items, columnCount = 3) {
  const columns = Array.from({ length: columnCount }, () => []);
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });
  return columns;
}

export default function TestimonialLibrary() {
  const [activeFilter, setActiveFilter] = useState("All Stories");

  const filteredTestimonials = useMemo(() => {
    if (activeFilter === "All Stories") return TESTIMONIALS;
    return TESTIMONIALS.filter(
      (item) => item.category.toLowerCase() === activeFilter.toLowerCase(),
    );
  }, [activeFilter]);

  const columns = useMemo(
    () => splitIntoColumns(filteredTestimonials),
    [filteredTestimonials],
  );

  const hasTestimonials = filteredTestimonials.length > 0;

  return (
    <section className="w-full bg-white py-12 md:py-16" data-name="Testimonial Library">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
              Nationwide Advocacy
            </p>
            <h2 className="heading_two text-[#0f172a]">The Testimonial Library</h2>
            <p className="max-w-[640px] font-sans text-lg leading-7 text-[#4b5563] md:text-xl">
              Filter through real reflections from leaders representing dynamic
              nonprofit segments.
            </p>
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-3 md:gap-[18px]">
            {SUCCESS_STORY_FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`cursor-pointer rounded-full px-[18px] py-3 font-sans text-base leading-7 transition-colors md:text-lg ${
                    isActive
                      ? "bg-[#0e7159] text-white"
                      : "bg-[#f4f4f4] text-[#0f172a] hover:bg-[#eaeaea]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
          <div className="h-[3px] w-full bg-[#f2f2f2]" />
        </div>

        <div className="relative">
          {hasTestimonials ? (
            <>
              <div
                className="testimonial-scroll-columns hidden gap-5 lg:grid lg:grid-cols-3"
                key={activeFilter}
              >
                {columns.map((columnItems, index) => (
                  <ScrollingTestimonialColumn
                    key={`${activeFilter}-col-${index}`}
                    items={columnItems}
                    direction={COLUMN_DIRECTIONS[index]}
                    className="h-[520px] md:h-[700px] lg:h-[840px]"
                  />
                ))}
              </div>

              <div className="lg:hidden" key={`${activeFilter}-mobile`}>
                <ScrollingTestimonialColumn
                  items={filteredTestimonials}
                  direction="up"
                  slow
                  className="h-[520px] md:h-[640px]"
                />
              </div>
            </>
          ) : (
            <p className="py-16 text-center font-sans text-lg text-[#6b7280]">
              No stories found for this category yet.
            </p>
          )}

          {hasTestimonials && (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white via-white/80 to-transparent"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </section>
  );
}
