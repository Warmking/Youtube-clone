/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utensils/appSlice";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESION_API } from "../utensils/constants";
import { addCache } from "../utensils/searchSlice";
// import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const handleSideBar = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggetions, setShowSuggetions] = useState(false);
  const [suggetions , setSuggetions] = useState([])
  const cache = useSelector((store)=>store.search)

  useEffect(() => {
    const t = setTimeout(() => {
      if(cache[searchQuery]) {
        setSuggetions(cache[searchQuery])
      }
      else{callSearchApi()}
      
    }, 200);
    return () => {
      clearTimeout(t);
    };
  }, [searchQuery]);

  const callSearchApi = async () => {
    const data = await fetch(SEARCH_SUGGESION_API+searchQuery)
    const json = await data.json()
      setSuggetions(json[1])
      dispatch(addCache(
        {[searchQuery]:json[1]}
      ))
  };

  return (
    <div className="grid grid-flow-col mt-2 mb-3 p-2 sticky top-0 bg-white">
      <div className="flex col-span-1 mx-1 ">
        <img
          className="h-8 p-1 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          onClick={handleSideBar}
        />

        <img
          className="h-8 p-1 mx-5"
          alt="youtube Logo"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
        />
      </div>

      <div className="col-span-10 ml-10">
        <div>
          <input
            className="border-gray-500 border w-1/2 py-1 pl-4 rounded-l-full showSuggetions:border-sky-600 outline-none "
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggetions(true)}
            onBlur={() => setShowSuggetions(false)}
          />
          <button className="border-gray-500 border py-1 px-3  rounded-r-full">
            🔍
          </button>
        </div>
        <div className="absolute bg-white  m-1 rounded-2xl w-[26rem] border border-gray-200">
          <ul>
            {showSuggetions && (

              suggetions.map((item)=><li key={item}
                className="shadow-sm p-2 hover:bg-slate-100"
                // onClick={(e) => {
                //   console.log(e.target.searchQuery);
                // }}
              >
                🔍 {item}
              </li>)
              
            )}
          </ul>
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
