import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-600">
            © {currentYear} Tony Martingetti. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-gray-500" />
            <Link to="/contact" className="text-sm text-gray-600 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
