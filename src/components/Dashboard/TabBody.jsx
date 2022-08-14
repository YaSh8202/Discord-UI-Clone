import React from "react";

import {
  MemoAll_users_icon,
  MemoNo_online_friends,
  MemoPending_users_icon,
  MemoBlocked_users_icon,
} from "./Svgs";

function TabStatus(activeTab) {
  switch (activeTab) {
    case "all":
      return (
        <div className="w-full flex flex-col gap-6">
          <MemoAll_users_icon className="fill-Gray-100 w-full  " />
          <p className="text-gray-400 text-center ">
            Wumpus is waiting on friends. You don't have to though!
          </p>
        </div>
      );
    case ("online", "addFriend"):
      return (
        <div className="w-full flex flex-col gap-6">
          <MemoNo_online_friends className="fill-Gray-100 w-full  " />
          <p className="text-gray-400 text-center ">
            No one is around to play with Wumpus.
          </p>
        </div>
      );
    case "pending":
      return (
        <div className="w-full flex flex-col gap-6">
          <MemoPending_users_icon className="fill-Gray-100 w-full  " />
          <p className="text-gray-400 text-center ">
            There are no pending friend requests. Here's Wumpus for now.
          </p>
        </div>
      );
    case "blocked":
      return (
        <div className="w-full flex flex-col gap-6">
          <MemoBlocked_users_icon className="fill-Gray-100 w-full  " />
          <p className="text-gray-400 text-center ">
            You can't unblock the Wumpus.
          </p>
        </div>
      );

    default:
      return <></>;
  }
}

const TabBody = ({ activeTab }) => {
  return (
    <div className="flex flex-row flex-1 bg-Gray-200 ">
      <div className="flex-[4] flex flex-col items-center border-r border-Gray-100">
        {activeTab === "addFriend" && <div></div>}
        <div className="flex-1 w-[55%] flex items-center justify-center ">
          {TabStatus(activeTab)}
        </div>
      </div>
      <div className="flex-[2] flex flex-col items-center"></div>
    </div>
  );
};

export default TabBody;
