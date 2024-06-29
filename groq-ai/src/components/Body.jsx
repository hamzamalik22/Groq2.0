import React, { useContext, useState } from "react";
import { RiUser4Fill } from "react-icons/ri";
import { TbPennant } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { IoTerminalOutline } from "react-icons/io5";
import { AiOutlineCompass } from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import { MdMenu } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import groqimg from "../images/groq.svg";
import { AppContext } from "../utils/Context";
import Loader from "./Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoSingleSelect } from "react-icons/go";
import { Link } from "react-router-dom";
import { useFirebase } from "../firebase/AuthFirebaseContext";

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
    selectedModel,
    setSelectedModel,
  } = useContext(AppContext);

  const { userLogout } = useFirebase();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [dropdown, setDropdown] = useState(false);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const renderResultData = (data) => {
    const codeRegex = /```([\s\S]*?)```/g;
    const boldRegex = /\*\*([\s\S]*?)\*\*/g;
    const parts = data.split(codeRegex);

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <div key={index} className="relative">
            <pre className="bg-zinc-800 p-2 rounded-md overflow-auto my-2">
              {part}
            </pre>
            <span
              className="absolute top-2 right-2 bg-zinc-700 cursor-pointer text-xl hover:bg-zinc-500 p-1 rounded-md"
              onClick={() => copyToClipboard(part)}
            >
              <FaRegCopy />
            </span>
          </div>
        );
      } else {
        const boldParts = part.split(boldRegex);
        return (
          <p key={index} className="whitespace-pre-wrap my-2">
            {boldParts.map((boldPart, i) =>
              i % 2 === 1 ? <b key={i}>{boldPart}</b> : boldPart
            )}
          </p>
        );
      }
    });
  };

  const models = [
    "llama3-8b-8192",
    "llama3-70b-8192",
    "mixtral-8x7b-32768",
    "gemma-7b-it",
  ];

  return (
    <>
      <ToastContainer />
      <div className="relative bg-zinc-900 w-full min-h-screen max-h-fit text-white">
        <nav className="flex justify-between items-center pt-8 px-1 min-[900px]:p-8">
          <div className="flex items-baseline gap-4">
            {!toggle && (
              <div className="min-[900px]:hidden pl-2 text-2xl">
                <span
                  className="w-10 h-10 hover:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                >
                  <MdMenu />
                </span>
              </div>
            )}

            <h1 className="logo text-4xl">GROQ</h1>
            <div className="relative">
              <button
                className="text-xl text-zinc-400 hover:text-zinc-100 focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="flex gap-2 items-center">
                  <p className="text-xs tracking-tight">Model</p>
                  <GoSingleSelect />
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute text-xs mt-2 w-36 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg z-10">
                  {models.map((model) => (
                    <div
                      key={model}
                      className={`px-4 py-2 cursor-pointer hover:bg-zinc-700 ${
                        selectedModel === model ? "bg-zinc-700" : ""
                      }`}
                      onClick={() => {
                        setSelectedModel(model);
                        setDropdownOpen(false);
                      }}
                    >
                      {model}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="User">
            <span
              onClick={() => setDropdown(!dropdown)}
              className="text-3xl cursor-pointer"
            >
              <RiUser4Fill />
            </span>
            {dropdown && (
              <div className="flex flex-col items-center absolute right-8 text-xs mt-2 w-36 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg z-10">
                <Link
                  to="/"
                  className="px-4 py-2 cursor-pointer hover:bg-zinc-700 border-b"
                >
                  Home
                </Link>
                <button
                  onClick={() => userLogout()}
                  className="px-4 py-2 cursor-pointer hover:bg-zinc-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {!showResult ? (
          <>
            <div className="flex justify-center pt-12 md:pt-0">
              <img
                className="w-[60%] md:w-[40%]"
                src={groqimg}
                alt="GROQ logo"
              />
            </div>

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
            <div className="flex flex-col gap-4 px-10 max-[430px]:px-4">
              <div className="flex justify-end relative top-16">
                <img
                  className="w-12 h-12 max-[430px]:w-10 max-[430px]:h-10 rounded-full"
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg"
                  alt="avatar"
                />
              </div>
              <div className="border p-4 mr-16 max-[430px]:mr-14 max-[430px]:text-sm rounded-lg self-end w-[80%] max-[430px]:w-[60%] md:w-fit md:max-w-[80%]">
                <p className="whitespace-pre-wrap">{recentPrompt}</p>
              </div>
              {loading ? (
                <div className="pl-4">
                  <Loader />
                </div>
              ) : (
                <div className="flex justify-center result-data">
                  <img
                    className="w-12 h-12 rounded-full max-[430px]:w-9 max-[430px]:h-9"
                    src="https://img.freepik.com/premium-photo/3d-rendering-female-robot-isolated-black-background-with-neon-lights-generative-ai_646737-2105.jpg"
                    alt="avatar"
                  />
                  <div className="border p-4 pt-6 ml-6 max-[430px]:ml-4 max-[430px]:text-sm rounded-lg self-start w-[80%] max-[430px]:w-[90%] md:w-[70%] mb-32 relative">
                    {resultData ? (
                      renderResultData(resultData)
                    ) : (
                      <p>No data available.</p>
                    )}
                    {resultData && (
                      <span
                        className="absolute top-2 right-2 bg-zinc-700 cursor-pointer text-xl hover:bg-zinc-500 p-1 rounded-md"
                        onClick={() => copyToClipboard(resultData)}
                      >
                        <FaRegCopy />
                      </span>
                    )}
                  </div>
                </div>
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
