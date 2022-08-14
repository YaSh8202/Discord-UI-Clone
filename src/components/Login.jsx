import React from "react";
import loginBg from "../../assets/login_bg.svg";
import discord from "../../assets/discord_main_logo.svg";
import qrCode from "../../assets/qr_code.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
      <img className=" w-full h-full -z-10 absolute " src={loginBg}></img>
      <div className="bg-Gray-200 h-full sm:h-[408px] w-full sm:w-[75%] md:w-[47rem] mx-auto flex flex-row   justify-between py-6 px-4 sm:px-6 md:px-8 md:py-10 rounded-md gap-16 ">
        <div className="flex flex-col w-full  justify-start sm:justify-between">
          <Link to="/">
            <img
              src={discord}
              className="w-[8.5rem] mx-auto pb-14 sm:absolute sm:left-10 sm:top-10  "
            />
          </Link>
          <div className="text-center mb-5 ">
            <h3 className="text-2xl text-white font-bold mb-1">
              Welcome Back!
            </h3>
            <p className="text-lightGray/60">
              We're so exicted to see you again!
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
            className=" "
          >
            <div>
              <label
                htmlFor="email "
                className="text-lightGray/70 font-medium uppercase text-xs block mb-2 "
              >
                Email or phone number
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-Gray-500 rounded outline-none text-lightGray/80 "
              />
            </div>
            <div className="mt-5 mb-1">
              <label
                htmlFor="password "
                className="text-lightGray/70 font-medium uppercase text-xs block mb-2 "
              >
                password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 bg-Gray-500 rounded outline-none text-lightGray/80 "
              />
            </div>
            <a href="#" className="text-sm text-[#00aff4]">
              Forgot your passowrd?
            </a>
            <button
              type="submit"
              className="bg-discordBlue-100 mt-4 text-white hover:opacity-80 text-center w-full rounded-sm p-2.5 "
            >
              Login
            </button>
            <div>
              <p className="text-lightGray/30 text-xs mt-2">
                Need an accout?{" "}
                <a href="/register" className="text-[#00aff4] text-sm">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="hidden md:flex flex-col items-center justify-between ">
          <div className="bg-white p-2 rounded-md ">
            <img src={qrCode} className="w-[11rem]  " />
          </div>
          <div className="text-center ">
            <h3 className="text-white font-bold text-2xl ">
              Log in with QR Code
            </h3>
            <p className="text-lightGray/70">
              Scan this with the Discord mobile app to log in instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
