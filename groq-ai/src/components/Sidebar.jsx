import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { GrCircleQuestion } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { Context } from "../utils/Context";

const Sidebar = () => {
  const { toggle, setToggle, onSent, prevPrompts, setRecentPrompt, newChat, selectedModel } =
    useContext(Context);

  const loadPrompt = async (prompt, model) => {
    setRecentPrompt(prompt);
    await onSent(prompt, model);
  };

  return (
    <>
      {toggle === false ? (
        <>
          {/* <-- for Desktop --> */}

          <div className="sticky top-0 hidden bg-[#1E1F20] w-[5.5%] h-screen text-white min-[900px]:flex flex-col justify-between">
            <div className="upper flex flex-col pl-4 pt-8 gap-10 text-xl">
              <span
                className="w-10 h-10 hover:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <MdMenu />
              </span>

              <span
                onClick={() => newChat()}
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center cursor-pointer"
              >
                <FaPlus />
              </span>
            </div>
            <div className="lower flex flex-col items-center pb-10 gap-8 text-xl">
              <span className="w-10 h-10 hover:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer">
                <GrCircleQuestion />
              </span>
              <span className="w-10 h-10 hover:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer">
                <FaHistory />
              </span>
              <span className="w-10 h-10 hover:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer">
                <IoSettingsSharp />
              </span>
            </div>
          </div>

          {/* <-- for Mobile --> */}

          <div className="hidden min-[900px]:hidden pl-4 pt-9 gap-10 text-2xl">
            <span
              className="w-10 h-10 hover:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <MdMenu />
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="sticky md:stikcy top-0 left-0 z-50 w-[60%] min-[900px]:relative bg-[#1E1F20] min-[900px]:w-[22%] h-screen text-white flex flex-col justify-between">
            <div className="upper flex flex-col pl-4 pt-8 gap-10 text-xl">
              <span
                className="w-10 h-10 hover:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <MdMenu />
              </span>

              <div onClick={() => newChat()} className="flex bg-zinc-800 w-32 h-10 rounded-full">
                <span onClick={() => newChat()} className="w-10 h-10 pl-2 bg-zinc-800 rounded-full justify-center items-center flex cursor-pointer">
                  <FaPlus />
                </span>
                <span className="w-full h-10 p-4 bg-zinc-800 justify-center rounded-r-full items-center flex cursor-pointer">
                  <p className="text-sm">New Chat</p>
                </span>
              </div>
            </div>

            <div
              className={`bottom-24 ${
                prevPrompts.length === 0 ? "bottom-24" : "bottom-2"
              } `}
            >
              <h1 className="p-6 text-xl">Recent</h1>
              <ul className="pl-4 px-4">
                {prevPrompts.slice(-5).map((item, index) => {
                  return (
                    <li
                      onClick={() => loadPrompt(item,selectedModel)}
                      key={index}
                      className="truncate py-2 px-2 flex items-center gap-2 hover:bg-zinc-700 hover:rounded-full hover:w-full cursor-pointer"
                    >
                      <span>
                        <FiMessageSquare />
                      </span>
                      <p className="flex-shrink-0 text-xs">
                        {item.slice(0, 28)}...
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="lower flex flex-col pl-4 pb-10 pr-3 gap-8 text-xl">
              <div className="flex items-center w-full hover:bg-zinc-700 rounded-full px-2.5 py-1 cursor-pointer">
                <GrCircleQuestion />
                <span className="ml-4">
                  <p className="text-sm">Help</p>
                </span>
              </div>
              <div className="flex items-center w-full hover:bg-zinc-700 rounded-full px-2.5 py-1 cursor-pointer">
                <FaHistory />
                <span className="ml-4">
                  <p className="text-sm">History</p>
                </span>
              </div>
              <div className="flex items-center w-full hover:bg-zinc-700 rounded-full px-2.5 py-1 cursor-pointer">
                <IoSettingsSharp />
                <span className="ml-4">
                  <p className="text-sm">Settings</p>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
