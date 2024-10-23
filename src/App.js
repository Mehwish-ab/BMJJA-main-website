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
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Home from "./pages/Home/Index";
import Classes from "./pages/Classes/Index";
import React, { useState ,useRef} from "react";
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
import UploadVideo from "./AdminPortal/UploadVideo/UploadVideo";
import VideoList from "./AdminPortal/VideoList/VideoList";
import AddCategory from "./AdminPortal/AddCategory/AddCategory";


const tagManagerArgs = { gtmId: "GTM-ND5H33G7" };
TagManager.initialize(tagManagerArgs);

const App = () => {
  const { pathname } = useLocation();
  const [categories, setCategories] = useState([
    { name: "Technology", subcategories: ["AI", "Web Development", "Cybersecurity"] },
    { name: "Health", subcategories: ["Fitness", "Nutrition", "Mental Health"] },
  ]);
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Introduction to React",
      smallDescription: "In this video you will learn A comprehensive introduction to React.js",
      embedLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "A comprehensive introduction to React.js",
      
    },
    {
      id: 2,
      title: "Understanding JavaScript Promises",
      smallDescription: "In this video you will learn about Promises in JavaScript",
      embedLink: "https://www.youtube.com/embed/VKq58x3D2Kg",
      description: "Learn about Promises in JavaScript.",
    
    },
    {
      id: 3,
      title: "CSS Flexbox Explained",
      duration: "12",
      embedLink: "https://www.youtube.com/embed/fYq5PXgSsbE",
      description: "An overview of CSS Flexbox layout.",
      isActive: false,
    },
  ]);

  const addVideo = (newVideo) => {
    setVideos((prevVideos) => [...prevVideos, newVideo]);
  };

   // Add new category dynamically from AddCategory component
   const handleAddCategory = (newCategory) => {
    setCategories(prevCategories => [...prevCategories, newCategory]);
  };

//   const token =   localStorage.getItem('token');
// const navigate=useNavigate()
//   useEffect(() => { 
//     console.log("token is ",token)
// if(token){
//   return navigate("/")
// }
// else if(!token){
// return navigate("login")
// }
//   }, [token])


  
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  // List of paths where Navbar and Footer shouldn't be displayed
  const noNavFooterRoutes = ["/admin", "/login", "/forgot-password", "/signup", "/uploadvideo", "/videolist", "/addcategory"];

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
          <Route path="/uploadvideo" element={<UploadVideo addVideo={addVideo} categories={categories}/>} />
          <Route path="/videolist" element={<VideoList videos={videos}/>} />
          <Route path="/addcategory" element={<AddCategory onAddCategory={handleAddCategory} />} />

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
