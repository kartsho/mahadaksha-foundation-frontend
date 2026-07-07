import React from "react";
import HowWeWork2 from "./HowWeWork2";

const steps = [
  {
    id: 1,
    title: "Discover",
    description:
      "Tell us about your goals — whether it's building software, upskilling your team, or hosting an event.",
  },
  {
    id: 2,
    title: "Plan",
    description:
      "Our experts design a tailored roadmap with clear milestones, timelines, and deliverables.",
  },
  {
    id: 3,
    title: "Build",
    description:
      "We bring your vision to life with agile development, hands-on training, or seamless event execution.",
  },
  {
    id: 4,
    title: "Grow",
    description:
      "Launch with confidence and scale with ongoing support, optimization, and continuous improvement.",
  },
];

function HowWeWork() {
  return (
    <div>

    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto relative">
      
        <div className="absolute top-6 left-0 w-full border-t-2 border-dashed border-gray-300"></div>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center  "
            >
             
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-violet-500 text-white flex items-center justify-center  font-bold shadow-lg text-xl">
                {step.id}
              </div>

            
              <h3 className="mt-8 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

          
              <p className="mt-4 text-gray-500 textarea-sm leading-8 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
   
    </div> 
  );
}

export default HowWeWork;


