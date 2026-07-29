import JobCard from "../JobCard/JobCard";

const JobList = ({ jobs, selectedJob, setSelectedJob }) => {
  return (
    <div
      className="
      h-[720px]
      overflow-y-auto
      space-y-5
      pl-1
      pr-2
      "
    >
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          active={selectedJob.id === job.id}
          onClick={() => setSelectedJob(job)}
        />
      ))}
    </div>
  );
};

export default JobList;