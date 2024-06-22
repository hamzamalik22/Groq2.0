import React from "react";
import { RiUser4Fill } from "react-icons/ri";
import { TbPennant } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa6";
import { IoTerminalOutline } from "react-icons/io5";
import { AiOutlineCompass } from "react-icons/ai";
import { GrSend } from "react-icons/gr";

const Body = () => {
  return (
    <>
      <div className="relative bg-zinc-900 w-full h-full text-white">
        <nav className="flex justify-between items-center p-10">
          <div className="logo text-4xl">GROQ</div>
          <div className="User">
            <span className="text-3xl cursor-pointer">
              <RiUser4Fill />
            </span>
          </div>
        </nav>

        <div className="flex justify-center">
          <img
            className="w-[40%] scale-300"
            src="https://console.groq.com/groqcloud_light_v2.svg"
            alt=""
          />
        </div>

        <div className="flex gap-10 justify-center items-center pt-20">
          <div>
            <div className="relative w-44 h-28 rounded-[20px] bg-transparent border  py-5 px-4 overflow-hidden">
              <TbPennant />
              <h3 className="text-sm mt-2">Email for plumber quote</h3>
              <div className="absolute bottom-0 left-0 py-3 flex justify-between items-center w-full px-4 "></div>
            </div>
          </div>

          <div>
            <div className="relative w-44 h-28 rounded-[20px] bg-transparent border  py-5 px-4 overflow-hidden">
              <FaGraduationCap />
              <h3 className="text-sm mt-2">Explain superconductors</h3>
              <div className="absolute bottom-0 left-0 py-3 flex justify-between items-center w-full px-4 "></div>
            </div>
          </div>

          <div>
            <div className="relative w-44 h-28 rounded-[20px] bg-transparent border  py-5 px-4 overflow-hidden">
              <IoTerminalOutline />
              <h3 className="text-sm mt-2">Make me a personal webpage</h3>
              <div className="absolute bottom-0 left-0 py-3 flex justify-between items-center w-full px-4 "></div>
            </div>
          </div>
          <div>
            <div className="relative w-44 h-28 rounded-[20px] bg-transparent border  py-5 px-4 overflow-hidden">
              <AiOutlineCompass />
              <h3 className="text-sm mt-2">Fun fact about the Roman Empire</h3>
              <div className="absolute bottom-0 left-0 py-3 flex justify-between items-center w-full px-4 "></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 w-full flex justify-center items-center gap-4 ">
          <div className="flex border  items-center w-[50%] rounded-full">
            <input
              className="w-[91%] p-3 py-4 rounded-full bg-transparent outline-none"
              type="text"
              placeholder="Enter a prompt here..."
            />
            <span className="cursor-pointer h-10 w-10 hover:bg-zinc-500 flex items-center justify-center rounded-full"><GrSend /></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
