import React from "react";
import Base from "./Base";
import Wrapper from "./Wrapper";

const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden ">
      <Wrapper />
      <Base />
    </div>
  );
};

export default Dashboard;
