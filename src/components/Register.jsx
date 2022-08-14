import React from "react";
import loginBg from "../../assets/login_bg.svg";
import discord from "../../assets/discord_main_logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
      <img className=" w-full h-full -z-10 absolute " src={loginBg}></img>
      <Link to="/">
        <img
          src={discord}
          className="absolute top-10 w-[8.5rem] mx-auto pb-14 left-10  "
        />
      </Link>
      <div className="bg-Gray-200 h-full sm:h-[450px] w-full sm:w-[35rem] mx-auto flex flex-row  justify-between  px-4 sm:px-6 md:px-8 md:py-10 rounded-md gap-16 ">
        <div className=" flex flex-col w-full h-full  justify-center sm:justify-center">
          <h3 className="text-white text-2xl text-center mb-5 font-medium">
            Create an account
          </h3>
          <div>
            <label
              htmlFor="email "
              className="text-lightGray/70 font-medium uppercase text-xs block mb-2 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-Gray-500 rounded outline-none text-lightGray/80 "
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="username "
              className="text-lightGray/70 font-medium uppercase text-xs block mb-2 "
            >
              username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 bg-Gray-500 rounded outline-none text-lightGray/80 "
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="password "
              className="text-lightGray/70 font-medium uppercase text-xs block mb-2 "
            >
              password
            </label>
            <input
              type="text"
              id="password"
              className="w-full px-3 py-2 bg-Gray-500 rounded outline-none text-lightGray/80 "
            />
          </div>
          <button className="mb-1  bg-discordBlue-100 mt-8 text-white hover:opacity-80 text-center w-full rounded-sm p-2.5 ">
            Continue
          </button>

          <Link to="/login" className="text-[#00aff4] text-sm">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
