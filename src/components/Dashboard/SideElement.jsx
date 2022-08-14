import React from "react";

const SideElement = ({ Icon, text, active = false }) => {
  return (
    <div
      className={`group flex items-center gap-3 hover:bg-Gray-100/70 hover:brightness-105 h-11 px-1 rounded-md ${
        active ? "bg-Gray-100/90" : ""
      } `}
    >
      <Icon />
      <p className=" font-semibold text-lightGray group-hover:text-lightGray/60">
        {text}
      </p>
    </div>
  );
};

export default SideElement;
