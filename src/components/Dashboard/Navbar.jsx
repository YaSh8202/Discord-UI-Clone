import React from "react";
import { Friends } from "./Svgs";
const states = ["online", "all", "pending", "blocked"];
const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <div className="h-[3.25rem] border-b-2 border-Gray-500 px-4 bg-Gray-200 w-full flex flex-row justify-between items-center ">
      <div className="flex items-center gap-8 ">
        <div className="flex gap-2 ">
          <Friends color="fill-gray-400" />
          <p className="text-lightGray font-medium">Friends</p>
        </div>

        {states.map((state, index) => (
          <button
            onClick={() => onTabChange(state)}
            key={index}
            className={`capitalize ${
              activeTab === state ? "text-lightGray" : "text-gray-400"
            } `}
          >
            {state}
          </button>
        ))}

        <button
          onClick={() => onTabChange("addFriend")}
          className={`${
            activeTab === "addFriend"
              ? "text-green bg-transparent font-medium"
              : "text-white bg-green"
          }   rounded text-sm py-1 px-2 `}
        >
          Add Friend
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
