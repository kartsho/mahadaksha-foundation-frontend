import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import business from '../assets/business.avif'
import early from '../assets/earlyAcess.avif'
import enterPrices from '../assets/enterPrices.avif'
import productTeam from '../assets/productTeam.avif'
import { useNavigate } from "react-router-dom";

    const cardData = {
    early: {
        heading: "Early platform access for fast-moving teams",
        description:
            "Launch your idea with the right technology foundation. MAHADAKSHA helps early teams validate MVPs, iterate faster, and build momentum from day one.",
        notices: [
            "Rapid MVP development and launch",
            "Expert technical guidance",
            "Scalable architecture from day one",
        ],
        image: <img className="w-full h-80 rounded-2xl border hover:border-[#3c1ad3] " src={early} alt="" />,
        btn1: 'Get Early Platform Access',
        btn2: 'Explore All Services',
    },

    business: {
        heading: "Growth-ready systems for modern businesses",
        description:
            "Streamline operations and accelerate growth with custom IT solutions. From ERP systems to customer portals, we build software that drives real business results.",
        notices: [
            "Custom software tailored to your workflow",
            "Process automation and optimization",
            "Ongoing maintenance and support",
        ],
        image: <img className="w-full h-80 rounded-2xl border hover:border-[#3c1ad3] " src={business} alt="" />,
        btn1: 'Talk to Solution Team',
        btn2: 'Explore All Services',
    },

    product: {
        heading: "Delivery acceleration for product teams",
        description:
            "Ship better products with aligned design, engineering, and delivery workflows. We help product teams execute faster with clarity and measurable outcomes.",
        notices: [
            "Cross-functional planning and execution support",
            "User-centric product development practices",
            "Reliable delivery with quality checkpoints",
        ],
        image: <img className="w-full h-80 rounded-2xl border hover:border-[#3c1ad3] " src={productTeam} alt="" />,
        btn1: 'Plan product Sprint',
        btn2: 'Explore All Services',
    },

    enterprise: {
        heading: "Enterprise modernization with predictable outcomes",
        description:
            "Transform legacy systems with modern architecture. Zaalima partners with enterprises for large-scale digital transformation, cloud migration, and IT modernization.",
        notices: [
            "Legacy system modernization",
            "Cloud migration and DevOps",
            "Dedicated teams and SLA-backed delivery",
        ],
        image: <img className="w-full h-80 rounded-2xl border hover:border-[#3c1ad3] " src={enterPrices} alt="" />,
        btn1: 'Request Enterprise Consultation',
        btn2: 'Explore All Services',
    },
};

function SolutionForEveryNeed() {
  const [activeTab, setActiveTab] = useState("early");

  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Solutions For Every Need
        </h1>

        <p className="text-gray-400 text-sm sm:text-base lg:text-lg mt-4">
          Whether you're a startup founder, a student, or an enterprise —
          MAHADAKSHA has you covered.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-10">
        <div className="bg-[#13111F] p-2 rounded-xl flex flex-wrap justify-center gap-2 max-w-full">
          <button
            onClick={() => setActiveTab("early")}
            className={`px-4 py-2 rounded-xl text-sm sm:text-base transition-all duration-300 ${
              activeTab === "early"
                ? "bg-[#1D1B29] border border-[#3C1AD3] text-white"
                : "text-gray-300 hover:bg-[#1D1B29]"
            }`}
          >
            Early Access
          </button>

          <button
            onClick={() => setActiveTab("business")}
            className={`px-4 py-2 rounded-xl text-sm sm:text-base transition-all duration-300 ${
              activeTab === "business"
                ? "bg-[#1D1B29] border border-[#3C1AD3] text-white"
                : "text-gray-300 hover:bg-[#1D1B29]"
            }`}
          >
            Business
          </button>

          <button
            onClick={() => setActiveTab("product")}
            className={`px-4 py-2 rounded-xl text-sm sm:text-base transition-all duration-300 ${
              activeTab === "product"
                ? "bg-[#1D1B29] border border-[#3C1AD3] text-white"
                : "text-gray-300 hover:bg-[#1D1B29]"
            }`}
          >
            Product Team
          </button>

          <button
            onClick={() => setActiveTab("enterprise")}
            className={`px-4 py-2 rounded-xl text-sm sm:text-base transition-all duration-300 ${
              activeTab === "enterprise"
                ? "bg-[#1D1B29] border border-[#3C1AD3] text-white"
                : "text-gray-300 hover:bg-[#1D1B29]"
            }`}
          >
            Enterprises
          </button>
        </div>
      </div>

      <Card {...cardData[activeTab]} />
    </section>
  );
}

export default SolutionForEveryNeed;

function Card({
  heading,
  description,
  notices,
  image,
  btn1,
  btn2,
}) {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto mt-14">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

        {/* Left Content */}
        <div className="flex-1 w-full max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            {heading}
          </h2>

          <p className="text-gray-400 mt-5 text-sm sm:text-base leading-7">
            {description}
          </p>

          <div className="mt-6 space-y-4">
            {notices.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
              >
                <span className="bg-[#201446] p-2 rounded-full text-[#7C4DF5] flex-shrink-0">
                  <BsCheckLg size={12} />
                </span>

                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="mt-6 btn btn-primary font-medium"
            >
              {btn1}
            </button>

            <button className="mt-6 btn btn-soft btn-primary font-medium">
              {btn2}
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-center">
          <div className="w-full max-w-[520px] h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl border-[#2A2738] overflow-hidden">
            {image}
          </div>
        </div>

      </div>
    </div>
  );
}