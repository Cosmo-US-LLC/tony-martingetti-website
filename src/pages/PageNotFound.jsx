import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function PageNotFound() {
  usePageMeta(
    "Page Not Found | Tony Martingetti",
    "The page you’re looking for could not be found on Tony Martingetti’s website."
  );

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="mt-2 text-gray-600">Page not found.</p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-white hover:bg-gray-800"
      >
        <Home className="h-4 w-4" /> Back to Home
      </Link>
    </div>
  );
}
