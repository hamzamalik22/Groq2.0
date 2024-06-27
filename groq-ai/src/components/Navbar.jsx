import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../firebase/AuthFirebaseContext";

const Navbar = () => {
  const { userLogout, currentUser } = useFirebase()

  const kickTheUserOut = () =>{
    userLogout()
  }

  return (
    <nav className="bg-zinc-900 text-white p-4">
      <div className="mx-auto flex justify-between items-center">
        <Link to="/" className="logo text-5xl md:pl-10  text-white">
          Groq
        </Link>
        <div className="flex items-center">
          {currentUser !== null ? (
            <>
              <Link
                to="/groq"
                className="hidden md:block font-['DM Sans'] border bg-transparent rounded-lg text-white py-2 px-4 mx-2 hover:bg-white hover:text-black"
              >
                Groq App
              </Link>
              <Link
                onClick={() => kickTheUserOut()}
                className="max-[400px]:hidden bg-red-600 font-['DM Sans'] hover:bg-red-400 text-white rounded-lg py-2 px-4  mx-2"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden md:block font-['DM Sans'] border bg-transparent border-white rounded-lg text-white py-2 px-4 mx-2 hover:bg-white hover:text-black"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="max-[400px]:hidden bg-indigo-600 font-['DM Sans'] hover:bg-indigo-700 text-white rounded-lg py-2 px-4  mx-2"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
