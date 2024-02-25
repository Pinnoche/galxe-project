"use client";

import Image from "next/image";
import galxe from "@/public/images/galxe.png";
import Link from "next/link";
import cancel from "@/public/images/cancel.png";
import { AiFillCaretDown } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

import { useState } from "react";

export default function Navbar() {
  const [exploreList, setExploreList] = useState(false);
  const [galxeList, setGalxeList] = useState(false);
  const [protocolList, setProtocolList] = useState(false);
  const [moreList, setMoreList] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={`fixed bg-black top-0 left-0 w-full h-20 z-[7] ${
        showMenu == true ? "tablet:min-h-full" : "h-20"
      }`}
    >
      <nav className="relative w-full h-full">
        <div className="absolute h-full w-full flex items-center justify-between">
          <div className="flex items-center">
            <div className="ml-4 mr-4">
              <Link href="/" className="mx-8 flex">
                <Image
                  src={galxe}
                  alt="Galxe"
                  quality={100}
                  height={20}
                  priority
                  className="cursor-pointer overflow-clip"
                />
              </Link>
            </div>
            <div
              className={`text-white flex items-center tablet:flex-wrap tablet:min-h-full tablet:min-w-full ${
                showMenu == true ? "block" : "tablet:hidden"
              }`}
            >
              <div
                className="relative mr-2"
                onMouseEnter={() => setExploreList(true)}
                onMouseLeave={() => setExploreList(false)}
              >
                <span className="flex items-center cursor-pointer hover:text-blue-700">
                  Explore <AiFillCaretDown className="h-4 w-7" />
                </span>
                {exploreList && (
                  <div className="absolute top-[100%] pt-[30%] min-w-[172px] left-0 overflow-hidden">
                    <ul className="w-full bg-black border-2 border-gray-900 rounded-md">
                      <li className="py-3 px-7 hover:bg-gray-900 cursor-pointer">
                        All
                      </li>
                      <li className="py-3 px-7 hover:bg-gray-900 cursor-pointer">
                        Following
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Link
                href="/spaces"
                className="ml-8 cursor-pointer hover:text-blue-700"
              >
                Spaces
              </Link>
              <Link
                href="/solutions"
                className="ml-8 cursor-pointer hover:text-blue-700"
              >
                Solutions
              </Link>
              <div
                className="relative ml-8"
                onMouseEnter={() => setGalxeList(true)}
                onMouseLeave={() => setGalxeList(false)}
              >
                <span className="flex items-center cursor-pointer hover:text-blue-700">
                  Galxe ID <AiFillCaretDown className="h-4 w-7" />
                </span>
                {galxeList && (
                  <div className="absolute top-[100%] pt-[30%] min-w-[172px] left-0">
                    <ul className="w-full bg-black border-gray-900 border-2 rounded-md overflow-hidden cursor-pointer">
                      <li className="py-3 px-7 hover:bg-gray-900">Profile</li>
                      <li className="py-3 px-7 hover:bg-gray-900">
                        Web3 Score
                      </li>
                      <li className="py-3 px-7 hover:bg-gray-900">Passport</li>
                      <li className="py-3 px-7 hover:bg-gray-900">
                        Smart Balance
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div
                className="relative ml-8"
                onMouseEnter={() => setProtocolList(true)}
                onMouseLeave={() => setProtocolList(false)}
              >
                <span className="flex items-center cursor-pointer hover:text-blue-700">
                  Protocol <AiFillCaretDown className="h-4 w-7" />
                </span>
                <div className="absolute top-[100%] pt-[30%] min-w-[10.75rem] left-0">
                  <ul
                    className={`w-full bg-black border-gray-900 border-2 rounded-md overflow-hidden cursor-pointer ${
                      protocolList == false ? "hidden" : "block"
                    }`}
                  >
                    <li className="py-3 px-7 hover:bg-gray-900">Overview</li>
                    <li className="py-3 px-7 hover:bg-gray-900">Credentials</li>
                  </ul>
                </div>
              </div>
              <div
                className="relative ml-8"
                onMouseEnter={() => setMoreList(true)}
                onMouseLeave={() => setMoreList(false)}
              >
                <span className="flex items-center cursor-pointer hover:text-blue-700">
                  More <AiFillCaretDown className="h-4 w-7" />
                </span>
                {moreList && (
                  <div className="absolute top-[100%] pt-[30%] w-[710px] left-[-180px]">
                    <div className="flex flex-cols-4 gap-0 bg-black border-gray-900 border-2 rounded-md overflow-hidden">
                      <div className="my-6">
                        <ul className="list">
                          About
                          <li className="mt-4">Docs</li>
                          <li>Careers</li>
                          <li>Brand Kit</li>
                          <li>Press Kit</li>
                        </ul>
                      </div>
                      <div className="my-6">
                        <ul className="list">
                          Community
                          <li className="mt-4">
                            <a href="https://blog.galxe.com/">Blog</a>
                          </li>
                          <li>
                            <a href="https://twitter.com/galxe">Twitter</a>
                          </li>
                          <li>
                            <a href="https://t.me/Galxe">Telegram</a>
                          </li>
                          <li>
                            <a href="https://discord.com/invite/galxe">
                              Discord
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/galxehq/">
                              Instagram
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="my-6">
                        <ul className="list">
                          Support
                          <li className="mt-4">Help Center</li>
                          <li>Support</li>
                          <li>Apply for Your Space</li>
                        </ul>
                      </div>
                      <div className="my-6">
                        <ul className="list">
                          Disclaimer
                          <li className="mt-4">Terms of Service</li>
                          <li>Galxe Passport Terms of Service</li>
                          <li>Privacy Policy</li>
                          <li>Galxe Passport Privacy Policy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-gray-700 text-gray-400 rounded-full text-xs mr-4 py-[7px] px-5 hover:bg-gray-500 phone:hidden">
              Polygon
            </button>
            <button
              className={`bg-blue-700 rounded-full py-[7px] px-6 text-xs text-white font-bold mx-4 hover:bg-blue-500 ${
                showMenu == true ? "block" : "tablet:hidden"
              }`}
            >
              Log in
            </button>
          </div>

          <button
            onClick={() => setShowMenu(true)}
            className={`cursor-pointer hidden tablet:block ${
              showMenu == true ? "tablet:hidden" : "block"
            }`}
          >
            <IoIosMenu className="h-10 w-10 text-white" />
          </button>
          <button
            onClick={() => setShowMenu(false)}
            className={`bg-cover text-white mr-3 z-10 cursor-pointer hidden tablet:block ${
              showMenu == false ? "tablet:hidden" : "block"
            }`}
          >
            <Image src={cancel} alt="Cancel" width={20} height={20} />
          </button>
        </div>
      </nav>
    </div>
  );
}
