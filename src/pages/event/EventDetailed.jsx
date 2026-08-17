import { useNavigate, useLocation, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { IoIosTime } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { BiSolidGroup } from "react-icons/bi";
import Agenda from "./Agenda";
import RegistrationCard from "./RegistrationCard";
import MapCard from "./MapCard";
import EventInfo from "./EventInfo";
import EventPhotos from "./EventPhotos";
import { useEffect, useState } from "react";
import axios from "axios";

function EventDetailed() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {

    const fetchEvent = async () => {
      console.log("Event:", slug);

      const res = await axios.get(
        `http://localhost:4000/events/${slug}`
      );

      console.log(res);
      setEvent(res.data);
    };
    fetchEvent();
  }, [slug]);

  if (!event) {
    return (
      <div className="text-white bg-black min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0817]">


      <div className="relative h-[520px] sm:h-[560px] md:h-[620px] lg:h-[680px] overflow-hidden">

        {/* Background Image */}
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover opacity-25 "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0817]/30 to-[#0d0817]" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 sm:px-8 lg:px-12">
                    {/* Back Button + Category */}
          <div className="mb-8 flex flex-wrap items-center gap-3">

            <button
              onClick={() => navigate("/event")}
              className="flex items-center gap-2 rounded-full border border-gray-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:text-sm"
            >
              <FaArrowLeft />
              Back to Events
            </button>

            {/* <span className="rounded-full bg-[#281a44] px-4 py-2 text-xs font-semibold text-white sm:text-sm">
              {category}
            </span> */}

          </div>

          {/* Event Title */}
          <h1 className="max-w-5xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {event.title}
          </h1>

          {/* Event Description */}
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
            {event.description}
          </p>

        </div>
      </div>

      {/* =========================
            EVENT STATS
         ========================= */}
               {/* =========================
            EVENT STATS
         ========================= */}

      <div className="relative z-20 -mt-14 sm:-mt-16 lg:-mt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

            {/* Date */}
            <div className="rounded-2xl border border-white/5 bg-[#13111F] p-4 text-center shadow-lg">

              <p className="text-xs text-gray-400 sm:text-sm">
                Date
              </p>

              <div className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-white sm:text-base">
                <CiCalendar className="text-lg text-cyan-400" />
                <span>{event.eventDate}</span>
              </div>

            </div>

            {/* Time */}
            <div className="rounded-2xl border border-white/5 bg-[#13111F] p-4 text-center shadow-lg">

              <p className="text-xs text-gray-400 sm:text-sm">
                Time
              </p>

              <div className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-white sm:text-base">
                <IoIosTime className="text-lg text-cyan-400" />
                <span>{event.eventTime}</span>
              </div>

            </div>

            {/* Venue */}
            <div className="rounded-2xl border border-white/5 bg-[#13111F] p-4 text-center shadow-lg">

              <p className="text-xs text-gray-400 sm:text-sm">
                Venue
              </p>

              <div className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-white sm:text-base">
                <IoLocation className="text-lg text-cyan-400" />
                <span className="truncate">
                  {event.venue}
                </span>
              </div>

            </div>

            {/* Registration */}
            <div className="rounded-2xl border border-white/5 bg-[#13111F] p-4 text-center shadow-lg">

              <p className="text-xs text-gray-400 sm:text-sm">
                Total Registrations
              </p>

              <div className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-white sm:text-base">
                <BiSolidGroup className="text-lg text-cyan-400" />
                <span>{event.noOfRegistration}</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* =========================
            MAIN CONTENT
         ========================= */}
               {/* =========================
            MAIN CONTENT
         ========================= */}

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 sm:py-16">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* ================= Left Section ================= */}
          <div className="lg:col-span-2 space-y-8">

            <Agenda event={event} />

            <EventPhotos event={event} />

          </div>

          {/* ================= Right Sidebar ================= */}
          <div className="space-y-6">

            <RegistrationCard />

            <MapCard event={event} />

            <EventInfo />

          </div>

        </div>

      </div>

    </div>
  );
}
export default EventDetailed