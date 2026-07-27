import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d16] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 items-center justify-center ">

        {/* Top Section */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Company */}
          <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
    MAHADAKSHA
  </h2>

  <div className="space-y-4">

    <div className="flex items-start gap-3">
      <FaEnvelope className="mt-1 shrink-0" />
      <p className="break-all">
        mahadakshaofficial@gmail.com
      </p>
    </div>

    <div className="flex items-start gap-3">
      <FaGlobe className="mt-1 shrink-0" />
      <p className="break-all">
        www.mahadaksha.in
      </p>
    </div>

    <div className="flex items-start gap-3">
      <FaMapMarkerAlt className="mt-1 shrink-0" />
      <p>Bengaluru, Karnataka 560100</p>
    </div>

    <p className="text-gray-500">
      CIN: XXXXXXXblackXXXXX
    </p>

              <div className="flex flex-wrap gap-3 pt-3">

                <div className="bg-[#191926] p-3 rounded-lg hover:bg-purple-700 transition">
                  <FaYoutube />
                </div>

                <div className="bg-[#191926] p-3 rounded-lg hover:bg-purple-700 transition">
                  <FaLinkedin />
                </div>

                <div className="bg-[#191926] p-3 rounded-lg hover:bg-purple-700 transition">
                  <FaInstagram />
                </div>

                <div className="bg-[#191926] p-3 rounded-lg hover:bg-purple-700 transition">
                  <FaTwitter />
                </div>

              </div>
            </div>
          </div>

          {/* Links */}
          <div>

            <h3 className="text-xl text-white font-semibold mb-6">
              Mahadaksha foundation
            </h3>

            <div className="flex flex-col gap-4">

              {/* -----home---- */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-gray-500"
                } >Home</NavLink>
              {/* ---About ------- */}

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-gray-500"
                } >About</NavLink>

              {/* blog */}

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-gray-500"
                } >Blog</NavLink>

              {/* contact */}

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-gray-500"
                } >Contact</NavLink>

              {/* event */}

              <NavLink
                to="/event"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-gray-500"
                } >Events</NavLink>

            </div>

            {/* <ul className="space-y-4">

              <li className="hover:text-purple-400 cursor-pointer">
                Products
              </li>

              <li className="hover:text-purple-400 cursor-pointer">
                Services
              </li>

              <li className="hover:text-purple-400 cursor-pointer">
                Events
              </li>

              <li className="hover:text-purple-400 cursor-pointer">
                Careers
              </li>

              <li className="hover:text-purple-400 cursor-pointer">
                Contact
              </li>

              <li className="hover:text-purple-400 cursor-pointer">
                Verify Certificate
              </li>

            </ul> */}



          </div>

          {/* Resources */}
          <div>

            <h3 className="text-xl text-white font-semibold mb-6">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Terms & Conditions</li>

              <li>Privacy Policy</li>

              <li>Cancellation & Refund Policy</li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl text-white font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4">

              <li>Digital Transformation</li>

              <li>Infrastructure & Cloud</li>

              <li>Data & AI</li>

              <li>Security & Compliance</li>

              <li>Business Consulting</li>

              <li>Corporate Training</li>

            </ul>

          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-12" />

        {/* Middle Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6">

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8">

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              ISO Certified
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              MSME Certified Organization
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              MCA Registered
            </span>

          </div>

          <p>
            Trusted by 50,000+ certified professionals
          </p>

        </div>

        <hr className="border-gray-800 my-10" />

        {/* Bottom */}
        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-8 pb-10 text-center xl:text-left">

          <div>

            <h3 className="text-white mb-3">
              Secured by
            </h3>

            <div className="flex flex-wrap justify-center xl:justify-start gap-3">

              <div className="bg-white text-black rounded-lg px-4 py-2 font-bold text-sm">
                Razorpay
              </div>

              <div className="bg-white text-black rounded-lg px-4 py-2 font-bold text-sm">
                Cashfree
              </div>
<div className="bg-white text-black rounded-lg px-4 py-2 font-bold text-sm">
                AIRTM
              </div>

            </div>

          </div>

          <p className="text-gray-500">
            © 2026 Mahadaksha foundation. All Rights Reserved.
          </p>

         <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">

            <a href="#">Privacy Policy</a>

            <a href="#">Terms & Conditions</a>

            <a href="#">Refund Policy</a>

          </div>

        </div>

      </div>
    </footer>
  );
}