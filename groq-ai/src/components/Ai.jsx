import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import conf from "../utils/conf";

const Ai = () => {
  const [toggle, setToggle] = useState(false);
  // console.log(toggle);

  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex text-white relative">
        <Sidebar toggle={toggle} setToggle={setToggle} />
        <Body toggle={toggle} setToggle={setToggle} />
      </div>
    </>
  );
};

export default Ai;
