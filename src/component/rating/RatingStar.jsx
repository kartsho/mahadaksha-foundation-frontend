import React, { useEffect, useState } from "react";
import axios from "axios";
import { Star } from "lucide-react";

export default function Rating() {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6a4e15d1e785c9ef536c4116.mockapi.io/mahadakshaFoundation/About"
      );

      const updatedData = response.data.map((item) => ({
        ...item,
        rating: Math.floor(Math.random() * 3) + 3, // 3,4,5
      }));

      setData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="py-20 lg:py-28">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center px-6">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold">
         <span className="text-6xl text-[lightseagreen]"> W</span>hat  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[lightseagreen]"> C</span>lients  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[lightseagreen]"> A</span>nd  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[lightseagreen]"> L</span>earners  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[lightseagreen]"> say</span>
        </h1>

        <p className="text-gray-400 mt-4 text-sm sm:text-base lg:text-lg">
          Real feedback from projects, events, and learning programs.
        </p>
      </div>

      {/* Slider */}
      <div className="slider-container mt-14 overflow-hidden">
        <div className="marquee flex gap-6 px-4">
          {[...Data, ...Data].map((item, index) => (
            <Card key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Card = ({ item }) => {
  return (
    <div className="bg-[#100F1A] rounded-2xl border border-[#232034] hover:border-[#6B33F6] transition-all duration-300 w-[280px] sm:w-[300px] md:w-[320px] flex-shrink-0">
      <div className="p-6">
        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              fill={star <= item.rating ? "#8B5CF6" : "#4B5563"}
              color={star <= item.rating ? "#8B5CF6" : "#4B5563"}
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-[#C7C3D5] text-sm sm:text-base leading-7 min-h-[130px]">
          "{item.description}"
        </p>

        {/* User */}
        <div className="mt-6 border-t border-[#232034] pt-4">
          <h3 className="text-white text-lg sm:text-xl font-semibold">
            {item.name}
          </h3>
        </div>
      </div>
    </div>
  );
};