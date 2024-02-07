import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideBarFlag = useSelector((store)=>store.app.isMenuOpen)

  if(!sideBarFlag) return null;

  return (
    <div className="shadow-lg bg-slate-100 rounded-lg min-h-screen">
      <ul className="m-3 ">
        <li className="font-bold">Main</li>
        <ul className="m-3">
          <Link to='/'> <li>Home</li> </Link>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
        <li className="font-bold">Subscriptions</li>
        <ul className="m-3">
          <li>Music</li>
          <li>Akshy shaini</li>
          <li>Cartoons</li>
        </ul>
        <li className="font-bold">You</li>
        <ul className="m-3">
          <li>Playlist</li>
          <li>Saved videos</li>
          <li>History</li>
        </ul>
      </ul>
    </div>
  );
};

export default SideBar;
