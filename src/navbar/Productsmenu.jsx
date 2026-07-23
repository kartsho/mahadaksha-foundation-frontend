import React from "react";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";

const PRODUCT_CATEGORIES = [
  { name: "Sales", count: 10 },
  { name: "Marketing", count: 16 },
  { name: "Commerce and POS", count: 3 },
  { name: "Service", count: 6 },
  { name: "Finance", count: 15 },
  { name: "ERP", count: 1 },
  { name: "Email, Storage, and Collaboration", count: 21 },
  { name: "Human Resources", count: 8 },
  { name: "Legal", count: 2 },
  { name: "Security and IT Management", count: 12 },
  { name: "ManageEngine Enterprise Solutions", count: 16 },
  { name: "BI and Analytics", count: 4 },
  { name: "Project Management", count: 4 },
  { name: "Developer Platforms", count: 15 },
  { name: "IoT", count: 1 },
  { name: "Suites", count: 7 },
];

function Productsmenu({ onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="
        absolute left-1/2 top-full -translate-x-1/2 mt-3
        w-[95vw] max-w-[1000px]
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
            Product Categories
          </p>
          <h3 className="text-white text-2xl font-bold mb-2">
            Explore Products By Category
          </h3>
          <p className="text-gray-400 text-sm max-w-xl">
            A complete business stack across sales, marketing, service,
            finance, collaboration, analytics, developer tools, and more.
            Browse every category and discover the products that fit your
            team.
          </p>
        </div>

        <a
          href="/products"
          className="shrink-0 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm whitespace-nowrap transition-colors"
        >
          View All <FaArrowRight size={12} />
        </a>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto pr-1">
        {PRODUCT_CATEGORIES.map((cat) => (
          <a
            key={cat.name}
            href={`/products?category=${encodeURIComponent(cat.name)}`}
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
                {cat.count} product{cat.count === 1 ? "" : "s"}
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

export default Productsmenu;