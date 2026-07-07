import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function NavBar() {
    return (
        <div className='sticky top-0 z-30'>
            <div className="navbar bg-[#1D232A] shadow-m">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                    <img className="h-10 w-30  object-contain scale-x-150" src={logo} alt="logo" />
                </div>
                <div className="navbar-center  flex gap-5 p-2 z-50 ">
                   
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








                            {/* <NavLink
  to="/"
  end
  className={({ isActive }) =>
    isActive ? "text-blue-600 font-bold" : ""
  }
>
  Home
</NavLink> */}


                        {/* <li>
                            <details>
                                <summary>Products</summary>
                                <ul className="p-2 bg-base-100 w-40 z-1">

                                    <li><a>Su   bmenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>

                        <li>

                            <details>
                                <summary>Services</summary>
                                <ul className="p-2 bg-base-100 w-40 z-1">

                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                        
                   
                </div>
                <div className="navbar-end  z-50">
                    <button className="btn btn-outline btn-primary">Carrer <FaArrowRight/></button>
                </div>
            </div>
        </div>
    )
}

export default NavBar