import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { X, Upload, Send } from "lucide-react";

const CareerApplication = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    currentCompany: "",
    currentJobTitle: "",
    linkedin: "",
    experience: "",
    coverLetter: "",
    heardAboutUs: "",
    relocate: false,
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // ================= GET JOB =================

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/careers/${slug}`);
        setJob(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchJob();
    }
  }, [slug]);

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
            ? files[0]
            : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ================= VALIDATION =================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    }

    if (!formData.experience) {
      newErrors.experience = "Experience is required";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume / CV is required";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(formData.resume.type)) {
        newErrors.resume = "Only PDF, DOC or DOCX files are allowed";
      }

      if (formData.resume.size > 5 * 1024 * 1024) {
        newErrors.resume = "Resume must be less than 5MB";
      }
    }

    if (!formData.linkedin.trim()) {
      newErrors.linkedin = "LinkedIn profile is required";
    } else if (
      !/^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(formData.linkedin)
    ) {
      newErrors.linkedin = "Enter a valid LinkedIn URL";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ================= SUBMIT =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!job) {
      alert("Job information is not available.");
      return;
    }

    try {
      setSubmitting(true);

      console.log("JOB:", job);
      console.log("FORM:", formData);

      const data = new FormData();

      // Use the actual ID returned by your API
      data.append("jobId",  job._id);
      

      data.append("jobName", job.jobName);

      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("currentCompany", formData.currentCompany);
      data.append("currentJobTitle", formData.currentJobTitle);
      data.append("linkedin", formData.linkedin);
      data.append("experience", formData.experience);
      data.append("coverLetter", formData.coverLetter);

      // Backend expects heardAboutUs
      data.append("heardAboutUs", formData.heardAboutUs);

      data.append("relocate", formData.relocate);

      // File
      data.append("resume", formData.resume);

      await axios.post(
        "http://localhost:4000/career-application",
        data
      );

      alert("Application submitted successfully!");

      navigate(`/career/full-time/${job.slug}`);
    } catch (error) {
      console.log("SUBMIT ERROR:", error.response?.data || error);

      alert(
        error.response?.data?.message ||
        "Something went wrong while submitting your application."
      );
    } finally {
      setSubmitting(false);
    }
  };


  // ================= LOADING =================

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white">
        Loading...
      </div>
    );
  }

  // ================= JOB NOT FOUND =================

  if (!job) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Job not found</h2>
          <button onClick={() => navigate(-1)} className="mt-4 rounded-lg bg-violet-600 px-5 py-2">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-3 py-4 backdrop-blur-md sm:px-5">

      <div className="relative flex max-h-[96vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#08080d] shadow-2xl">

        {/* ================= HEADER ================= */}

        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#08080d] px-5 py-4 sm:px-6">

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-violet-400">
              Career Application
            </p>

            <h1 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Apply for {job.jobName}
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              Complete the form below to apply for this position.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-400 transition hover:bg-white/[0.08] hover:text-white"
          >
            <X size={18} />
          </button>

        </div>

        {/* ================= FORM BODY ================= */}

        <div className="overflow-y-auto px-5 py-6 sm:px-6 sm:py-7">

          <form onSubmit={handleSubmit}>

            {/* ================= PERSONAL INFORMATION ================= */}

            <div className="mb-7">

              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* Full Name */}

                <div className="md:col-span-2">

                  <label className="mb-2 block text-xs font-medium text-gray-300">
                    Full Name<span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`h-12 w-full rounded-xl border bg-[#111116] px-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-violet-500 ${errors.fullName ? "border-red-500" : "border-white/10"}`}
                  />

                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.fullName}
                    </p>
                  )}

                </div>

                {/* Email */}

                <div>

                  <label className="mb-2 block text-xs font-medium text-gray-300">
                    Email Address<span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    // value={formData?.email}
                    value={formData?.email || ""}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`h-12 w-full rounded-xl border bg-[#111116] px-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-violet-500 ${errors.email ? "border-red-500" : "border-white/10"}`}
                  />

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}

                </div>

                {/* Phone */}

                <div>

                  <label className="mb-2 block text-xs font-medium text-gray-300">
                    Phone Number<span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    maxLength="10"
                    placeholder="+91 98765 43210"
                    className={`h-12 w-full rounded-xl border bg-[#111116] px-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-violet-500 ${errors.phoneNumber ? "border-red-500" : "border-white/10"}`}
                  />

                  {errors.phoneNumber && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.phoneNumber}
                    </p>
                  )}

                </div>

              </div>

            </div>

            {/* ================= PROFESSIONAL INFORMATION ================= */}

            <div className="mb-7">

              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Professional Information
              </h2>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* Company */}

                <div>

                  <label className="mb-2 block text-xs font-medium text-gray-300">
                    Current Company
                  </label>

                  <input
                    type="text"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#111116] px-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
                  />

                </div>

                {/* Job Title */}

                <div>

                  <label className="mb-2 block text-xs font-medium text-gray-300">
                    Current Job Title
                  </label>

                  <input
                    type="text"
                    name="currentJobTitle"
                    value={formData.currentJobTitle}
                    onChange={handleChange}
                    placeholder="Software Engineer"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#111116] px-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
                  />

                </div>

                {/* LinkedIn */}

                <div>

                  <label className="mb-2 block text-xs font-medium text-gray-300">
                    LinkedIn Profile URL
                  </label>

                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/..."
                    className={`h-12 w-full rounded-xl border bg-[#111116] px-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-violet-500 ${errors.linkedin ? "border-red-500" : "border-white/10"}`}
                  />

                  {errors.linkedin && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.linkedin}
                    </p>
                  )}

                </div>

                {/* Experience */}

                <div>

                  <label className="mb-2 block text-xs font-medium text-gray-300">
                    Years of Experience<span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    min="0"
                    max="50"
                    placeholder="2"
                    className={`h-12 w-full rounded-xl border bg-[#111116] px-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-violet-500 ${errors.experience ? "border-red-500" : "border-white/10"}`}
                  />

                  {errors.experience && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.experience}
                    </p>
                  )}

                </div>

              </div>

            </div>

            {/* ================= RESUME ================= */}

            <div className="mb-7">

              <label className="mb-2 block text-xs font-medium text-gray-300">
                Resume / CV<span className="text-red-500">*</span>
              </label>

              <label className={`flex h-14 cursor-pointer items-center gap-3 rounded-xl border bg-[#111116] px-4 transition hover:border-violet-500 ${errors.resume ? "border-red-500" : "border-white/10"}`}>

                <div className="flex items-center gap-2 rounded-lg bg-violet-600/20 px-3 py-2 text-sm font-medium text-violet-400">
                  <Upload size={16} />
                  Choose File
                </div>

                <span className="truncate text-sm text-gray-400">
                  {formData.resume
                    ? formData.resume.name
                    : "No file chosen"}
                </span>

                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="hidden"
                />

              </label>

              <p className="mt-2 text-xs text-gray-600">
                PDF, DOC or DOCX · Maximum 5MB
              </p>

              {errors.resume && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.resume}
                </p>
              )}

            </div>

            {/* ================= COVER LETTER ================= */}

            <div className="mb-7">

              <label className="mb-2 block text-xs font-medium text-gray-300">
                Cover Letter
              </label>

              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us why you'd be a great fit for this role..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#111116] p-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
              />

            </div>

            {/* ================= heardAboutUs ================= */}

            <div className="mb-6">

              <label className="mb-2 block text-xs font-medium text-gray-300">
                How did you hear about us?
              </label>

              <select
                name="heardAboutUs"
                value={formData.heardAboutUs}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-white/10 bg-[#111116] px-4 text-sm text-gray-400 outline-none focus:border-violet-500"
              >

                <option value="">Select...</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Indeed">Indeed</option>
                <option value="Company Website">Company Website</option>
                <option value="Referral">Employee Referral</option>
                <option value="Job Portal">Job Portal</option>
                <option value="Other">Other</option>

              </select>

            </div>

            {/* ================= RELOCATE ================= */}

            <label className="mb-7 flex cursor-pointer items-center gap-3 text-sm text-gray-300">

              <input
                type="checkbox"
                name="relocate"
                checked={formData.relocate}
                onChange={handleChange}
                className="h-5 w-5 cursor-pointer accent-violet-600"
              />

              <span>I am willing to relocate if required</span>

            </label>

            {/* ================= SUBMIT ================= */}

            <button
              type="submit"
              disabled={submitting}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-700 text-sm font-semibold text-white shadow-lg shadow-violet-700/20 transition duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >

              {submitting ? (
                "Submitting Application..."
              ) : (
                <>
                  Submit Application
                  <Send size={17} />
                </>
              )}

            </button>

            <p className="mt-4 text-center text-xs text-gray-600">
              By submitting this application, you agree that your information
              may be used for recruitment purposes.
            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default CareerApplication;