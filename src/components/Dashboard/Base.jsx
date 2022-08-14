import React from "react";
import Container from "./Container";
import Sidebar from "./Sidebar";

const Base = () => {
  return (
    <div className="flex-1 flex flex-row ">
      <Sidebar />
      <Container />
    </div>
  );
};

export default Base;
