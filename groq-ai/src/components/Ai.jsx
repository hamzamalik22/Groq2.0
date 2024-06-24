import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";

const Ai = () => {
  return (
    <>
      <div className="w-full min-h-screen max-h-fit bg-zinc-900 flex text-white relative">
        <Sidebar />
        <Body />
      </div>
    </>
  );
};

export default Ai;
