import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";

const Ai = () => {
  return (
    <>
      <div className="w-full h-screen bg-green-300">
        <Sidebar />
        <Body />
      </div>
    </>
  );
};

export default Ai;
