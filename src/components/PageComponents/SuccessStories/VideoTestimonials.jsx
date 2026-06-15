import { useCallback, useEffect, useRef, useState } from "react";
import kathrynImage from "@/assets/images/success_stories/video/kathryn_sides.webp";
import caroleImage from "@/assets/images/success_stories/video/carole_weaver.webp";
import playIcon from "@/assets/images/success_stories/icons/play.svg";
import { VIDEO_TESTIMONIALS } from "@/constants/successStories";
import { CategoryTag, StarRating } from "./TestimonialCard";

const VIDEO_IMAGES = {
  kathryn_sides: kathrynImage,
  carole_weaver: caroleImage,
};

const SCROLL_EPSILON = 8;
const CARD_GAP = 24;

function VideoTestimonialCard({ imageKey, quote, name, role, category }) {
  return (
    <article className="flex w-[min(807px,90vw)] shrink-0 snap-start flex-col rounded-xl border border-[#dedede] bg-white p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        <div className="relative h-[360px] w-full shrink-0 overflow-hidden rounded-xl lg:h-[330px] lg:w-[284px]">
          <img
            src={VIDEO_IMAGES[imageKey]}
            alt={name}
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-3 pb-3.5">
            <div className="text-white">
              <p className="font-sans text-sm font-bold uppercase leading-6">
                {name.split(",")[0]}
              </p>
              <p className="font-sans text-[10px] leading-[18px] text-[#f5f5f5]/70">
                {role.split(",")[0]}
              </p>
            </div>
            <img src={playIcon} alt="" className="size-[35px]" aria-hidden="true" />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-8 lg:gap-[90px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-nowrap items-center justify-between gap-3">
              <StarRating />
              <CategoryTag label={category} />
            </div>
            <p className="paragraph_one text-[#4b5563]">&ldquo;{quote}&rdquo;</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-px w-full bg-[#252525]/10" />
            <div>
              <div className="flex items-center gap-1">
                <span className="h-0.5 w-4 bg-[#0f172a]" aria-hidden="true" />
                <p className="font-sans text-sm font-bold uppercase leading-6 text-[#0f172a]">
                  {name}
                </p>
              </div>
              <p className="mt-2.5 font-sans text-[13px] leading-[18px] text-[#707377]">
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function CarouselNavButton({ direction, enabled, onClick }) {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!enabled}
      aria-label={isPrev ? "Previous testimonial" : "Next testimonial"}
      className={`flex size-[45px] items-center justify-center rounded-full transition-colors ${
        enabled
          ? "cursor-pointer bg-[#059669]"
          : "cursor-not-allowed bg-[rgba(217,217,217,0.4)]"
      } ${isPrev ? "" : "ml-2.5"}`}
    >
      <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
        <path
          d={isPrev ? "M10 2L2 10L10 18" : "M2 2L10 10L2 18"}
          stroke={enabled ? "white" : "rgba(0,0,0,0.4)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function VideoTestimonials() {
  const scrollerRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
    pointerId: null,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const updateScrollState = useCallback(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const { scrollLeft, scrollWidth, clientWidth } = node;
    setCanScrollPrev(scrollLeft > SCROLL_EPSILON);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - SCROLL_EPSILON);
  }, []);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    updateScrollState();

    node.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(node);

    return () => {
      node.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  const scrollByCard = (direction) => {
    const node = scrollerRef.current;
    if (!node) return;

    const cardWidth = node.firstElementChild?.clientWidth ?? 807;
    node.scrollBy({
      left: direction * (cardWidth + CARD_GAP),
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const node = scrollerRef.current;
    if (!node) return;

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: node.scrollLeft,
      pointerId: event.pointerId,
    };
    setIsDragging(true);
    node.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragState.current.isDragging) return;

    const node = scrollerRef.current;
    if (!node) return;

    const deltaX = event.clientX - dragState.current.startX;
    node.scrollLeft = dragState.current.startScrollLeft - deltaX;
  };

  const endDrag = (event) => {
    if (!dragState.current.isDragging) return;

    const node = scrollerRef.current;
    if (node && dragState.current.pointerId != null) {
      node.releasePointerCapture(dragState.current.pointerId);
    }

    dragState.current = {
      isDragging: false,
      startX: 0,
      startScrollLeft: 0,
      pointerId: null,
    };
    setIsDragging(false);
    updateScrollState();
  };

  return (
    <section className="w-full bg-white pb-16 pt-4" data-name="Video Testimonials">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-4 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
              Testimonials
            </p>
            <h2 className="heading_two text-[#0f172a]">
              <span className="block">Soft Words</span>
              <span className="block">Strong impact</span>
            </h2>
          </div>
          <div className="flex items-center">
            <CarouselNavButton
              direction="prev"
              enabled={canScrollPrev}
              onClick={() => scrollByCard(-1)}
            />
            <CarouselNavButton
              direction="next"
              enabled={canScrollNext}
              onClick={() => scrollByCard(1)}
            />
          </div>
        </div>

        <div
          ref={scrollerRef}
          className={`flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x] [&::-webkit-scrollbar]:hidden ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
        >
          {VIDEO_TESTIMONIALS.map((item) => (
            <VideoTestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
