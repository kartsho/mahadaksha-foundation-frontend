import React from 'react'
import { Star } from "lucide-react";

export default function Rating() {
  return (
    <div className="flex items-center gap-10 text-white">
      {/* Left Side */}
      <div className="flex items-center">
        {/* Avatars */}
        <div className="flex -space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-sm font-semibold">
            JC
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-sm font-semibold">
            SA
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-sm font-semibold">
            MH
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-sm font-semibold">
            +9
          </div>
        </div>

        {/* Text */}
        <p className="ml-5 text-xl font-semibold">
          2.5k+
          <span className="text-gray-400 font-normal ml-2">
            businesses
          </span>
        </p>
      </div>

      {/* Divider */}
      <div className="h-10 w-px bg-gray-700"></div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex text-yellow-400">
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} />
        </div>

        <span className="text-xl font-semibold">
          4.5
          <span className="text-gray-400 font-normal"> rating</span>
        </span>
      </div>
    </div>
  );
}
    

