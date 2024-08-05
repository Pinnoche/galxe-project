"use client";

import Image from "next/image";
import galxe from "@/public/images/galxe.png";
import Link from "next/link";
import cancel from "@/public/images/cancel.png";
import { AiFillCaretDown } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [exploreList, setExploreList] = useState(false);
  const [galxeList, setGalxeList] = useState(false);
  const [protocolList, setProtocolList] = useState(false);
  const [moreList, setMoreList] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [winscreen, setWinscreen] = useState(innerWidth);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    onresize = () => {
      setWinscreen(innerWidth);
    };
  }, [winscreen]);

  const handleScroll = () => {
    const doc = document.documentElement;
    const scrollTop = (doc && doc.scrollTop) || 0;
    const windowHeight = innerHeight;
    const documentHeight = doc.scrollHeight;

    const newScrollPercentage =
      ((scrollTop + windowHeight) / documentHeight) * 100;
    setScrollPercentage(newScrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full h-20 z-[7] ${
        showMenu == true ? "tablet:min-h-full" : "h-20"
      } ${
        showMenu == false
          ? scrollPercentage <= 44
            ? "bg-transparent backdrop-blur-sm"
            : "bg-black"
          : undefined
      }`}
    >
      <nav className="w-full h-full min-h-full tablet:overflow-auto no-scrollbar">
        <div className="h-full w-full tablet:relative">
          <div className="w-full h-full flex tablet:flex-col">
            <div
              className={`mr-16 ml-20 flex items-center tablet:w-full tablet:ml-0 tablet:mr-0 tablet:mt-6 tablet:mb-8 tablet:flex tablet:justify-between`}
            >
              <Link href="/" className="tablet:ml-12">
                <Image
                  src={galxe}
                  alt="Galxe"
                  quality={100}
                  width={100}
                  height={20}
                  priority
                  className="cursor-pointer"
                />
              </Link>

              <div className="flex tablet:mr-10 phone:mr-6">
                <button className="bg-gray-700 hidden text-gray-400 rounded-full text-xs py-[7px] px-6 mr-4 hover:bg-gray-500 tablet:mr-14 tablet:block phone:hidden">
                  Network
                </button>
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
                  className={`bg-cover hidden tablet:mr-3 cursor-pointer tablet:block ${
                    !showMenu ? "tablet:hidden" : "block"
                  }`}
                >
                  <Image src={cancel} alt="Cancel" width={20} height={20} />
                </button>
              </div>
            </div>

            <div
              className={`w-full flex items-center justify-between text-white tablet:flex-shrink tablet:grid tablet:grid-cols-1`}
            >
              <div
                className={`flex tablet:grid tablet:grid-cols-1 tablet:gap-5 tablet:min-w-full tablet:p-10 tablet:text-xl tablet:font-semibold  ${
                  showMenu ? "tablet:block" : "tablet:hidden"
                }`}
              >
                <div
                  onMouseEnter={() => {
                    winscreen > 1024 ? setExploreList(true) : undefined;
                  }}
                  onMouseLeave={() => {
                    winscreen > 1024 ? setExploreList(false) : undefined;
                  }}
                  className="relative tablet:border-b-[#1b1e24] tablet:border-b-[1px] tablet:pb-2 tablet:mb-4"
                >
                  <span
                    onClick={() => {
                      winscreen <= 1024
                        ? setExploreList((prev) => !prev)
                        : setExploreList(false);
                    }}
                    className="flex items-center tablet:justify-between cursor-pointer tablet:hover:text-white"
                  >
                    Explore
                    <AiFillCaretDown className="h-4 w-7 hover:text-blue-700 tablet:hover:text-white" />
                  </span>
                  {exploreList && (
                    <div className="absolute top-[100%] pt-[30%] min-w-[172px] left-0 overflow-hidden tablet:relative tablet:pt-0 tablet:top-0 tablet:ml-0">
                      <ul className="w-full bg-black border-2 border-gray-900 rounded-md tablet:border-0 tablet:mt-4 tablet:text-[#ced3db]">
                        <li className="py-3 px-7 hover:bg-gray-900 cursor-pointer tablet:pl-0 tablet:hover:bg-black">
                          All
                        </li>
                        <li className="py-3 px-7 hover:bg-gray-900 cursor-pointer tablet:pl-0 tablet:hover:bg-black">
                          Following
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Link
                  href="/spaces"
                  className="ml-8 cursor-pointer hover:text-blue-700 tablet:ml-0 tablet:hover:text-white tablet:border-b-[#1b1e24] tablet:border-b-[1px] tablet:pb-2 tablet:mb-4"
                >
                  Spaces
                </Link>
                <Link
                  href="/solutions"
                  className="ml-8 tablet:ml-0 cursor-pointer hover:text-blue-700 tablet:hover:text-white tablet:border-b-[#1b1e24] tablet:border-b-[1px] tablet:pb-2 tablet:mb-4"
                >
                  Solutions
                </Link>
                <div
                  className="relative ml-8 tablet:ml-0 tablet:border-b-[#1b1e24] tablet:border-b-[1px] tablet:pb-2 tablet:mb-4"
                  onMouseEnter={() => {
                    winscreen > 1024 ? setGalxeList(true) : undefined;
                  }}
                  onMouseLeave={() => {
                    winscreen > 1024 ? setGalxeList(false) : undefined;
                  }}
                >
                  <span
                    onClick={() => {
                      winscreen <= 1024
                        ? setGalxeList((prev) => !prev)
                        : setGalxeList(false);
                    }}
                    className="flex items-center tablet:justify-between cursor-pointer hover:text-blue-700 tablet:hover:text-white"
                  >
                    Galxe ID <AiFillCaretDown className="h-4 w-7" />
                  </span>
                  {galxeList && (
                    <div className="absolute top-[100%] pt-[30%] min-w-[172px] left-0 tablet:relative tablet:pt-0 tablet:top-0 tablet:ml-0 ">
                      <ul className="w-full bg-black border-gray-900 border-2 rounded-md overflow-hidden cursor-pointer tablet:border-0 tablet:mt-4 tablet:text-[#ced3db]">
                        <li className="py-3 px-7 hover:bg-gray-900 tablet:pl-0 tablet:hover:bg-black">
                          Profile
                        </li>
                        <li className="py-3 px-7 hover:bg-gray-900 tablet:pl-0 tablet:hover:bg-black">
                          Web3 Score
                        </li>
                        <li className="py-3 px-7 hover:bg-gray-900 tablet:pl-0 tablet:hover:bg-black">
                          Passport
                        </li>
                        <li className="py-3 px-7 hover:bg-gray-900 tablet:pl-0 tablet:hover:bg-black">
                          Smart Balance
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div
                  className="relative ml-8 tablet:ml-0 tablet:border-b-[#1b1e24] tablet:border-b-[1px] tablet:pb-2 tablet:mb-4"
                  onMouseEnter={() => {
                    winscreen > 1024 ? setProtocolList(true) : undefined;
                  }}
                  onMouseLeave={() => {
                    winscreen > 1024 ? setProtocolList(false) : undefined;
                  }}
                >
                  <span
                    onClick={() => {
                      winscreen <= 1024
                        ? setProtocolList((prev) => !prev)
                        : setProtocolList(false);
                    }}
                    className="flex items-center tablet:justify-between cursor-pointer hover:text-blue-700 tablet:hover:text-white"
                  >
                    Protocol <AiFillCaretDown className="h-4 w-7" />
                  </span>
                  <div
                    className={`absolute top-[100%] pt-[30%] min-w-[10.75rem] left-0 tablet:relative tablet:pt-0 tablet:top-0 tablet:ml-0 ${
                      protocolList == false ? "hidden" : "block"
                    }`}
                  >
                    <ul
                      className={`w-full bg-black border-gray-900 border-2 rounded-md overflow-hidden cursor-pointer tablet:border-0 tablet:mt-4 tablet:text-[#ced3db] `}
                    >
                      <li className="py-3 px-7 hover:bg-gray-900 tablet:pl-0 tablet:hover:bg-black">
                        Overview
                      </li>
                      <li className="py-3 px-7 hover:bg-gray-900 tablet:pl-0 tablet:hover:bg-black">
                        Credentials
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="relative ml-8 tablet:ml-0"
                  onMouseEnter={() => {
                    winscreen > 1024 ? setMoreList(true) : undefined;
                  }}
                  onMouseLeave={() => {
                    winscreen > 1024 ? setMoreList(false) : undefined;
                  }}
                >
                  <span
                    onClick={() => {
                      winscreen <= 1024
                        ? setMoreList((prev) => !prev)
                        : setMoreList(false);
                    }}
                    className="flex items-center cursor-pointer hover:text-blue-700 tablet:hover:text-white tablet:flex tablet:justify-between"
                  >
                    More <AiFillCaretDown className="h-4 w-7" />
                  </span>
                  {moreList && (
                    <div className="absolute top-[100%] pt-[30%] w-[710px] left-[-180px] tablet:relative tablet:pt-0 tablet:top-0 tablet:ml-0 tablet:left-0 tablet:mt-4">
                      <div className="grid grid-cols-4 gap-0 bg-black border-gray-900 border-2 rounded-md overflow-hidden tablet:border-0 tablet:grid tablet:grid-cols-1">
                        <div className="my-6 tablet:my-0">
                          <ul className="list">
                            About
                            <li className="mt-4">Docs</li>
                            <li>Careers</li>
                            <li>Brand Kit</li>
                            <li>Press Kit</li>
                          </ul>
                        </div>
                        <div className="my-6 tablet:my-0">
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
                        <div className="my-6 tablet:my-0">
                          <ul className="list">
                            Support
                            <li className="mt-4">Help Center</li>
                            <li>Support</li>
                            <li>Apply for Your Space</li>
                          </ul>
                        </div>
                        <div className="my-6 tablet:my-0 tablet:mb-8">
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
            <div className="flex mr-4 ml-28 tablet:mr-0 tablet:ml-4 tablet:mt-40 tablet:mb-0 tablet:fixed tablet:min-w-[95%] bottom-[1vh]">
              <button className="bg-gray-700 text-gray-400 rounded-full text-xs py-[0.4374rem] px-6 mr-4 hover:bg-gray-500 tablet:hidden max-w-16 max-h-8">
                Network
              </button>
              <button
                className={`bg-blue-700 rounded-full tablet:rounded-lg tablet:min-w-full tablet:min-h-[52px] tablet:text-base tablet:font-bold tablet:mb-0 py-[0.4374rem] px-6 tablet:py-[14px] tablet:px-[40px] text-xs text-white font-bold hover:bg-blue-500 max-h-8 ${
                  showMenu == true ? "block" : "tablet:hidden"
                }`}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
