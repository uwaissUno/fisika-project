"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen h-14 bg-white/75 backdrop-blur-sm px-3 py-2 flex items-center border-b border-slate-300 fixed justify-between z-50">
      <ul
        className={`gap-4 max-w-[200px] transition-all duration-200 origin-top ${
          isOpen ? "scale-y-100" : "scale-y-0"
        } top-16 flex flex-col bg-sky-300/30 right-2 absolute w-full p-4 rounded-md md:static md:scale-100 md:flex-row md:bg-transparent md:gap-8`}
      >
        <li className="text-md font-bold text-yellow-500">Home</li>
        <li className="text-md font-bold text-yellow-500">Home</li>
        <li className="text-md font-bold text-yellow-500">Home</li>
        <li className="text-md font-bold text-yellow-500">Home</li>
      </ul>
      <button
        className="block absolute right-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block w-[30px] h-[2px] bg-slate-700 rounded-full transition-all duration-200 my-2 origin-top-left ${
            isOpen ? "rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block w-[30px] h-[2px] bg-slate-700 rounded-full transition-all duration-200 my-2 ${
            isOpen ? "scale-0" : ""
          }`}
        ></span>
        <span
          className={`block w-[30px] h-[2px] bg-slate-700 rounded-full transition-all duration-200 my-2 origin-bottom-left ${
            isOpen ? "-rotate-45" : ""
          }`}
        ></span>
      </button>
    </div>
  );
}
