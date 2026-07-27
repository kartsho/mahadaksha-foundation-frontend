import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import Productsmenu from "./Productsmenu";
import Servicesmenu from "./Servicesmenu";

function NavBar() {
  const navigate = useNavigate();

  // Desktop Dropdown
  const [showProducts, setShowProducts] = useState(false);
  const [showServices, setShowServices] = useState(false);

  // Mobile Drawer
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile Accordions
  const [mobileProducts, setMobileProducts] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const timeoutRef = useRef(null);
  const productsTimeoutRef = useRef(null);

  const handleProductsEnter = () => {
    clearTimeout(productsTimeoutRef.current);
    setShowProducts(true);
  };

  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setShowProducts(false);
    }, 150);
  };

  const handleServicesEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowServices(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 150);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileProducts(false);
    setMobileServices(false);
  };

  const navClass = ({ isActive }) =>
    isActive
      ? "text-[tomato] font-bold "
      : "text-white hover:text-[tomato] transition duration-300 text-xs ";

  return (
    <>
      {/* Overlay - only mounted when menu is open */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      <header className="sticky top-0 z-50">
        <div
          className="
          h-13
          bg-[#0B1220]/70
          backdrop-blur-xl
          border-b
          border-white/10
          flex
          items-center
          justify-between
          px-5
          lg:px-8
        "
        >
          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="logo" className="h-11 object-contain" />
          </NavLink>

          {/* ================= DESKTOP NAVBAR ================= */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            {/* PRODUCTS */}
            <div
              className="relative"
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `${navClass({ isActive })} flex items-center gap-1`
                }
              >
                Products
                <FaChevronDown size={12} />
              </NavLink>

              {showProducts && (
                <Productsmenu
                  onEnter={handleProductsEnter}
                  onLeave={handleProductsLeave}
                />
              )}
            </div>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${navClass({ isActive })} flex items-center gap-1`
                }
              >
                Services
                <FaChevronDown size={12} />
              </NavLink>

              {showServices && (
                <Servicesmenu
                  onEnter={handleServicesEnter}
                  onLeave={handleServicesLeave}
                />
              )}
            </div>

            <NavLink to="/blog" className={navClass}>
              Blog
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>

            <NavLink to="/event" className={navClass}>
              Events
            </NavLink>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => navigate("/carrer")}
              className=" btn hover:btn-soft hover:btn-primary text-white "
            >
              Career
              <FaArrowRight />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            <FaBars />
          </button>

          {/* ================= MOBILE DRAWER ================= */}
          {/* Mounted only when menuOpen is true - fixes "auto visible without click" bug */}
          {menuOpen && (
            <div
              className="fixed top-0 right-0 h-screen w-[320px] bg-[#0B1220] shadow-2xl border-l border-white/10 z-50 md:hidden animate-slide-in"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <img src={logo} alt="logo" className="h-10 object-contain" />

                <button onClick={closeMenu} className="text-white text-2xl">
                  <FaTimes />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col py-4 overflow-y-auto max-h-[calc(100vh-84px)]">
                <NavLink
                  to="/"
                  className="px-6 py-3 hover:bg-white/5"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className="px-6 py-3 hover:bg-white/5"
                  onClick={closeMenu}
                >
                  About
                </NavLink>

                {/* PRODUCTS */}
                <button
                  onClick={() => setMobileProducts(!mobileProducts)}
                  className="flex justify-between items-center px-6 py-3 hover:bg-white/5"
                >
                  <span>Products</span>
                  {mobileProducts ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {mobileProducts && (
                  <div className="bg-white/5">
                    <NavLink
                      to="/products"
                      onClick={closeMenu}
                      className="block px-10 py-3 hover:text-cyan-400"
                    >
                      View All Products
                    </NavLink>

                    <NavLink
                      to="/products?category=Sales"
                      onClick={closeMenu}
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                    >
                      Sales
                    </NavLink>

                    <NavLink
                      to="/products?category=Marketing"
                      onClick={closeMenu}
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                    >
                      Marketing
                    </NavLink>

                    <NavLink
                      to="/products?category=Commerce and POS"
                      onClick={closeMenu}
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                    >
                      Commerce & POS
                    </NavLink>

                    <NavLink
                      to="/products?category=Finance"
                      onClick={closeMenu}
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                    >
                      Finance
                    </NavLink>

                    <NavLink
                      to="/products?category=ERP"
                      onClick={closeMenu}
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                    >
                      ERP
                    </NavLink>

                    <NavLink
                      to="/products?category=Developer Platforms"
                      onClick={closeMenu}
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                    >
                      Developer Platforms
                    </NavLink>
                  </div>
                )}

                {/* SERVICES */}
                <button
                  onClick={() => setMobileServices(!mobileServices)}
                  className="flex justify-between items-center px-6 py-3 hover:bg-white/5"
                >
                  <span>Services</span>
                  {mobileServices ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {mobileServices && (
                  <div className="bg-white/5">
                    <NavLink
                      to="/services"
                      className="block px-10 py-3 hover:text-cyan-400"
                      onClick={closeMenu}
                    >
                      View All Services
                    </NavLink>

                    <NavLink
                      to="/services?category=Digital Transformation"
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                      onClick={closeMenu}
                    >
                      Digital Transformation
                    </NavLink>

                    <NavLink
                      to="/services?category=Infrastructure & Cloud"
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                      onClick={closeMenu}
                    >
                      Infrastructure & Cloud
                    </NavLink>

                    <NavLink
                      to="/services?category=Data & AI"
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                      onClick={closeMenu}
                    >
                      Data & AI
                    </NavLink>

                    <NavLink
                      to="/services?category=Security & Compliance"
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                      onClick={closeMenu}
                    >
                      Security & Compliance
                    </NavLink>

                    <NavLink
                      to="/services?category=Business Consulting"
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                      onClick={closeMenu}
                    >
                      Business Consulting
                    </NavLink>

                    <NavLink
                      to="/services?category=Corporate Training"
                      className="block px-10 py-2 text-sm hover:text-cyan-400"
                      onClick={closeMenu}
                    >
                      Corporate Training
                    </NavLink>
                  </div>
                )}

                <NavLink
                  to="/blog"
                  className="px-6 py-3 hover:bg-white/5"
                  onClick={closeMenu}
                >
                  Blog
                </NavLink>

                <NavLink
                  to="/contact"
                  className="px-6 py-3 hover:bg-white/5"
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>

                <NavLink
                  to="/event"
                  className="px-6 py-3 hover:bg-white/5"
                  onClick={closeMenu}
                >
                  Events
                </NavLink>

                <div className="px-6 mt-6">
                  <button
                    onClick={() => {
                      navigate("/carrer");
                      closeMenu();
                    }}
                    className="btn w-full bg-[#13a6ea] hover:bg-cyan-500 text-white"
                  >
                    Career
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default NavBar;
