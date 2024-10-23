import React, { useState } from "react";
import styles from "./Sidebar.module.css"; 
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // const handleCollapse = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
    <>
      <div
        className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
      >
        {/* <div className={styles.logo} onClick={handleCollapse}>
        <h2>{isCollapsed ? "AP" : "Admin Portal"}</h2>
      </div> */}
        <ul className={styles.navLinks}>
          <li>
          <Link to="/admin" > <i className="fas fa-tachometer-alt"></i> {!isCollapsed && "Dashboard"}</Link>
            {/* <a href="/admin">
              <i className="fas fa-tachometer-alt"></i>{" "}
              {!isCollapsed && "Dashboard"}
            </a> */}
          </li>
          <li>
            {/* <a href="/createvideo">
              <i className="fas fa-users"></i> {!isCollapsed && "Create Video"}
            </a> */}
            <Link to="/uploadvideo" > <i className="fas fa-users" ></i> {!isCollapsed && "Upload Video"}</Link>

          </li>
          <li>
          <Link to="/videolist" > <i className="fas fa-users" color="grey"></i> {!isCollapsed && "Video List"}</Link>

           
          </li>
          <li>
            {/* <a href="/addcategory">
              <i className="fas fa-users"></i> {!isCollapsed && "Edit Video"}
            </a> */}
             <Link to="/addcategory" > <i className="fas fa-users" color="grey"></i> {!isCollapsed && "Add Category"}</Link>
          </li>
         
          {/* <li>
            <a href="#users">
              <i className="fas fa-users"></i> {!isCollapsed && "Users"}
            </a>
          </li> */}
          <li>
            <a href="#settings">
              <i className="fas fa-cog"></i> {!isCollapsed && "Settings"}
            </a>
          </li>
          {/* <li>
            <a href="#reports">
              <i className="fas fa-chart-line"></i> {!isCollapsed && "Reports"}
            </a>
          </li> */}
          <div className={styles.logout}>
            <a href="/">
              <i className="fas fa-sign-out-alt"></i> {!isCollapsed && "Logout"}
            </a>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
