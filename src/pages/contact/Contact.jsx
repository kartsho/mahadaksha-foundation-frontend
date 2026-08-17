import axios from 'axios'
import { Building2, Icon, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import { FaLinkedinIn, FaYoutube, } from 'react-icons/fa'

const Contact = () => {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log("Sending:", details);

      const response = await axios.post(
        "http://localhost:4000/contact",
        details
      );

      // console.log(response.data);

      alert("Contact submitted successfully!");

      setDetails({
        fullName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        service: "",
        message: ""
      });

    } catch (error) {
      console.log("Backend error:", error.response?.data);
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

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

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
                  placeholder="John Doe"
                  className="w-full h-10 rounded-xl bg-[#130d24] border border-[#2b2143] px-3 text-white placeholder-gray-500 outline-none focus:border-violet-500"
                />
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
                  placeholder="john@email.com"
                  className="w-full h-10 rounded-xl bg-[#130d24] border border-[#2b2143] px-3 text-white placeholder-gray-500 outline-none focus:border-violet-500"
                />
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
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phoneNumber"
                  value={details.phoneNumber}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="w-full h-10 rounded-xl bg-[#130d24] border border-[#2b2143] px-3 text-white placeholder-gray-500 outline-none focus:border-violet-500"
                />
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
                  className="w-full h-10 rounded-xl bg-[#130d24] border border-[#2b2143] px-3 text-gray-400 outline-none focus:border-violet-500"
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
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
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl bg-[#130d24] border border-[#2b2143] p-4 sm:p-5 text-white placeholder-gray-500 outline-none resize-none focus:border-violet-500"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full h-10 rounded-xl bg-gradient-to-r from-violet-700 via-fuchsia-600 to-violet-700 text-white font-semibold flex justify-center items-center gap-3 hover:scale-[1.02] active:scale-[0.98] duration-300"
                >
                  Send Message
                  <Send size={18} />
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
