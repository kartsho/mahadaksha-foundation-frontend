import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo.png";

function NavBar() {
  const navLinkStyle = ({ isActive }) =>
    `px-5 py-2 rounded-xl font-medium transition-all duration-300 ${
      isActive
        ? "bg-cyan-500 text-white shadow-lg"
        : "text-white hover:bg-white/10 hover:text-cyan-300"
    }`;

  return (
    <header className="sticky  z-50 top-0 left-0 right-0">
      <div
        className="
          w-[100%]
          mx-auto
          h-18
          
          bg-[#0B1220]/60
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          px-8
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-15 w-[calc(100%+40px)] max-w-none object-cover scale-125"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold"}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold"}>
            About
          </NavLink>

          <NavLink to="/blog" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold"}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold"}>
            Contact
          </NavLink>

          <NavLink to="/event" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold"}>
            Events
          </NavLink>

          <NavLink to="/event/event-in-detailed" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold"}>
            
          </NavLink>
        </nav>

        {/* Button */}
        <div className="flex items-center">
         <button className="btn hover:btn-outline bg-[#13a6ea] hover:btn-primary text-white font-bold ">Carrer <FaArrowRight/></button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;