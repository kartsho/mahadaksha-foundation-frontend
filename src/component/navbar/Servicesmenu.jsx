import React from "react";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";

const SERVICE_CATEGORIES = [
  { name: "Digital Transformation", count: 5 },
  { name: "Infrastructure & Cloud", count: 5 },
  { name: "Data & AI", count: 5 },
  { name: "Security & Compliance", count: 5 },
  { name: "Business Consulting", count: 5 },
  { name: "Corporate Training", count: 5 },
];

function Servicesmenu({ onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="
        absolute left-1/2 top-full -translate-x-1/2 mt-3
        w-[95vw] max-w-[900px]
        bg-[#0B1220]/95 backdrop-blur-2xl
        border border-white/10
        rounded-2xl
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        p-8
        z-50
      "
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-6 mb-6">
        <div>
          <p className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2">
            Service Categories
          </p>
          <h3 className="text-white text-2xl font-bold mb-2">
            Discover our comprehensive service offerings
          </h3>
          <p className="text-gray-400 text-sm max-w-xl">
            From digital transformation to AI integration, we deliver
            enterprise-grade solutions across infrastructure, security, data
            analytics, and strategic consulting.
          </p>
        </div>

        <a
          href="/services"
          className="shrink-0 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm whitespace-nowrap transition-colors"
        >
          View All <FaArrowRight size={12} />
        </a>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {SERVICE_CATEGORIES.map((cat) => (
          <a
            key={cat.name}
            href={`/services?category=${encodeURIComponent(cat.name)}`}
            className="
              group flex items-center justify-between gap-2
              rounded-xl border border-white/10 bg-white/[0.03]
              px-4 py-3
              hover:border-cyan-500/40 hover:bg-white/[0.06]
              transition-all duration-200
            "
          >
            <div>
              <p className="text-white text-sm font-semibold leading-snug">
                {cat.name}
              </p>
              <p className="text-gray-500 text-xs mt-0.5">
                {cat.count} service{cat.count === 1 ? "" : "s"}
              </p>
            </div>
            <FaChevronRight
              size={11}
              className="text-gray-500 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-cyan-400"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Servicesmenu;