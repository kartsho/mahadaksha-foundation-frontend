// import React, { useState, useRef } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import Servicesmenu from "./Servicesmenu";
// import Productsmenu from "./Productsmenu";
// import { FaChevronDown } from "react-icons/fa";
// function NavBar() {
//   const navLinkStyle = ({ isActive }) =>
//     `px-5 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
//       ? "bg-cyan-500 text-white shadow-lg"
//       : "text-white hover:bg-white/10 hover:text-cyan-300"
//     }`;

//   const navigate = useNavigate();

//   const [showServices, setShowServices] = useState(false);
//   const [showProducts, setShowProducts] = useState(false);

//   const timeoutRef = useRef(null);
//   const productsTimeoutRef = useRef(null);

//   const handleEnter = () => {
//     clearTimeout(timeoutRef.current);
//     setShowServices(true);
    
//   };

//   const handleLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setShowServices(false);
//     }, 200);
//   };

//   const handleProductsEnter = () => {
//     clearTimeout(productsTimeoutRef.current);
//     setShowProducts(true);
//   };

//   const handleProductsLeave = () => {
//     productsTimeoutRef.current = setTimeout(() => {
//       setShowProducts(false);
//     }, 200);
//   };

//   return (
//     <header className="sticky  z-50 top-0 left-0 right-0">
//       <div
//         className="
//           w-[100%]
//           mx-auto
//           h-15
          
//           bg-[#0B1220]/60
//           backdrop-blur-2xl
//           border border-white/10
//           shadow-[0_10px_40px_rgba(0,0,0,0.35)]
//           px-8
//           flex
//           items-center
//           justify-between
//         "
//       >
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-12 w-[calc(100%+40px)] max-w-none object-cover scale-125 scale-3d"
//           />
//         </div>

//         {/* Navigation */}
//         <nav className="hidden lg:flex items-center gap-7">
//           <NavLink to="/" end className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold text-xs"}>
//             Home
//           </NavLink>

//           <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold text-xs"}>
//             About
//           </NavLink>

//           <div
//             onMouseEnter={handleProductsEnter}
//             onMouseLeave={handleProductsLeave}
//             className="relative"
//           >
//             <NavLink
//               to="/products"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-red-500 font-bold flex items-center justify-center gap-1"
//                   : "text-white font-bold flex items-center justify-center gap-1 text-xs"
//               }
//             >
//               Products <FaChevronDown />
//             </NavLink>

//             {showProducts && (
//               <Productsmenu
//                 onEnter={handleProductsEnter}
//                 onLeave={handleProductsLeave}
//               />
//             )}
//           </div>


//           <div
//             onMouseEnter={handleEnter}
//             onMouseLeave={handleLeave}
//             className="relative"
//           >
//             <NavLink
//               to="/services"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-red-500 font-bold flex items-center justify-center gap-1"
//                   : "text-white font-bold flex items-center justify-center gap-1 text-xs"
//               }
//             >
//               Services <FaChevronDown />
//             </NavLink>

//             {showServices && (<Servicesmenu />)}
//           </div>


//           <NavLink to="/blog" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold text-xs"}>
//             Blog
//           </NavLink>

//           <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold text-xs"}>
//             Contact
//           </NavLink>

//           <NavLink to="/event" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold text-xs"}>
//             Events
//           </NavLink>

//           <NavLink to="/event/event-in-detailed" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold"}>

//           </NavLink>


//           <NavLink to="/carrer" >
//           </NavLink>


//         </nav>

//         {/* Button */}
//         <div className="flex items-center">
//           <button className="btn hover:btn-outline bg-[#13a6ea] hover:btn-primary text-white font-bold " onClick={() => navigate("/carrer")} >Carrer <FaArrowRight /></button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default NavBar;


// services menu yha se kaam krega 

import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo.png";
import Servicesmenu from "./Servicesmenu";
import Productsmenu from "./Productsmenu";
import { FaChevronDown } from "react-icons/fa";
function NavBar() {
  const navLinkStyle = ({ isActive }) =>
    `px-5 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
      ? "bg-cyan-500 text-white shadow-lg"
      : "text-white hover:bg-white/10 hover:text-cyan-300"
    }`;

  const navigate = useNavigate();

  const [showServices, setShowServices] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const timeoutRef = useRef(null);
  const productsTimeoutRef = useRef(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowServices(true);
    
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 200);
  };

  const handleProductsEnter = () => {
    clearTimeout(productsTimeoutRef.current);
    setShowProducts(true);
  };

  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setShowProducts(false);
    }, 200);
  };

  return (
    <header className="sticky  z-50 top-0 left-0 right-0">
      <div
        className="
          w-[100%]
          mx-auto
          h-15
          
          bg-[#0B1220]/60
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          px-8
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-[calc(100%+40px)] max-w-none object-cover scale-125 scale-3d"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold text-xs"}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold text-xs"}>
            About
          </NavLink>

          <div
            onMouseEnter={handleProductsEnter}
            onMouseLeave={handleProductsLeave}
            className="relative"
          >
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold flex items-center justify-center gap-1"
                  : "text-white font-bold flex items-center justify-center gap-1 text-xs"
              }
            >
              Products <FaChevronDown />
            </NavLink>

            {showProducts && (
              <Productsmenu
                onEnter={handleProductsEnter}
                onLeave={handleProductsLeave}
              />
            )}
          </div>


          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="relative"
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold flex items-center justify-center gap-1"
                  : "text-white font-bold flex items-center justify-center gap-1 text-xs"
              }
            >
              Services <FaChevronDown />
            </NavLink>

            {showServices && (
              <Servicesmenu onEnter={handleEnter} onLeave={handleLeave} />
            )}
          </div>


          <NavLink to="/blog" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold text-xs"}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold text-xs"}>
            Contact
          </NavLink>

          <NavLink to="/event" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold text-xs"}>
            Events
          </NavLink>

          <NavLink to="/event/event-in-detailed" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white font-bold"}>

          </NavLink>


          <NavLink to="/carrer" >
          </NavLink>


        </nav>

        {/* Button */}
        <div className="flex items-center">
          <button className="btn hover:btn-outline bg-[#13a6ea] hover:btn-primary text-white font-bold " onClick={() => navigate("/carrer")} >Carrer <FaArrowRight /></button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;