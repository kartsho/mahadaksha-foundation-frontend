import { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";

// import fullTimeJobs from "../../data/fullTimeJobs";
import JobList from "../../component/JobList/JobList";
import JobDetails from "../../component/JobDetails/JobDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FullTime = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/careers"
      );

      console.log(response.data);

      setJobs(response.data);

      // Select first job automatically
      if (response.data.length > 0) {
        setSelectedJob(response.data[0]);
      }

    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  fetchJobs();
}, []);

  // const filteredJobs = useMemo(() => {
  //   return fullTimeJobs.filter((job) =>
  //     job.title.toLowerCase().includes(search.toLowerCase())
  //   );
  // }, [search]);

  const filteredJobs = useMemo(() => {
  return jobs.filter((job) =>
    job.jobName.toLowerCase().includes(search.toLowerCase())
  );
}, [jobs, search]);

  const handleSelectJob = (job) => {
    setSelectedJob(job);

    if (window.innerWidth < 1024) {
      setShowModal(true);
    }
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Open Positions
      </h2>

      <div className="grid lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-10 ">

        {/* LEFT */}
        <div className="lg:col-span-4 pl-10">
          <div className="lg:sticky lg:top-24">

            <div className="relative mb-6">
              <FiSearch className="absolute left-4 top-4 text-gray-400 text-lg" />

              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#111] border border-gray-700 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-violet-500"
              />
            </div>

            <JobList
              jobs={filteredJobs}
              selectedJob={selectedJob}
              setSelectedJob={handleSelectJob}
            />

          </div>
        </div>

        {/* RIGHT (Desktop Only) */}
        <div className="hidden lg:block lg:col-span-8">
          <JobDetails job={selectedJob} />
        </div>
      </div>

      {/* Mobile / Tablet Popup */}

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4">

          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl">

            <button
              onClick={() => navigate("/career")}
              className="fixed right-6 top-6 z-50 h-11 w-11 rounded-full bg-white text-black text-xl font-bold hover:scale-110 duration-300"
            >
              ✕
            </button>

            <JobDetails job={selectedJob} />

          </div>

        </div>
      )}
    </div>
  );
};

export default FullTime;