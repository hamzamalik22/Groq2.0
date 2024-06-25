import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import GroqAi from "../pages/GroqAi";
import About from "../pages/About";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/groq" element={<GroqAi />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Router;
