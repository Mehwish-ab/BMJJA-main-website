import React from "react";
import "./index.css";
import "./styles.js";
import Navbar from "./Navbar/Navbar.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./Sidebar/Sidebar.jsx";

function index() {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default index;
