import React from 'react'
import firt from "../img1 (1).jpg";
function Tenthsection() {
  return (
    <div className="bg-red-200 py-10">
      <div className="w-[90%] m-auto text-center lg:text-left md:flex md:items-center md:justify-between md:gap-2 lg:gap-8">
        <div>
          <h5 className="py-3 text-base">READY TO START A PROJECT?</h5>
          <h1 className="text-5xl py-5">We will draw your success</h1>
          <div className="md:w-[350px] lg:w-[700px]">
            <img src={firt} />
          </div>
        </div>
        <div>
          <h5 className="mt-10 text-2xl">Lets get to know Each other</h5>
          <div className=" my-10  md:text-lefttext-center lg:my-4">
            <span className="bg-red-300 px-8 py-4  ">See our Plan</span>
            <span className="p-3 text-gray-400 md:block lg:inline-block mt-5">Free Consultation</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tenthsection