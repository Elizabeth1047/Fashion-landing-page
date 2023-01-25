import React, { useState,useEffect } from 'react'
import vanilla from "../vanilla.module.css"; 
import sixth from "../head.jpg";
const pictures = [
  "/images/img1 (9).jpg",
  "/images/img1 (8).jpg",
  "/images/img1 (8).jpg",
];
let count=0
let set = 0;
function Thirdsection() {
  const [currentindex, setCurrentindex]=useState(0)
  

  useEffect(() => {
    setInterval(() => {
      count = (count + 1) % pictures.length;
      setCurrentindex(count);
    }, 5000);
  
  }, [])

  
  
  return (
    <div className="w-[90%] m-auto py-10 md:flex md:items-center lg:justify-center  gap-5 lg:items-start">
      <div className="py-20  ">
        <h6 className="tracking-widest py-4">WE WOULD LIKE TO INTRODUCE</h6>
        <h6 className="text-[40px] leading-[60px] py-4">
          WE ARE A AWARD WINNING FASHION DESIGN HOUSE
        </h6>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="w-full relative z-[-5] md:w-[450px] md:pr-20 lg:w-[700px]">
          <img src={pictures[currentindex]} className="md:w-90" />
          <div className="absolute bottom-3 left-5 text-white  md:left-52 md:text-right ">
            <h4 className="text-xl md:text-right">Fast,Smooth and Effective</h4>
            <p className="text-sm md:text-right">thats how we work</p>
          </div>
        </div>
        <div className="text-center md:px-0  p-8 md:flex  md:gap-5">
          <div className="py-2 ">
            <h1 className="text-3xl md:text-5xl font-bold ">35</h1>
            <p className="text-sm">year experience</p>
          </div>
          <div className="py-2">
            <h1 className="text-3xl md:text-5xl font-bold">9,356+</h1>
            <p className="text-sm">project finished</p>
          </div>
          <div className="py-2">
            <h1 className="text-3xl md:text-5xl font-bold">368</h1>
            <p className="text-sm">expert designer</p>
          </div>
        </div>
      </div>
      <div className=" md:pl-6  lg:pt-[150px] lg:p-[50px]  ">
        <h6 className="py-4 text-lg">Team Of Expert Is Ready To Guide You</h6>
        <div className="md:w-50  ">
          <img src={sixth} />
        </div>
        <h6 className="text-xl lg:text-2xl py-3">
          Our Extensive Network Can Handle Any Creative Challenges
        </h6>
        <div className="inline-block mt-10 bg-red-300 text-center ">
          <span className=" p-6  whitespace-nowrap">
            see our collection
          </span>
        </div>
      </div>
    </div>
  );
}

export default Thirdsection