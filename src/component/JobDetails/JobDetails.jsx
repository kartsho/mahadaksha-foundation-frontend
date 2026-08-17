// import { FaCheckCircle } from "react-icons/fa";

// const JobDetails = ({ job }) => {
//   return (
//     <div
//       className="
//       lg:sticky
//       lg:top-24
//       rounded-2xl lg:rounded-3xl
//       border
//       border-gray-800
//       bg-[#101018]
//       backdrop-blur-xl
//       p-5 sm:p-6 md:p-8 lg:p-10
//       shadow-2xl
//       "
//     >
//       {/* Title */}

//       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
//         {job.jobName}
//       </h1>

//       {/* Tags */}

//       <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
//         <span className="bg-violet-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
//           {job.type}
//         </span>

//         <span className="bg-green-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
//           {job.mode}
//         </span>

//         <span className="bg-gray-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
//           {job.level}
//         </span>
//       </div>

//       {/* About */}

//       <section className="mt-8 lg:mt-10">
//         <h2 className="text-xl sm:text-2xl font-bold mb-4">
//           About This Role
//         </h2>

//         <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8">
//           {job.about}
//         </p>
//       </section>

//       {/* Responsibilities */}

//       <section className="mt-8 lg:mt-10">
//         <h2 className="text-xl sm:text-2xl font-bold mb-4">
//           Key Responsibilities
//         </h2>

//         <ul className="space-y-3 sm:space-y-4">
//           {job.responsibilities.map((item, index) => (
//             <li
//               key={index}
//               className="flex gap-3 text-sm sm:text-base text-gray-300"
//             >
//               <FaCheckCircle className="text-violet-500 mt-1 shrink-0" />
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Qualifications */}

//       <section className="mt-8 lg:mt-10">
//         <h2 className="text-xl sm:text-2xl font-bold mb-4">
//           Basic Qualifications
//         </h2>

//         <ul className="space-y-3 sm:space-y-4">
//           {job.qualifications.map((item, index) => (
//             <li
//               key={index}
//               className="flex gap-3 text-sm sm:text-base text-gray-300"
//             >
//               <FaCheckCircle className="text-violet-500 mt-1 shrink-0" />
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Preferred */}

//       <section className="mt-8 lg:mt-10">
//         <h2 className="text-xl sm:text-2xl font-bold mb-4">
//           Preferred Skills
//         </h2>

//         <ul className="space-y-3 sm:space-y-4">
//           {job.preferred.map((item, index) => (
//             <li
//               key={index}
//               className="flex gap-3 text-sm sm:text-base text-gray-300"
//             >
//               <FaCheckCircle className="text-violet-500 mt-1 shrink-0" />
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Button */}

//       <button
//         className="
//         mt-10 lg:mt-12
//         w-full
//         rounded-xl
//         bg-gradient-to-r
//         from-violet-600
//         to-purple-700
//         py-3 sm:py-4
//         text-base sm:text-lg
//         font-semibold
//         hover:scale-105
//         duration-300
//         shadow-lg
//         shadow-violet-700/40
//         cursor-pointer
//         "
//       >
//         Apply Now →
//       </button>
//     </div>
//   );
// };

// export default JobDetails;




import { FaCheckCircle } from "react-icons/fa";

const JobDetails = ({ job }) => {
  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="
        lg:sticky
        lg:top-24
        rounded-2xl lg:rounded-3xl
        border
        border-gray-800
        bg-[#101018]
        backdrop-blur-xl
        p-5 sm:p-6 md:p-8 lg:p-10
        shadow-2xl
      "
    >

      {/* Title */}

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
        {job.jobName}
      </h1>


      {/* Job Information */}

      <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">

        <span className="bg-violet-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
          {job.type}
        </span>

        <span className="bg-green-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
          {job.level}
        </span>

        <span className="bg-gray-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
          {job.team}
        </span>

      </div>


      {/* Location */}

      <div className="mt-5 text-gray-400 text-sm">
        📍 {job.location}
      </div>


      {/* Posted Date */}

      <div className="mt-2 text-gray-500 text-sm">
        Posted:{" "}
        {job.posted
          ? new Date(job.posted).toLocaleDateString()
          : "N/A"}
      </div>


      {/* Job ID */}

      <div className="mt-2 text-gray-500 text-sm">
        Job ID: {job.jobId}
      </div>


      {/* About */}

      <section className="mt-8 lg:mt-10">

        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          About This Role
        </h2>

        <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8">
          {job.about}
        </p>

      </section>


      {/* Responsibilities */}

      <section className="mt-8 lg:mt-10">

        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Key Responsibilities
        </h2>

        <ul className="space-y-3 sm:space-y-4">

          {job.responsibilities?.map((item, index) => (

            <li
              key={index}
              className="flex gap-3 text-sm sm:text-base text-gray-300"
            >

              <FaCheckCircle className="text-violet-500 mt-1 shrink-0" />

              <span>{item}</span>

            </li>

          ))}

        </ul>

      </section>


      {/* Basic Qualifications */}

      <section className="mt-8 lg:mt-10">

        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Basic Qualifications
        </h2>

        <ul className="space-y-3 sm:space-y-4">

          {job.basicQualification?.map((item, index) => (

            <li
              key={index}
              className="flex gap-3 text-sm sm:text-base text-gray-300"
            >

              <FaCheckCircle className="text-violet-500 mt-1 shrink-0" />

              <span>{item}</span>

            </li>

          ))}

        </ul>

      </section>


      {/* Preferred Qualifications */}

      <section className="mt-8 lg:mt-10">

        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Preferred Qualifications
        </h2>

        <ul className="space-y-3 sm:space-y-4">

          {job.preferredQualifications?.map((item, index) => (

            <li
              key={index}
              className="flex gap-3 text-sm sm:text-base text-gray-300"
            >

              <FaCheckCircle className="text-violet-500 mt-1 shrink-0" />

              <span>{item}</span>

            </li>

          ))}

        </ul>

      </section>


      {/* Apply Button */}

      <button
        className="
          mt-10 lg:mt-12
          w-full
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          to-purple-700
          py-3 sm:py-4
          text-base sm:text-lg
          font-semibold
          hover:scale-105
          duration-300
          shadow-lg
          shadow-violet-700/40
          cursor-pointer
        "
      >
        Apply Now →
      </button>

    </div>
  );
};

export default JobDetails;