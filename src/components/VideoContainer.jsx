/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utensils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
// import React from 'react'
const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    api_call();
  }, []);

  const api_call = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json_data = await data.json();
    // console.log(json_data.items);
    setVideos(json_data.items);
    
  };

  if (!videos) return null;
  // console.log(videos[0]);
  return (
    <div className="flex flex-wrap">
      <AdVideoCard info={videos[0]}/>
      {videos.map((video) => (
       <Link key={video.id} to={'/watch?v='+video.id}> <VideoCard  info={video}/> </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
