// import { Suspense, useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import AppNavbar from "./components/AppNavbar/AppNavbar";
// import Home from "./pages/Home/Index";
// import Classes from "./pages/Classes/Index";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./utility_classes.css";
// import "./App.css";
// import "./components/GlobalStyle";
// import VideoDetails from "./pages/Classes/VideoDetails/VideoDetails";
// import Footer from "./components/Footer/Footer";
// import ScrollToTopButton from "./components/common/Button/ScrollToTopButton";
// import { scrollToSection, scrollToTop } from "./utils/helper";
// import Modal from "styled-react-modal";
// import TagManager from "react-gtm-module";
// import AdminPortal from "./AdminPortal/Index";

// const tagManagerArgs = { gtmId: "GTM-ND5H33G7" };
// TagManager.initialize(tagManagerArgs);

// function App() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     scrollToTop();
//   }, [pathname]);

//   return (
//     <div className="home_page">
//       <Suspense fallback={<div>loading....</div>}>
//         <AppNavbar scrollToSection={scrollToSection} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/videos" element={<Classes />} />
//           <Route path="/videos/:videoId" element={<VideoDetails />} />
//           {/* <Route path="/admin" element={<AdminPortal />} /> */}
//           <Route path="*" element={<div>Page not found.</div>} />
//         </Routes>
//         <Footer />
//       </Suspense>
//       <ScrollToTopButton />
//       <Modal />
//     </div>
//   );
// }

// export default App;
import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Home from "./pages/Home/Index";
import Classes from "./pages/Classes/Index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./utility_classes.css";
import "./App.css";
import "./components/GlobalStyle";
import VideoDetails from "./pages/Classes/VideoDetails/VideoDetails";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/common/Button/ScrollToTopButton";
import { scrollToSection, scrollToTop } from "./utils/helper";
import Modal from "styled-react-modal";
import TagManager from "react-gtm-module";
import AdminPortal from "./AdminPortal/Index";
import Login from "./AdminPortal/Login/Login";
import SignUp from "./AdminPortal/SignUp/SignUp";
import ForgotPassword from "./AdminPortal/ForgotPassword/ForgotPassword";

const tagManagerArgs = { gtmId: "GTM-ND5H33G7" };
TagManager.initialize(tagManagerArgs);

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  // List of paths where Navbar and Footer shouldn't be displayed
  const noNavFooterRoutes = ["/admin", "/login", "/forgot-password"];

  const shouldShowNavAndFooter = !noNavFooterRoutes.includes(pathname);

  return (
    <div className="home_page">
      <Suspense fallback={<div>loading....</div>}>
        {/* Conditionally render Navbar */}
        {shouldShowNavAndFooter && (
          <AppNavbar scrollToSection={scrollToSection} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Classes />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<div>Page not found.</div>} />
        </Routes>
        {/* Conditionally render Footer */}
        {shouldShowNavAndFooter && <Footer />}
      </Suspense>
      <ScrollToTopButton />
      <Modal />
    </div>
  );
}

export default App;
