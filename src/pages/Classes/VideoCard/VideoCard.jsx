import React from "react";
import { VideoCardStyled } from "./styles";
// import videoImg from "../../../assets/images/youtube.png";
import { useNavigate } from "react-router-dom";
import VideoDescription from "./VideoDescription";

const VideoCard = ({title,description,img ,id}) => {
  const navigate = useNavigate();

  return (
    <VideoCardStyled
      className="cursor-pointer"
      onClick={() => navigate(`/videos/${id}`)}
    >
      <div className="image-container">
        <img src={img} alt="" />
        {/* <div className="time">
          <p>3:30</p>
        </div> */}
      </div>
      <VideoDescription
        heading={title}
        description={description}     
      />
    </VideoCardStyled>
  );
};

export default VideoCard;
