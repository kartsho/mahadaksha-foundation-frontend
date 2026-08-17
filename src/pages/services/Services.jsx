import React, { useState, useRef, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const CARD_WIDTH = 340;

function CategoryPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${active
        ? "bg-cyan-500 text-white"
        : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08] hover:text-white"
        }`}
    >
      {label}
    </button>
  );
}

function ServiceCard({ service }) {
  return (
    <div
      className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
      style={{ width: CARD_WIDTH }}
    >
      <h4 className="mb-3 text-lg font-bold text-white">
        {service.name}
      </h4>

      <p className="text-sm leading-relaxed text-gray-400">
        {service.description}
      </p>
    </div>
  );
}

function ServiceSection({ service, index }) {
  const scrollRef = useRef(null);

  const scrollByCard = (dir) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir * (CARD_WIDTH + 24),
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-16">

      <div className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-gray-300">
            {String(index + 1).padStart(2, "0")}
          </span>


          {/* Number of sub-services */}
          <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-gray-300">
            {service.services.length} service
            {service.services.length === 1 ? "" : "s"}
          </span>
        </div>

        <h2 className="mb-2 text-3xl font-extrabold text-cyan-400">
          {service.title}
        </h2>
        <p className="max-w-2xl text-gray-400">{service.description}</p>

      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >

          {service.services.map((subService) => (
            <ServiceCard
              key={subService._id}
              service={subService}
            />
          ))}
        </div>

        {service.services.length > 1 && (
          <>

            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll left"
              className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B1220] p-2 text-white shadow-lg ring-1 ring-white/10 hover:bg-white/10 md:flex"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B1220] p-2 text-white shadow-lg ring-1 ring-white/10 hover:bg-white/10 md:flex"
            >
              <FaChevronRight size={14} />
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default function Services() {

  const [searchParams] = useSearchParams();

  const pillsRef = useRef(null);

  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSlug, setActiveSlug] = useState("");

  const requestedCategory =
    searchParams.get("category");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/services"
        );
        console.log("Services API:", res.data);
        setServicesData(res.data);
      } catch (error) {
        console.log("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    if (servicesData.length === 0) {
      return;
    }
    if (requestedCategory) {
      const foundService =
        servicesData.find(
          (service) =>
            service.slug === requestedCategory ||
            service.title.toLowerCase() ===
            requestedCategory.toLowerCase()
        );

      if (foundService) {
        setActiveSlug(foundService.slug);
        return;
      }
    }
    setActiveSlug(
      servicesData[0].slug
    );
  }, [
    servicesData,
    requestedCategory,
  ]);

  const totalServicesOffered = useMemo(() => {

    return servicesData.reduce(
      (total, service) => {

        return (
          total +
          service.services.length
        );
      },
      0
    );
  }, [servicesData]);
  const activeService =
    servicesData.find(
      (service) =>
        service.slug === activeSlug
    );

  const scrollPills = (dir) => {
    if (!pillsRef.current) return;
    pillsRef.current.scrollBy({
      left: dir * 200,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div
        className="
          min-h-screen
          bg-[#0B1220]
          flex
          items-center
          justify-center
          text-white
        "
      >
        Loading services...
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#0B1220] px-6 pb-24 pt-32 text-white md:pt-40">
      <div
        className="mx-auto max-w-4xl text-center ">
        <h1
          className=" text-4xl font-extrabold leading-tight sm:text-5xl">
          Premium Services By Category
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-gray-400 ">
          From digital transformation to AI integration,
          we deliver enterprise-grade solutions across
          infrastructure, security, data analytics, and
          strategic consulting.
        </p>
        <div
          className=" mt-8 flex flex-wrap items-center justify-center gap-3">
          <span
            className=" rounded-full border border-white/15 px-5 py-2 text-sm text-gray-300">
            {servicesData.length} categories
          </span>
          <span
            className=" rounded-full border border-white/15 px-5 py-2 text-sm text-gray-300" >
            {totalServicesOffered} services offered
          </span>
        </div>
      </div>

      <div className=" relative mx-auto mt-12 max-w-6xl">

        <button
          onClick={() => scrollPills(-1)}
          aria-label="Scroll categories left"
          className=" absolute left-0 top-1/2 z-10 hidden-translate-x-4
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#0B1220]
            p-1.5
            text-gray-400
            ring-1
            ring-white/10
            hover:text-white
            md:flex
          "
        >
          <FaChevronLeft size={12} />
        </button>

        <div
          ref={pillsRef}
          className="
            flex
            gap-3
            overflow-x-auto
            px-1
            py-1
            scroll-smooth
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

          {servicesData.map((service) => (

            <CategoryPill
              key={service._id}
              label={service.title}
              active={
                service.slug === activeSlug
              }
              onClick={() =>
                setActiveSlug(service.slug)
              }
            />
          ))}
        </div>
        <button
          onClick={() => scrollPills(1)}
          aria-label="Scroll categories right"
          className="
            absolute
            right-0
            top-1/2
            z-10
            hidden
            translate-x-4
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#0B1220]
            p-1.5
            text-gray-400
            ring-1
            ring-white/10
            hover:text-white
            md:flex
          "
        >
          <FaChevronRight size={12} />
        </button>
      </div>

      <div
        className="
          mx-auto
          mt-12
          max-w-6xl
        "
      >
        {activeService && (
          <ServiceSection
            service={activeService}
            index={
              servicesData.findIndex(
                (item) =>
                  item.slug === activeSlug
              )
            }
          />
        )}
      </div>
    </div>
  );
}