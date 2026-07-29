import { NavLink } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

const CareerTabs = () => {
  return (
    <div className="flex justify-center mt-[-20px] md:mt-[-30px] relative z-20 px-4">
      <div
        className="
          w-full max-w-md md:max-w-fit
          bg-[#111]
          border border-gray-700
          rounded-2xl md:rounded-full
          p-2
          flex flex-col sm:flex-row
          gap-2
        "
      >
        <NavLink
          to="/career/full-time"
          className={({ isActive }) =>
            `flex items-center justify-center gap-2
            w-full
            px-5 sm:px-6 lg:px-8
            py-3
            rounded-xl md:rounded-full
            text-sm sm:text-base
            transition-all duration-300
            ${
              isActive
                ? "bg-violet-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`
          }
        >
          <MdWork className="text-lg" />
          Full Time
        </NavLink>

        <NavLink
          to="/career/internship"
          className={({ isActive }) =>
            `flex items-center justify-center gap-2
            w-full
            px-5 sm:px-6 lg:px-8
            py-3
            rounded-xl md:rounded-full
            text-sm sm:text-base
            transition-all duration-300
            ${
              isActive
                ? "bg-violet-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`
          }
        >
          <FaUserGraduate className="text-lg" />
          Internship
        </NavLink>
      </div>
    </div>
  );
};

export default CareerTabs;