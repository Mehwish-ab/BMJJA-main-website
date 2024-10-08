import React, { useState } from "react";
import styles from "./Sidebar.module.css"; // Import CSS module

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

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
            <a href="#dashboard">
              <i className="fas fa-tachometer-alt"></i>{" "}
              {!isCollapsed && "Dashboard"}
            </a>
          </li>
          <li>
            <a href="#users">
              <i className="fas fa-users"></i> {!isCollapsed && "Create Video"}
            </a>
          </li>
          <li>
            <a href="#users">
              <i className="fas fa-users"></i> {!isCollapsed && "Edit Video"}
            </a>
          </li>
          <li>
            <a href="#users">
              <i className="fas fa-users"></i> {!isCollapsed && "Video List"}
            </a>
          </li>
          <li>
            <a href="#users">
              <i className="fas fa-users"></i> {!isCollapsed && "Users"}
            </a>
          </li>
          <li>
            <a href="#settings">
              <i className="fas fa-cog"></i> {!isCollapsed && "Settings"}
            </a>
          </li>
          <li>
            <a href="#reports">
              <i className="fas fa-chart-line"></i> {!isCollapsed && "Reports"}
            </a>
          </li>
          <div className={styles.logout}>
            <a href="#logout">
              <i className="fas fa-sign-out-alt"></i> {!isCollapsed && "Logout"}
            </a>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
