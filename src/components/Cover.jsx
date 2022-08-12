import React from "react";
import Navbar from "./Navbar";
import clouds from "../../assets/center_bg_landing_header.svg";
import leftImage from "../../assets/left_bg_landing_header.svg";
import rightImage from "../../assets/right_bg_landing_header.svg";
import { DownloadIcon } from "@heroicons/react/outline";

function Cover() {
  return (
    <div className=" overflow-x-hidden relative pt-6 bg-discordBlue-200 min-h-screen ">
      <Navbar />

      <div className=" z-[8] h-full w-full flex items-center justify-center absolute left-0 -top-12 ">
        <div className="text-white w-4/5 mx-auto text-center flex items-center flex-col  ">
          <h1 className="text-7xl mb-10 font-bold ">IMAGINE A PLACE...</h1>
          <div className="w-[60%] mx-auto text-center leading-9 text-lg  ">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </div>
          <div className="w-4/5 flex mt-12 child:shadow child-hover:shadow-lg child:duration-150 ">
            <button className=" flex items-center justify-center w-1/2 h-14 rounded-full bg-white text-Gray-100 gap-2 hover:text-discordBlue-100 ">
              <DownloadIcon className="h-6 w-6" />
              Download for Mac
            </button>
            <button className="w-1/2 h-14 rounded-full ml-4 bg-Gray-300 text-white hover:Gray-100 hover:brightness-[1.2] ">
              Open Discord in your browser
            </button>
          </div>
        </div>
      </div>

      <img
        className="z-[1]  max-w-none absolute w-[2750px] bottom-0 left-[-70rem] "
        src={clouds}
      />
      <img
        className="z-[4] max-w-none w-[28rem] lg:w-[36rem] absolute -left-[16rem] lg:-left-32 bottom-0 "
        src={leftImage}
      />
      <img
        className="z-[4] max-w-none w-[30rem] lg:w-[40rem] absolute  lg:-right-36 -right-[18rem] bottom-0  "
        src={rightImage}
      />
    </div>
  );
}

export default Cover;
