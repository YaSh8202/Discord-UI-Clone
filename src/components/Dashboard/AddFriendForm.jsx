import React from "react";

const AddFriendForm = () => {
  return (
    <div className="flex w-full flex-col py-4 px-7 items-start justify-between h-[10rem] border-Gray-100 border-b-[0.1px] outline-none ">
      <h2 className="text-lightGray uppercase text-base font-bold">
        add Friend
      </h2>
      <p className="text-gray-400 text-sm ">
        You can add a friend with their Discord Tag. It's cAsE sEnsiTiVe!
      </p>
      <div className="w-full flex flex-row rounded-md items-center bg-Gray-500 h-14 px-4 ">
        <input
          className="bg-transparent text-gray-300 placeholder:text-gray-500 h-8  outline-none flex-1 "
          placeholder="Enter a Username#0000 "
        />
        <button className="bg-discordBlue-100 h-8 px-3 rounded-sm text-lightGray font-medium text-sm">
          Send Friend Request
        </button>
      </div>
    </div>
  );
};

export default AddFriendForm;
