import { MdMenu } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { GrCircleQuestion } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";

const Sidebar = ({ toggle, setToggle }) => {
  return (
    <>
      {toggle === false ? (
        <>
          {/* <-- for Desktop --> */}

          <div className="hidden bg-[#1E1F20] w-[5.5%] h-full text-white min-[900px]:flex flex-col justify-between">
            <div className="upper flex flex-col pl-4 pt-8 gap-10 text-xl">
              <span
                className="w-10 h-10 hover:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <MdMenu />
              </span>

              <span className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center cursor-pointer">
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
          <div className="fixed top-0 left-0 z-50 w-[60%] min-[900px]:relative bg-[#1E1F20] min-[900px]:w-[22%] h-full text-white flex flex-col justify-between">
            <div className="upper flex flex-col pl-4 pt-8 gap-10 text-xl">
              <span
                className="w-10 h-10 hover:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <MdMenu />
              </span>

              <div className="flex bg-zinc-800 w-32 h-10 rounded-full">
                <span className="w-10 h-10 pl-2 bg-zinc-800 rounded-full justify-center items-center flex cursor-pointer">
                  <FaPlus />
                </span>
                <span className="w-full h-10 p-4 bg-zinc-800 justify-center rounded-r-full items-center flex cursor-pointer">
                  <p className="text-sm">New Chat</p>
                </span>
              </div>
            </div>
            <div className="">
              <h1 className="p-6 text-xl">Recent</h1>
              <ul className="pl-4 px-4">
                <li className="truncate py-2 px-2 flex items-center gap-2 hover:bg-zinc-700 hover:rounded-full hover:w-full cursor-pointer">
                  <span>
                    <FiMessageSquare />
                  </span>
                  <p className="flex-shrink-0 text-xs">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="py-2 px-2 flex items-center gap-2 hover:bg-zinc-700 hover:rounded-full hover:w-full cursor-pointer">
                  <span>
                    <FiMessageSquare />
                  </span>
                  <p className="flex-shrink-0 text-xs">hello</p>
                </li>
                <li className="py-2 px-2 flex items-center gap-2 hover:bg-zinc-700 hover:rounded-full hover:w-full cursor-pointer">
                  <span>
                    <FiMessageSquare />
                  </span>
                  <p className="flex-shrink-0 text-xs">hello</p>
                </li>
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
