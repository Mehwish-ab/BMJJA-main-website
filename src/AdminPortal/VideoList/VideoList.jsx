import React, { useState, useEffect } from "react";
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import styles from './VideoList.module.css';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const VideoList = ({ videos, setVideos }) => {
  const [menuVisible, setMenuVisible] = useState(null);
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [filter, setFilter] = useState({ category: "", subCategory: "" });
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const categories = ["Category1", "Category2"]; // You can fetch this dynamically
  const subcategories = {
    Category1: ["SubCategory1", "SubCategory2"],
    Category2: ["SubCategory3", "SubCategory4"],
  };

  useEffect(() => {
    // Filter videos based on category and subcategory
    const filtered = videos.filter(video => 
      (filter.category ? video.category === filter.category : true) &&
      (filter.subCategory ? video.subCategory === filter.subCategory : true)
    );
    setFilteredVideos(filtered);
  }, [filter, videos]);

  const handleMenuClick = (event, videoId) => {
    setMenuVisible(menuVisible === videoId ? null : videoId);
  };

  const handleClose = () => {
    setMenuVisible(null);
  };

  const handleView = (videoId) => {
    navigate(`/videos/${videoId}`); // Navigate to the video detail page
    handleClose();
  };

  const handleEdit = (videoId) => {
    alert(`Editing video ID: ${videoId}`);
    handleClose();
  };

  const handleDelete = (videoId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this video?");
    if (confirmDelete) {
      const updatedVideos = videos.filter(video => video.id !== videoId);
      setVideos(updatedVideos); // Updates the state to remove the deleted video
      alert("Video deleted successfully!");
    }
    handleClose();
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Navbar />
      <div className={styles.pageLayout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <div className={styles.content}>
          <div className={styles.filterContainer}>
            <h2>Uploaded Videos</h2>
            <div className={styles.filterBox}>
              <select 
                name="category" 
                value={filter.category} 
                onChange={handleFilterChange}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {filter.category && (
                <select 
                  name="subCategory" 
                  value={filter.subCategory} 
                  onChange={handleFilterChange}
                >
                  <option value="">All Subcategories</option>
                  {subcategories[filter.category]?.map((subCat) => (
                    <option key={subCat} value={subCat}>{subCat}</option>
                  ))}
                </select>
              )}
            </div>
          </div>

          <Link to="/uploadvideo">
            <button className={styles.uploadButton}>Upload More Videos</button>
          </Link>

          <div className={styles.videoGrid}>
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video) => (
                <div key={video.id} className={styles.videoCard}>
                  <div className={styles.videoPreview}>
                    <iframe 
                      src={video.embedLink} 
                      frameBorder="0" 
                      allowFullScreen 
                      title={video.title} 
                      className={styles.iframe}
                    ></iframe>
                  </div>
                  <div className={styles.videoInfo}>
                    <h5>{video.title}</h5>
                    <p>{video.smallDescription}</p>
                    <div className={styles.actions}>
                      <div onClick={() => handleView(video.id)}><FiEye /> View</div>
                      <div onClick={() => handleEdit(video.id)}><FiEdit /> Edit</div>
                      <div onClick={() => handleDelete(video.id)}><FiTrash /> Delete</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No videos available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoList;
