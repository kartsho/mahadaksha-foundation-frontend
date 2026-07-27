import React from "react";
import customSoftware from "../assets/customSoftware.jpeg";
import EventsThatInspireAndConnect from "../assets/EventsThatInspireAndConnect.jpeg";
import TrainingThatLaunchesCarrer from "../assets/TrainingThatLaunchesCareers.jpeg";

function HowWeWork2() {
  return (
  <div className="max-w-6xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">

      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 mb-12 lg:mb-16">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Custom software built for your business
          </h2>

          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-7">
            We design and develop tailored software solutions — from web apps
            and mobile apps to enterprise platforms — that fit your exact
            workflow and scale with your growth.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              ✓ Full-stack web and mobile development
            </p>

            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              ✓ Agile delivery with transparent milestones
            </p>

            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              ✓ Post-launch support and maintenance
            </p>
          </div>

          <button className="mt-6 btn btn-primary font-medium">
            View Courses →
          </button>
        </div>

        <div className="flex-1">
          <img
            src={customSoftware}
            className="w-full max-w-[500px] mx-auto rounded-xl object-cover"
            alt=""
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-20">

        <div className="flex-1 order-2 lg:order-1">
          <img
            src={TrainingThatLaunchesCarrer}
            className="w-full rounded-2xl object-cover hover:scale-[0.98] transition"
            alt=""
          />
        </div>

        <div className="flex-1 order-1 lg:order-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Training that launches careers
          </h2>

          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-7">
            Our industry-led training programs equip students and professionals
            with in-demand skills through hands-on projects, live mentoring, and
            real-world exposure.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              ✓ Instructor-led courses with live projects
            </p>

            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              ✓ Certifications in top technologies
            </p>

            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              ✓ Dedicated placement assistance
            </p>
          </div>

          <button className="mt-6 btn btn-primary font-medium">
            View Courses →
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Events that inspire and connect
          </h2>

          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-7">
            From tech summits and hackathons to corporate workshops — we plan
            and execute events that bring communities together and drive
            knowledge sharing.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              ✓ End-to-end event planning and execution
            </p>

            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              ✓ Virtual, hybrid, and in-person formats
            </p>

            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              ✓ Speaker management and branding support
            </p>
          </div>

          <button className="mt-6 btn btn-primary font-medium">
            View Courses →
          </button>
        </div>

        <div className="flex-1">
          <img
            src={EventsThatInspireAndConnect}
            className="w-full rounded-2xl object-cover hover:scale-[0.98] transition"
            alt=""
          />
        </div>
      </div>

    </div>
  );
}

export default HowWeWork2;