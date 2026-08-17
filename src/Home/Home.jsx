import Slider from "../logoSlider/Slider";
import { FaArrowRight } from "react-icons/fa";
import RatingStar from "../component/rating/RatingStar";
import Rating from "./Rating";
import SellAndNumber from "./SellAndNumber";
import WhyMahadaksha from "./WhyMahadaksha";
import WhatWeDoBest from '../HomeComponent/WhatWeDoBest'
import HowWeWork2 from "../HomeComponent/HowWeWork2";
import SeeOurWork from "../HomeComponent/SeeOurWork";
import SolutionForEveryNeed from "./SolutionForEveryNeed";
import PartnerCompainies from "../HomeComponent/PartnerCompainies";
import SuccessStory from "./SuccessStory/SuccessStory";
import { Contact } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import SoftAurora from "../softAurora/SoftAurora";
function Home() {
   const navigate = useNavigate();
  return (
    <div className="relative w-full bg-black">
       <motion.div
                            initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
    
      {/* <div className="absolute inset-0 -z-10">
        <SoftAurora />
      </div> */}

     
      <section className="min-h-screen flex flex-col items-center text-center px-4 pt-24">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          From Knowledge Comes Skill, From Skill Comes Success
        </h3>

        <p className="mt-3 text-lg sm:text-xl md:text-2xl text-white">
          ज्ञानात् कौशलम्, कौशलात् सफलता
        </p>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          MAHADAKSHA{" "}
          <span className="text-cyan-400 text-xl sm:text-2xl md:text-3xl">
            Foundation
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
          Knowledge • Skills • Excellence
        </p>

        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-400">
          विद्या • कौशल • उत्कर्ष
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="btn btn-primary" onClick={() => navigate("/contact")} >
            Get Started <FaArrowRight />
          </button>

          <button className="btn btn-outline btn-info" onClick={() => {
              navigate("/career");}}>
            Learn More
          </button>
        </div>

        <div className="mt-8">
          <Rating />
        </div>

        <div className="mt-10 w-full">
          <Slider />
        </div>
      </section>
</motion.div>
     
      <section className="py-20">
        <SellAndNumber />

      </section>

      <section className=" py-3 bg-white">
        <WhyMahadaksha />
      </section>

       <section className=" ">
        <WhatWeDoBest />
      </section>
      <section className="bg-[#000000]">
         <HowWeWork2/>
      </section>

      <section className="bg-[#000000]">
         <SeeOurWork/>
      </section>
      <section className="bg-[#000000]">
         <SolutionForEveryNeed/>
      </section>

       <section className="bg-[#000000]">
         <PartnerCompainies/>
      </section>
      <section className="bg-[#000000]">
         <SuccessStory/>
      </section>

       <section className="bg-[#000000]">
         <RatingStar/>
      </section>
      
    </div>
  );
}

export default Home;  