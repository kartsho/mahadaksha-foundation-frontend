import axios from 'axios'
import { Building2, Mail, MapPin, Phone, Send, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!value.trim()) {
          error = "Full name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        } else if (!/^[a-zA-Z\s.'-]+$/.test(value.trim())) {
          error = "Name can only contain letters and spaces";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = "Please enter a valid email address";
        }
        break;

      case "phoneNumber":
        if (!value.trim()) {
          error = "Phone number is required";
        } else {
          const cleanedPhone = value.replace(/[\s\-\(\)\+]/g, "");
          if (!/^\d{10,15}$/.test(cleanedPhone)) {
            error = "Please enter a valid phone number (at least 10 digits)";
          }
        }
        break;

      case "service":
        if (!value) {
          error = "Please select a service";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const validateAll = (data) => {
    const newErrors = {};
    ["fullName", "email", "phoneNumber", "service", "message"].forEach((field) => {
      const error = validateField(field, data[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error
      }));
    }

    if (submitStatus.message) {
      setSubmitStatus({ type: "", message: "" });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      fullName: true,
      email: true,
      companyName: true,
      phoneNumber: true,
      service: true,
      message: true
    });

    const formErrors = validateAll(details);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setLoading(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await axios.post(
        "http://localhost:4000/contact",
        details
      );

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been submitted successfully."
      });

      setDetails({
        fullName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        service: "",
        message: ""
      });

      setTouched({});
      setErrors({});

    } catch (error) {
      console.log("Backend error:", error.response?.data || error.message);
      setSubmitStatus({
        type: "error",
        message: error.response?.data?.message || "Failed to submit. Please check your connection and try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full bg-black'>
      <section>
        {/* <Hero/> */}
        <div>
          <div className='relative ml-30 mr-30'>
            <div className='flex flex-col items-center justify-center  m-auto pt-15'>
              <h3 className='text-[#564586] font-semibold px-1 hover:hover-3d hover:bg-[#1D1B29] rounded-2xl'>Get in touch</h3>
              <h1 className='mt-5 text-4xl text-white  font-extrabold'>Let's work together</h1>
              <p className='mt-2 mb-30 text-white/60'>Have a project in mind or want to explore how we can help? We'd love to hear from you.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden mx-4 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-24 2xl:mx-40 rounded-2xl">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-10 lg:gap-16 mb-16 lg:mb-30">

          {/* ================= Left Side ================= */}

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Status Alert Banner */}
              {submitStatus.message && (
                <div
                  className={`md:col-span-2 p-3.5 rounded-xl text-sm flex items-center gap-3 transition-all ${
                    submitStatus.type === "success"
                      ? "bg-emerald-500/10 border border-emerald-500/40 text-emerald-300"
                      : "bg-red-500/10 border border-red-500/40 text-red-300"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle size={18} className="shrink-0 text-red-400" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              {/* Full Name */}
              <div className="md:col-span-2">
                <label className="text-white text-xs font-thin mb-2 block">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={details.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  className={`w-full h-10 rounded-xl bg-[#130d24] border px-3 text-white placeholder-gray-500 outline-none transition-colors ${
                    touched.fullName && errors.fullName
                      ? "border-red-500/80 focus:border-red-500 ring-1 ring-red-500/30"
                      : "border-[#2b2143] focus:border-violet-500"
                  }`}
                />
                {touched.fullName && errors.fullName && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="text-gray-300 text-xs mb-2 block">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  value={details.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="john@email.com"
                  className={`w-full h-10 rounded-xl bg-[#130d24] border px-3 text-white placeholder-gray-500 outline-none transition-colors ${
                    touched.email && errors.email
                      ? "border-red-500/80 focus:border-red-500 ring-1 ring-red-500/30"
                      : "border-[#2b2143] focus:border-violet-500"
                  }`}
                />
                {touched.email && errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="text-gray-300 text-xs mb-2 block">
                  Company Name
                </label>

                <input
                  type="text"
                  name="companyName"
                  value={details.companyName}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full h-10 rounded-xl bg-[#130d24] border border-[#2b2143] px-3 text-white placeholder-gray-500 outline-none focus:border-violet-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-gray-300 text-xs mb-2 block">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phoneNumber"
                  value={details.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+91 9876543210"
                  className={`w-full h-10 rounded-xl bg-[#130d24] border px-3 text-white placeholder-gray-500 outline-none transition-colors ${
                    touched.phoneNumber && errors.phoneNumber
                      ? "border-red-500/80 focus:border-red-500 ring-1 ring-red-500/30"
                      : "border-[#2b2143] focus:border-violet-500"
                  }`}
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>

              {/* Service Interest */}
              <div className="md:col-span-2">
                <label className="text-gray-300 text-xs mb-2 block">
                  Service Interest *
                </label>

                <select
                  name="service"
                  value={details.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full h-10 rounded-xl bg-[#130d24] border px-3 text-gray-300 outline-none transition-colors ${
                    touched.service && errors.service
                      ? "border-red-500/80 focus:border-red-500 ring-1 ring-red-500/30"
                      : "border-[#2b2143] focus:border-violet-500"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
                {touched.service && errors.service && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{errors.service}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="text-gray-300 text-xs mb-2 block">
                  Message *
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={details.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your project..."
                  className={`w-full rounded-xl bg-[#130d24] border p-4 sm:p-5 text-white placeholder-gray-500 outline-none resize-none transition-colors ${
                    touched.message && errors.message
                      ? "border-red-500/80 focus:border-red-500 ring-1 ring-red-500/30"
                      : "border-[#2b2143] focus:border-violet-500"
                  }`}
                />
                {touched.message && errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 rounded-xl bg-gradient-to-r from-violet-700 via-fuchsia-600 to-violet-700 text-white font-semibold flex justify-center items-center gap-3 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 duration-300 cursor-pointer shadow-lg shadow-violet-900/30"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500 mt-4 text-xs sm:text-sm">
                  * Required fields. Your information is secure.
                </p>
              </div>
            </div>
          </form>

          {/* ================= Right Side ================= */}

          <div className="space-y-6 lg:mt-6">

            {/* Email */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-9 h-9 rounded-xl border border-[#32204f] bg-[#170f2d] flex items-center justify-center text-violet-500">
                <Mail size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  Email
                </p>

                <p className="text-gray-300 text-sm mt-1 break-all">
                  mahadakshaofficial@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-9 h-9 rounded-xl border border-[#32204f] bg-[#170f2d] flex items-center justify-center text-violet-500">
                <Phone size={15} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  Phone
                </p>

                <p className="text-gray-300 text-sm mt-1">
                  +91 XXXXX35909
                </p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-9 h-9 rounded-xl border border-[#32204f] bg-[#170f2d] flex items-center justify-center text-violet-500">
                <MapPin size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  Office
                </p>

                <p className="text-gray-300 text-sm mt-1">
                  Selaqui, Dehradun, 208011
                </p>
              </div>
            </div>

            {/* Map */}
            <iframe
              title="map"
              className="rounded-xl w-full h-48 sm:h-56 lg:h-44 border border-[#2b2143]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221.6429553075027!2d77.88561091385688!3d30.346076294516976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1783670185989!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Registered Office */}
            <div className="flex items-start gap-3 p-2 rounded-xl">
              <div className="shrink-0 text-violet-500">
                <Building2 size={15} />
              </div>

              <div className="min-w-0">
                <h6 className="text-gray-400 text-xs sm:text-sm uppercase">
                  Registered
                </h6>

                <p className="text-white text-sm mt-1 leading-6">
                  C/o-Padmalabha Gouda, Odisha - 761118
                </p>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h6 className="text-gray-400 uppercase text-xs sm:text-sm mb-3">
                Follow Us
              </h6>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl border border-[#32204f] bg-[#170f2d] flex justify-center items-center text-gray-300 hover:bg-violet-600 hover:text-white duration-300 cursor-pointer">
                  <a href="/contact">
                    <FaLinkedinIn />
                  </a>
                </div>

                <div className="w-10 h-10 rounded-xl border border-[#32204f] bg-[#170f2d] flex justify-center items-center text-gray-300 hover:bg-violet-600 hover:text-white duration-300 cursor-pointer">
                  <a href="/contact">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact
