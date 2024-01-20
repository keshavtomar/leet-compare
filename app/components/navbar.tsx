"use client";

import React, { useEffect, useState } from "react";
import { navitems } from "@/lib/data";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [laptopview, setLaptopView] = useState(true);

  const resizeHandler = () => {
    if (window.innerWidth > 1024) {
      setLaptopView(true);
    } else {
      setLaptopView(false);
    }
  };

  window.addEventListener("resize", resizeHandler);

  useEffect(() => {
    resizeHandler();
  }, []);

  return (
    <div
      className={`group fixed w-full h-auto shadow-sm ${
        navbarOpen && !laptopview ? "h-screen" : ""
      }`}
    >
      <nav className="flex items-center box-content justify-between flex-wrap bg-gray-800 p-6 h-auto transition-all duration-500">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="logo"></span>
          <span className="font-semibold text-xl tracking-tight">
            LeetCompare
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={()=>setNavbarOpen(!navbarOpen)}
            className={`flex items-center px-3 py-2 border rounded text-white border-gray-400 hover:text-white hover:border-white ${
              navbarOpen ? "active" : ""
            }`}
          >
            <svg
              className="fill-current h-6 w-6 transition-transform duration-300 transform"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                className="burger-path"
                d={
                  navbarOpen
                    ? "M0 3h20v1H0V3zm0 8h20v1H0v-1zm0 8h20v1H0v-1z"
                    : "M0 0h20v2H0V0zm0 7h20v2H0V7zm0 7h20v2H0v-2z"
                }
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full relative flex-grow lg:flex lg:items-center lg:w-auto transition-all duration-500 ${
            navbarOpen || laptopview ? "" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow"></div>
          <div>
            {navitems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
