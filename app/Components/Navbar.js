// import React from 'react'
// import Link from 'next/link'

// const Navbar = () => {
//   return (
   
//     <>
    
//    <nav className='py-2 bg-slate-700 fixed w-full top-0 text-white  flex justify-between   '>
//     <div className="logo ml-2"> logo </div>
//     <div> <ul className='list-none flex mr-10 gap-8 cursor-pointer justify-center items-center  '>
        
        
//        <Link href={"/"}> <li>home </li></Link>
//        <Link href={"/admin"}> <li>Admin </li></Link>
//        <Link href={"/virtualtour"}> <li>virtual tour </li></Link>
//        <Link href={"/bookings"}> <li> booking </li></Link>
//        <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login/Signup</button>

        
//     </ul></div>

//    </nav>
//     </>
//   )
// }

// export default Navbar


"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-900 fixed w-full top-0 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="logo text-xl font-bold flex gap-[10px] items-center">
          <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
            <Image src="/mainlogo.png" alt="Logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-white text-2xl">Monasteries360</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none gap-8 items-center">
          <Link href="/"><li className="hover:text-green-400 transition-colors duration-300 cursor-pointer">Home</li></Link>
          <Link href="/admin"><li className="hover:text-green-400 transition-colors duration-300 cursor-pointer">Admin</li></Link>
          <Link href="/virtualtour"><li className="hover:text-green-400 transition-colors duration-300 cursor-pointer">Virtual Tour</li></Link>
          <Link href="/bookings"><li className="hover:text-green-400 transition-colors duration-300 cursor-pointer">Booking</li></Link>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login/Signup
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-700">
          <ul className="flex flex-col list-none gap-4 p-4">
            <Link href="/"><li className="hover:text-green-400 transition-colors duration-300 cursor-pointer">Home</li></Link>
            <Link href="/admin"><li className="hover:text-green-400 transition-colors duration-300 cursor-pointer">Admin</li></Link>
            <Link href="/virtualtour"><li className="hover:text-green-400 transition-colors duration-300 cursor-pointer">Virtual Tour</li></Link>
            <Link href="/bookings"><li className="hover:text-green-400 transition-colors duration-300 cursor-pointer">Booking</li></Link>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
            >
              Login/Signup
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
