import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "Tony Martingetti | Home",
    "Discover Tony Martingetti’s work, resources, and ways to connect so you can lead with greater purpose and impact."
  );

  return (
    <div className="min-h-[60vh]">
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Tony Martingetti
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to the official website.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-white hover:bg-gray-800"
          >
            About <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-gray-700 hover:bg-gray-50"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
