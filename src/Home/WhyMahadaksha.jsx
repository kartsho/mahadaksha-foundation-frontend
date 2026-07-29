import React from "react";
import { BsStars } from "react-icons/bs";
import mahadaksha from "../assets/WhyMahaDaksha.jpg";
import HowWeWork from "../HomeComponent/HowWeWork";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";

function WhyMahadaksha() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#FFFFFF] relative mx-4 sm:mx-8 lg:mx-20">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 2 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <div className="flex text-blue-800 justify-center mt-10 font-bold items-center gap-2">
          <h3 className="text-base">
            <BsStars />
          </h3>
          <h3 className="text-base">Why Mahadaksha</h3>
        </div>

        {/* Content */}
        <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center justify-center pt-6 text-black font-bold text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-2 lg:p-3">
            Your growth partner across every
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-3">
            IT need
          </h1>

          <p className="text-black/59 font-bold text-sm sm:text-base px-2">
            MAHADAKSHA delivers end-to-end IT services — from custom software
            development
          </p>

          <p className="text-black/59 font-bold text-sm sm:text-base px-2">
            and cloud solutions to professional training and career support —
            all under one
          </p>

          <p className="text-black/59 font-bold text-sm sm:text-base px-2">
            roof.
          </p>

          {/* Stats */}
          <div className="text-black/59 font-medium flex flex-wrap justify-center gap-4 lg:gap-6 mt-5 p-5">
            <span className="bg-[#F8F9FB] rounded-4xl py-2 px-6 sm:px-8 lg:px-10">
              500+ projects delivered
            </span>

            <span className="bg-[#F8F9FB] rounded-4xl py-2 px-6">
              99.9% uptime
            </span>

            <span className="bg-[#F8F9FB] rounded-4xl py-2 px-6 sm:px-8">
              50+ global markets
            </span>

            <span className="bg-[#F8F9FB] rounded-4xl py-2 px-6">
              24/7 support
            </span>
          </div>

          <button className="btn bg-[#3480e5] text-white border-[#006eff] rounded-2xl mt-8 lg:mt-10 hover:bg-[#157aff]" 
              onClick={() => {
              navigate("/products");}}
          >
            Explore Our Products
          </button>
        </div>

        {/* Image */}
        <div className="flex mt-10 py-10 lg:py-20 w-full justify-center">
          <img
            className="w-full max-w-[1100px] h-auto rounded-2xl"
            src={mahadaksha}
            alt=""
          />
        </div>

        <HowWeWork />
      </motion.div>
    </div>
  );
}

export default WhyMahadaksha;