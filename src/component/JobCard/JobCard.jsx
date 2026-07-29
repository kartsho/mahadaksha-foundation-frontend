import { MdWork } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";

const JobCard = ({ job, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer
        rounded-xl md:rounded-2xl
        p-4 sm:p-5 lg:p-6
        transition-all
        duration-300
        backdrop-blur-xl
        hover:-translate-y-1
        ${
          active
            ? "bg-gradient-to-br from-violet-700/30 to-violet-900/20 border border-violet-500 shadow-lg shadow-violet-700/30"
            : "bg-[#111] border border-gray-800 hover:border-violet-500 hover:scale-[1.02]"
        }
      `}
    >
      {/* Job Title */}
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
        {job.title}
      </h2>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="bg-violet-600 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs">
          {job.type}
        </span>

        <span className="bg-green-700 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs">
          {job.mode}
        </span>

        <span className="bg-gray-700 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs">
          {job.level}
        </span>
      </div>

      {/* Details */}
      <div className="space-y-3 text-xs sm:text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <MdWork className="text-base sm:text-lg shrink-0" />
          <span>{job.department}</span>
        </div>

        <div className="flex items-center gap-2">
          <IoLocationOutline className="text-base sm:text-lg shrink-0" />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <LuClock3 className="text-base sm:text-lg shrink-0" />
          <span>{job.level}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;