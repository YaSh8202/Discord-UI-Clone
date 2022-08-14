import React, { useState } from "react";
import Navbar from "./Navbar";
import TabBody from "./TabBody";

const states = ["addFriend", "online", "all", "pending", "blocked"];
const Container = () => {
  const [activeTab, setActiveTab] = useState(states[0]);

  return (
    <div className="flex-1 flex flex-col">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <TabBody activeTab={activeTab} />
    </div>
  );
};

export default Container;
