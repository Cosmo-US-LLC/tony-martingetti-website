import { usePageMeta } from "@/hooks/usePageMeta";

function SuccessStories() {
  usePageMeta(
    "Tony Martingetti | Success Stories",
    "Read leadership success stories and client transformations from working with Tony Martingetti."
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-heading text-3xl font-bold text-[#0f172a]">
        Success Stories
      </h1>
      <p className="mt-4 font-sans text-gray-600">Content coming soon.</p>
    </div>
  );
}

export default SuccessStories;
