import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-semibold text-gray-900">
          Tony Martingetti
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>
        <button type="button" className="p-2 md:hidden" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
    </header>
  );
}
