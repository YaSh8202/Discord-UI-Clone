import React from "react";
import { Link } from "react-router-dom";

import { FaCompass } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import discordIcon from "../../../assets/discord_mini_icon.svg";
import newLineIcon from "../../../assets/new_line.png";
import RoundIcon from "./RoundIcon";

const Wrapper = () => {
  return (
    <div className="flex flex-col items-center py-4 gap-4 w-[72px] h-full bg-Gray-600 ">
      <Link to="/dashboard">
        <div className="rounded-2xl bg-discordBlue-100 grid place-items-center  h-12 w-12 ">
          <img
            className=" text-white w-7 h-5  "
            alt="discord"
            src={discordIcon}
          />
        </div>
      </Link>
      <Link to="/dashboard">
        <div className="rounded-xl bg-[#192e44] grid place-items-center  h-12 w-12 ">
          <img
            className="rounded-xl text-white w-full  "
            alt="discord"
            src={newLineIcon}
          />
        </div>
      </Link>
      <RoundIcon Icon={AiOutlinePlus} />
      <RoundIcon Icon={FaCompass} />
      <RoundIcon Icon={HiDownload} />
    </div>
  );
};

export default Wrapper;
