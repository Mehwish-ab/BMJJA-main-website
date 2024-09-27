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
import TagManager from 'react-gtm-module';

const tagManagerArgs = { gtmId: 'GTM-ND5H33G7' }; 
TagManager.initialize(tagManagerArgs);


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <div className="home_page">
      <Suspense fallback={<div>loading....</div>}>
        <AppNavbar scrollToSection={scrollToSection} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Classes />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />

          <Route path="*" element={<div>Page not found.</div>} />
        </Routes>
        <Footer />
      </Suspense>
      <ScrollToTopButton />
      <Modal />
    </div>
  );
}

export default App;
