/* eslint-disable react/prop-types */
// import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  return (
    <div className="m-2 p-1">
      <img
        className="rounded-xl shadow-md"
        alt="Thumbnail"
        src={snippet.thumbnails.medium.url}
      />
      <div className="w-80">
        <ul className="m-1">
          <li className="font-bold text-ellipsis overflow-hidden">
            {" "}
            {snippet.title}
          </li>
          <li> {snippet.channelTitle}</li>
          <li> {statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export const AdVideoCard = ({info}) => {
  return (
    <div className="border-red-100 border">
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard;
