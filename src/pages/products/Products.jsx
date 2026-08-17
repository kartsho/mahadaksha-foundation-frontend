import React, { useState, useRef, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaCheck,
} from "react-icons/fa";
import productsData from "./productsData";

const CARD_WIDTH = 340; // px, roughly matches 3-visible-cards layout on desktop
const ACCESSED_PRODUCTS = new Set(["MailSecure", "DriveSync", "DeskPro"]); // placeholder "already accessed" demo state

function CategoryPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
        active
          ? "bg-cyan-500 text-white"
          : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08] hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function ProductCard({ product }) {
  const accessed = ACCESSED_PRODUCTS.has(product.name);
  return (
    <div
      className="
  shrink-0
  w-[220px]
  sm:w-[240px]
  md:w-[260px]
  lg:w-[280px]
  rounded-2xl
  border
  border-white/10
  bg-white/[0.02]
  p-4
"
      style={{ width: CARD_WIDTH }}
    >
      <div className="mb-3 flex items-center gap-2">
        <h4 className="text-sm sm:text-base font-bold text-white">{product.name}</h4>
        {product.tag && (
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
              product.tag === "NEW"
                ? "bg-cyan-500/20 text-cyan-300"
                : "bg-white/10 text-gray-300"
            }`}
          >
            {product.tag}
          </span>
        )}
      </div>
     <p className="mt-2 mb-5 text-xs sm:text-sm leading-6 text-gray-400">
        {product.description}
      </p>
      {accessed ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-400">
          <FaCheck size={11} /> Accessed
        </span>
      ) : (
        <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-cyan-400/50 hover:text-cyan-300">
          Try now <FaExternalLinkAlt size={11} />
        </button>
      )}
    </div>
  );
}

function CategorySection({ category, index }) {
  const scrollRef = useRef(null);

  const scrollByCard = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir * (CARD_WIDTH + 24),
      behavior: "smooth",
    });
  };
console.log(category);
  return (
    <section className="mb-16">
      {/* Category banner */}
      <div className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent p-2">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-gray-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-gray-300">
            {category.count} product{category.count === 1 ? "" : "s"}
          </span>
        </div>
        <h2 className="mb-2 text-3xl font-extrabold text-cyan-400">
          {category.name}
        </h2>
        <p className="max-w-2xl text-gray-400">{category.tagline}</p>
      </div>

      {/* Product carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {category.products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {category.products.length > 1 && (
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

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const pillsRef = useRef(null);

  const requestedCategory = searchParams.get("category");

  const initialSlug = useMemo(() => {
    if (!requestedCategory) return productsData[0].slug;
    const match = productsData.find(
      (c) =>
        c.slug === requestedCategory ||
        c.name.toLowerCase() === requestedCategory.toLowerCase()
    );
    return match ? match.slug : productsData[0].slug;
  }, [requestedCategory]);

  const [activeSlug, setActiveSlug] = useState(initialSlug);

  // If the user arrives via a fresh navbar link (query param changes), sync the tab.
  useEffect(() => {
    setActiveSlug(initialSlug);
  }, [initialSlug]);

  const totalProductsListed = useMemo(
    () => productsData.reduce((sum, c) => sum + c.count, 0),
    []
  );

  const activeCategory = productsData.find((c) => c.slug === activeSlug);

  const scrollPills = (dir) => {
    if (!pillsRef.current) return;
    pillsRef.current.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0B1220] px-6 pb-24 pt-32 text-white md:pt-40">
      {/* Hero */}
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
          Explore Products By Category
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          A complete business stack across sales, marketing, service, finance,
          collaboration, analytics, developer tools, and more. Browse every
          category and discover the products that fit your team.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-white/15 px-5 py-2 text-sm text-gray-300">
            {productsData.length} categories
          </span>
          <span className="rounded-full border border-white/15 px-5 py-2 text-sm text-gray-300">
            {totalProductsListed} products listed
          </span>
        </div>
      </div>

      {/* Category pills */}
      <div className="relative mx-auto mt-12 max-w-6xl">
        <button
          onClick={() => scrollPills(-1)}
          aria-label="Scroll categories left"
          className="absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B1220] p-1.5 text-gray-400 ring-1 ring-white/10 hover:text-white md:flex"
        >
          <FaChevronLeft size={12} />
        </button>

        <div
          ref={pillsRef}
          className="flex gap-3 overflow-x-auto px-1 py-1 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {productsData.map((cat) => (
            <CategoryPill
              key={cat.slug}
              label={cat.name}
              active={cat.slug === activeSlug}
              onClick={() => setActiveSlug(cat.slug)}
            />
          ))}
        </div>

        <button
          onClick={() => scrollPills(1)}
          aria-label="Scroll categories right"
          className="absolute right-0 top-1/2 z-10 hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B1220] p-1.5 text-gray-400 ring-1 ring-white/10 hover:text-white md:flex"
        >
          <FaChevronRight size={12} />
        </button>
      </div>

      {/* Active category content */}
      <div className="mx-auto mt-12 max-w-6xl">
        {activeCategory && (
          <CategorySection
            category={activeCategory}
            index={productsData.findIndex((c) => c.slug === activeSlug)}
          />
        )}
      </div>
    </div>
  );
}