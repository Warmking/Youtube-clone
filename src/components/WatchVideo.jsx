/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utensils/appSlice";
import { useEffect } from "react";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const [serchParam] = useSearchParams();
  const videoId = serchParam.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    handleCloseMenu();
  }, []);

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  

  return (
    <div>
      <div className="m-5 drop-shadow-2xl flex">
        <iframe
          className="rounded-2xl"
          width="800"
          height="440"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LiveChat/>
      </div>
      <div>
            <CommentsContainer/>
      </div>
    </div>
  );
};

export default WatchVideo;
