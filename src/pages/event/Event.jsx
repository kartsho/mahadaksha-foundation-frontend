

import React, { useEffect, useState } from 'react'
import { CiCalendar } from "react-icons/ci";
import EventDetailed from './EventDetailed';
import axios from 'axios';
function Event() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:4000/events");
        setEvents(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, [])

  return (
    <div className="relative bg-[#000000] px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28">

    {/* Heading */}

    <div className="pt-20 md:pt-28">

      <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center">
        Events
      </h1>

      <p
        className="
        mt-6
        max-w-5xl
        mx-auto
        text-center
        text-white/80
        text-sm
        md:text-base
        leading-7
      "
      >
        Explore upcoming workshops, hackathons, live recognitions,
        events, and corporate training sessions. From small meetups
        to large-scale summits, every experience is curated to inspire
        collaboration and product excellence.
      </p>

    </div>

      <div
      className="
      flex
      flex-wrap
      justify-center
      gap-3
      md:gap-5
      mt-14
      mb-16
    "
    >

      {[
        "Workshops",
        "Hackathons",
        "Live Recognitions",
        "Corporate Training",
        "Community Events",
      ].map((item) => (

        <section
          key={item}
          className="
          cursor-pointer
          px-4
          py-2
          text-xs
          md:text-sm
          rounded-full
          border
          border-white
          text-white
          hover:bg-[#292349]
          transition
        "
        >
          {item}
        </section>

      ))}

    </div>

      <h2 className="text-white text-2xl md:text-3xl font-bold mb-10">
      All Events
    </h2>

      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 cursor-pointer" >
        {events.map((event) => (
          <div
            key={event.slug} onClick={() => navigate(`/events/${event.slug}`)}
            className="bg-[#111111] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">
              <h2 className="text-white text-xl font-bold mb-2">
                {event.title}
              </h2>

              {/* <p className="text-gray-400 text-sm mb-4">
                {event.description}
              </p> */}

              <p className="text-white text-sm">
                📍 {event.venue}
              </p>

              <p className="text-white text-sm">
                📅 {event.eventDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Event
import { Link, useNavigate } from "react-router-dom";


export const Ecard = ({ item, category }) => {
  console.log(category)
  const navigate = useNavigate();

  return (
    <div className='p-2'>
      <div className='card '>
        <div>
          <img className='h-32 w-56 pt-0' src={item.titleImage} alt="" />
          <div className='flex text-xs pt-2 justify-between items-center '>
            <section className='hover:bg-[#292349] px-1 outline-white text-white text-xs  outline-1  rounded-2xl'>{category}</section>
            <section>UPCOMING</section>
          </div>
          <div className='flex flex-col text-xs pt-3 font-semibold text-red-600 hover:cursor-pointer ' onClick={() =>
            navigate("/event/event-in-detailed", {
              state: {
                item,
                category,
              },
            })
          } >
            <section>{item.title}</section>
            <section className='flex items-center text-white text-xs pt-2 gap-2'><CiCalendar />{item.Date}</section>
          </div>
        </div>
      </div>
    </div>
  )
}
