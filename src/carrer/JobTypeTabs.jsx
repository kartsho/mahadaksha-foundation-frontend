import React, { useState } from "react";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function JobTypeTabs() {
  const [activeTab, setActiveTab] = useState("fulltime");

  const jobs = {
    fulltime: 9,
    internship: 0,
  };

  return (
    <section className="relative -mt-14 z-20 px-4 sm:px-6 lg:px-8 pt-10">
      <div className="mx-auto max-w-3xl">

        {/* Main Container */}
        <div className="rounded-2xl border border-white/10 bg-[#141126] p-3 backdrop-blur-lg shadow-2xl">

          <div className="grid grid-cols-2 gap-3">

            {/* Full Time */}
            <button
              onClick={() => setActiveTab("fulltime")}
              className={`flex items-center justify-center gap-3 rounded-xl py-4 font-semibold transition-all duration-300
              ${
                activeTab === "fulltime"
                  ? "bg-violet-600 text-white shadow-lg"
                  : "bg-transparent text-gray-400 hover:bg-white/5"
              }`}
            >
              <BriefcaseBusiness size={18} />

              <span>Full Time</span>

              <span
                className={`rounded-full px-2.5 py-0.5 text-xs
                ${
                  activeTab === "fulltime"
                    ? "bg-violet-400 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {jobs.fulltime}
              </span>
            </button>

            {/* Internship */}
            <button
              onClick={() => setActiveTab("internship")}
              className={`flex items-center justify-center gap-3 rounded-xl py-4 font-semibold transition-all duration-300
              ${
                activeTab === "internship"
                  ? "bg-violet-600 text-white shadow-lg"
                  : "bg-transparent text-gray-400 hover:bg-white/5"
              }`}
            >
              <GraduationCap size={18} />

              <span>Internship</span>

              <span
                className={`rounded-full px-2.5 py-0.5 text-xs
                ${
                  activeTab === "internship"
                    ? "bg-violet-400 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {jobs.internship}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}