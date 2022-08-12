import React from "react";
import discordLogo from "../../assets/discord_main_logo.svg";

const Navbar = () => {
  return (
    <div className=" z-10 relative">
      <nav className="flex  flex-row w-11/12 lg:w-3/4 mx-auto items-center justify-betweeen ">
        <img
          src={discordLogo}
          className="text-white flex-2 w-24 md:w-32 lg:w-32  "
        />
        <div className="flex flex-[6] flex-row justify-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 child:font-bold child:text-xs md:child:text-sm child:lg:text-base child-hover:underline  ">
          <a className="text-white text-sm" href="#">
            Download
          </a>
          <a className="text-white text-sm" href="#">
            Nitro
          </a>
          <a className="text-white text-sm" href="#">
            Safety
          </a>
          <a className="text-white text-sm" href="#">
            Support
          </a>
          <a className="text-white text-sm" href="#">
            Blog
          </a>
          <a className="text-white text-sm" href="#">
            Careers
          </a>
        </div>
        <div className="flex-1">
          <button className=" text-Gray-600 font-medium leading-4 shadow-sm px-4 py-2.5 text-sm rounded-full hover:shadow-xl ease-in-out hover:text-discordBlue-100 bg-white">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
