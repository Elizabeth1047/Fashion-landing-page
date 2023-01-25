import React from "react";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import ham from "../img1 (5).png";
import hams from "../hamburger-menu.png";

import { RiArrowDropDownLine } from "react-icons/ri";
import { GiCottonFlower } from "react-icons/gi";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);
  const [smalled, setSmalled] = useState(false);
  const [smallsec, setSmallsec] = useState(false);
  const [smallseced, setSmallseced] = useState(false);
  const [smallsecs, setSmallsecs] = useState(false);
  const [smallsecsed, setSmallsecsed] = useState(false);

  const handletoggle = () => {
    setOpen(!open);
  };

  const handletouch = () => {
    setSmall(!small);
    setSmalled(!smalled);
  };
  const handletouchsec = () => {
    setSmallsec(!smallsec);
    setSmallseced(!smallseced);
  };
  const handletouchsecs = () => {
    setSmallsecs(!smallsecs);
    setSmallsecsed(!smallsecsed);
  };
  return (
    <div className="fixed z-10 md:border-teal-400 md:border-b max-w-full top-0 left-0 right-0  ">
      <div className="  h-16 bg-black mx-auto flex items-center justify-between  p-4 px-6">
        <div className="flex items-center   ">
          <GiCottonFlower size={30} className="text-lime-600" />
          <h1 className="text-white text-[120%] md:text-2xl">
            envator <span className="text-lime-600">Market</span>{" "}
          </h1>
        </div>
        <button className="bg-lime-600 text-white rounded-md px-6 py-2 text-sm">
          Buy Now
        </button>
      </div>
      <div className=" bg-slate-100/80 md:flex h-16 md:absolute md:text-center md:items-center md:justify-between  text-sm  w-full  ">
        <div className="md:border-teal-400 p-2 max-w-[67px] ">
          <img src={ham} />
        </div>
        <div
          onClick={handletoggle}
          className="text-3xl absolute right-8 top-[85px] cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div
          className={`bg-white text-sm absolute   md:static gap-3 md:text-lg  md:flex  md:items-center  justify-center
        md:text-center md:z-auto  z-[-1]  md:text-black p-2  pt-14 md:pt-0 top-16 w-full md:w-full md:border-teal-400 md:border-b
       transition-all md:transition-none duration-500 ease-in-out ${
         open ? "top-20" : "top-[-490px]"
       }`}
        >
          <div className="my-3 duration-500  ">
            <h4>Homepage</h4>
          </div>
          <div className="my-3 ">
            <h4>About us</h4>
          </div>
          <div
            className={`flex-col h-[40px] md:h-[40px] overflow-hidden  transition-all duration-500 ease-in-out md:items-center md:text-center   ${
              small ? "h-[100px]" : "h-[-40px]"
            } ${smalled ? "md:overflow-visible" : "overflow-hidden"} `}
          >
            <div onClick={handletouch} className="flex items-center ">
              <h4>Services</h4>
              <RiArrowDropDownLine size={40} />
            </div>
            <div className="   py-0 pt-1 md:mt-4  w-full md:bg-white md:text-sm  ">
              <h4 className="md:py-4">service page</h4>
              <h4 className="md:py-4">Service details</h4>
            </div>
          </div>
          <div
            className={`flex-col h-[40px] md:h-[40px] overflow-hidden transition-all duration-500 ease-in-out   ${
              smallsec ? "h-[210px]" : "h-[-40px]"
            } ${smallseced ? "md:overflow-visible" : "overflow-hidden"} `}
          >
            <div onClick={handletouchsec} className="flex items-center ">
              <h4>Pages</h4>
              <RiArrowDropDownLine size={40} />
            </div>
            <div className=" py-0 w-full mt-4 md:bg-white md:text-sm  ">
              <h4 className="p-1 md:p-2">Jobs</h4>
              <h4 className="p-1 md:p-2">Our Team</h4>
              <h4 className="p-1 md:p-2">Testimonials</h4>
              <h4 className="p-1 md:p-2">Pricing</h4>
              <h4 className="p-1 md:p-2 ">Portofolio</h4>
              <h4 className="p-1 md:p-2">FAQ</h4>
              <h4 className="p-1 md:p-2">Our Process</h4>
              <h4 className="p-1 md:p-2">404</h4>
              <h4 className="p-1 md:p-2">Coming Soon</h4>
              <h4 className="p-1 md:p-2">Contact Us</h4>
              <h4 className="p-1 md:p-2">Design Guideline</h4>
            </div>
          </div>
          <div
            className={`flex-col h-[40px] md:h-[40px] overflow-hidden transition-all duration-500 ease-in-out   ${
              smallsecs ? "h-[130px]" : "h-[-40px]"
            } ${smallsecsed ? "md:overflow-visible" : "overflow-hidden"} `}
          >
            <div onClick={handletouchsecs} className="flex items-center ">
              <h4>Blogs</h4>
              <RiArrowDropDownLine size={40} />
            </div>
            <div className="   py-0 w-full mt-4 md:bg-white md:text-sm ">
              <h4 className="p-1 md:p-5 ">Our Blog</h4>
              <h4 className="p-1 md:p-5">Post Archive</h4>
              <h4 className="p-1 md:p-5">Single Post</h4>
            </div>
          </div>
        </div>
        <div className="border-teal-400 hidden md:flex p-4  ">
          <img src={hams} size={40} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
