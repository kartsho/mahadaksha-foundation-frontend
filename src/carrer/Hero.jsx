import React from "react";
import { ArrowRight, Send } from "lucide-react";
import backgroundImage from '../assets/productTeam.avif'
export default function Hero({
 
  title = "Build Your Career at MAHADAKSHA",
  subtitle = "Join our team of innovators and shape the future of technology. 9 open positions across 9 teams.",
}) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Career"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="mx-auto max-w-5xl text-center">

          {/* Heading */}
          <h1
            className="
              font-bold
              text-white
              leading-tight
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-6
              mx-auto
              max-w-3xl
              text-gray-300
              text-base
              sm:text-lg
              md:text-xl
              leading-8
            "
          >
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

            {/* Primary Button */}
            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-violet-600
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-violet-700
                hover:scale-105
                shadow-xl
              "
            >
              View Open Positions
              <ArrowRight size={20} />
            </button>

            {/* Secondary Button */}
            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/20
                bg-white/5
                backdrop-blur-sm
                px-8
                py-4
                font-semibold
                text-gray-300
                transition-all
                duration-300
                hover:bg-white/10
                hover:text-white
              "
            >
              <Send size={18} />
              Quick Apply
            </button>

          </div>

          {/* Bottom Text */}
          <p className="mt-6 text-sm text-gray-400">
            Quick Apply link is not available right now. Please check back soon.
          </p>

        </div>
      </div>
    </section>
  );
}