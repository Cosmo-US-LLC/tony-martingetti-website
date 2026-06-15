import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

export default function Layout() {
  const { pathname } = useLocation();
  const hideFooter =
    pathname === "/about" ||
    pathname === "/success-stories" ||
    pathname === "/principles";

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
