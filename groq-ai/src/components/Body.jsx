import React, { useContext } from "react";
import { RiUser4Fill } from "react-icons/ri";
import { TbPennant } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa6";
import { IoTerminalOutline } from "react-icons/io5";
import { AiOutlineCompass } from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import { MdMenu } from "react-icons/md";
import groqimg from "../images/groq.svg";
import { Context } from "../utils/Context";
import Loader from "./Loader";

const Body = () => {
  const {
    toggle,
    setToggle,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <>
      <div className="relative bg-zinc-900 w-full min-h-screen max-h-fit text-white ">
        <nav className="flex justify-between items-center pt-8 px-1 md:p-8">
          <div className="flex items-baseline gap-4">
            <div className=" min-[900px]:hidden pl-2 text-2xl">
              <span
                className="w-10 h-10 hover:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <MdMenu />
              </span>
            </div>
            <h1 className="logo text-4xl">GROQ</h1>
          </div>
          <div className="User">
            <span className="text-3xl cursor-pointer">
              <RiUser4Fill />
            </span>
          </div>
        </nav>

        {!showResult ? (
          <>
            <div className="flex justify-center pt-12 md:pt-0">
              <img className="w-[60%] md:[40%]" src={groqimg} alt="" />
            </div>

            {/* <--- Hero Section ---> */}

            <div className="flex gap-10 items-center px-2 md:justify-center pt-20 overflow-x-auto hide-scrollbar">
              <div className="w-42 h-28 rounded-[20px] bg-transparent border py-5 px-4 overflow-hidden flex-shrink-0">
                <TbPennant />
                <h3 className="text-sm mt-2">Email for plumber quote</h3>
              </div>

              <div className="relative w-44 h-28 rounded-[20px] bg-transparent border py-5 px-4 overflow-hidden flex-shrink-0">
                <FaGraduationCap />
                <h3 className="text-sm mt-2">Explain superconductors</h3>
              </div>

              <div className="relative w-44 h-28 rounded-[20px] bg-transparent border py-5 px-4 overflow-hidden flex-shrink-0">
                <IoTerminalOutline />
                <h3 className="text-sm mt-2">Make me a personal webpage</h3>
              </div>
              <div className="relative w-44 h-28 rounded-[20px] bg-transparent border py-5 px-4 overflow-hidden flex-shrink-0">
                <AiOutlineCompass />
                <h3 className="text-sm mt-2">
                  Fun fact about the Roman Empire
                </h3>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4 px-10">
              <div className="bg-zinc-800 p-4 mr-10 rounded-lg self-end w-[80%] md:w-fit md:max-w-[80%]">
                <p className="whitespace-pre-wrap">{recentPrompt}</p>
              </div>
              {loading ? (
                <>
                  <div className="pl-4">
                    <Loader />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`flex ${
                      resultData ? "result-data" : "result-data"
                    }`}
                  >
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg"
                      alt=""
                    />
                    <div className="bg-gray-900 p-4 ml-6 rounded-lg self-start w-[80%] md:w-[70%] mb-32">
                      <pre className="whitespace-pre-wrap">
                        {resultData ? resultData : "No data available."}
                      </pre>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}

        <div className="absolute bottom-10 w-full flex justify-center items-center gap-4">
          <div className="flex border items-center w-[80%] md:w-[50%] rounded-full">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="w-[91%] p-3 py-4 rounded-full bg-transparent outline-none pl-6"
              type="text"
              placeholder="Enter a prompt here..."
            />
            <span
              onClick={() => onSent()}
              className="cursor-pointer h-10 w-10 hover:bg-zinc-500 flex items-center justify-center rounded-full"
            >
              <GrSend />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
