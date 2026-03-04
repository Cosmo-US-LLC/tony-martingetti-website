import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SuccessStories from "./pages/SuccessStories";
import Waitlist from "./pages/Waitlist";
import PageNotFound from "./pages/PageNotFound";
import ScrollToHash from "./utils/ScrollToHash";

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Waitlist />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
