"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [linkHovered, setLinkHovered] = useState(false);
  return (
    <nav className="flex items-center bg-black text-[white] h-12 px-10 [&_li]:cursor-pointer">
      <span className="text-2xl">LOGO</span>
      <ul className="flex gap-5 m-auto">
        <li
          className="relative flex flex-col bg-[blue]"
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
        >
          <span>Explore</span>
          {linkHovered ? (
            <div className="absolute pt-[30%] w-40 top-[100%] z-[5]">
              <ul className="border border-[blue] text-[black] [&>li]:bg-rose-800 divide-y">
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </li>
        <li>LINK 2</li>
        <li>LINK 3</li>
        <li>LINK 4</li>
      </ul>
    </nav>
  );
};

export default Navbar;
