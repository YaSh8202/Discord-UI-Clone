import React from "react";

const ActiveNow = () => {
  return (
    <div className="flex px-3 flex-col py-8 items-start justify-start text-lightGray">
      <h2 className="text-lightGray text-xl font-bold capitalize">
        Active Now
      </h2>
      <div className="text-center mx-auto mt-10 ">
        <h3>It's quiet for now...</h3>
        <p className="text-gray-400 mt-3 ">
          When a friend starts an activity--like playing a game or hanging out
          on voice--we'll show it here!
        </p>
      </div>
    </div>
  );
};

export default ActiveNow;
