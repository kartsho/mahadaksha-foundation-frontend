import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Rating() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-white">
      {/* Left Side */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Avatars */}
        <div className="flex -space-x-3 sm:-space-x-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs sm:text-sm font-semibold">
            JC
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs sm:text-sm font-semibold">
            SA
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs sm:text-sm font-semibold">
            MH
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs sm:text-sm font-semibold">
            +9
          </div>
        </div>

        {/* Text */}
        <p className="text-lg sm:text-xl font-semibold text-center sm:text-left">
          2.5k+
          <span className="text-gray-400 font-normal ml-2">
            businesses
          </span>
        </p>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-10 w-px bg-gray-700"></div>

      {/* Mobile Divider */}
      <div className="block sm:hidden w-20 h-px bg-gray-700"></div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex text-yellow-400">
          <Star size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
          <Star size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
          <Star size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
          <Star size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
          <Star size={16} className="sm:w-[18px] sm:h-[18px]" />
        </div>

        <span className="text-lg sm:text-xl font-semibold">
          4.5
          <span className="text-gray-400 font-normal">
            {" "}
            rating
          </span>
        </span>
      </div>
    </div>
  );
}