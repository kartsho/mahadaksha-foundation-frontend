import React from 'react'
import Flipkart from '../assets/Flipkart.png'
import google from "../assets/google.png";
import ibm from "../assets/ibm.png";
import indeed from "../assets/Indeed.png";
import infosys from "../assets/infosys.png";
import microsoft from "../assets/Microsoft.webp";
import wipro from "../assets/Wipro.png";
import Marquee from "react-fast-marquee";

import "./Slider.css";

const logos = [
  google,
  ibm,
  indeed,
  infosys,
  microsoft,
  wipro,
  Flipkart,
  indeed,
  infosys,
  microsoft,
  wipro,
   google,
  ibm,
  indeed,
  infosys,
  microsoft,
  wipro,
  Flipkart,
  indeed,
  infosys,
  microsoft,
  wipro,
];

export default function Slider() {
  return (
    <section className="w-full bg-[#130c22] py-4 overflow-hidden">
      <h2 className="text-center text-gray-400 tracking-[5px] text-sm font-semibold mb-2">
        TRUSTED BY FAST-GROWING TEAMS
      </h2>

      <div className="overflow-hidden relative">
        <div className="marquee Slider">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="logo-card "
            >
              <img
                src={logo}
                alt="logo"
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

