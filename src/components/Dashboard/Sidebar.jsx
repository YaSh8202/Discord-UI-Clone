import React from "react";
import SideElement from "./SideElement";
import { Friends, StageDiscovery, Nitro } from "./Svgs";
import { PlusIcon } from "@heroicons/react/solid";
import { MemoEmpty_dm_list } from "./Svgs";

const Sidebar = () => {
  return (
    <div className="w-[15rem] px-3 pt-3 h-full bg-Gray-300 gap-5 flex flex-col ">
      <div className="flex flex-col ">
        <div className="flex flex-col gap-[2px]">
          <button className="outline-none mb-2 bg-Gray-500 px-1 py-2 w-full text-sm text-left rounded-sm text-lightGray/50 ">
            Find or start a conversation
          </button>
          <SideElement active={true} Icon={Friends} text="Friends" />
          <SideElement Icon={StageDiscovery} text="Stage Discovery" />
          <SideElement Icon={Nitro} text="Nitro" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="uppercase text-gray-400 font-medium ">
            direct messages
          </h3>
          <PlusIcon className="w-5 h-5 text-lightGray " />
        </div>
        <div className="h-full mt-5  ">
          <MemoEmpty_dm_list className="fill-Gray-200" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
