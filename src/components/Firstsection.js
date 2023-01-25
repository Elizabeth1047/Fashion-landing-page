import React from 'react'
import fir from "../head3.jpg";
import vanilla from "../vanilla.module.css"; 

function Firstsection() {
  return (
    <div className={vanilla.bg}>
      <div className=" w-[90%] m-auto mt-20 pt-10 bg-red-50 px-4 pb-6 md:w-[50%] md:m-10 md:ml-0 md:h-full md: ">
        <div className="p-6  lg:pt-0 lg:pl-12  lg:pb-0">
          <h6 className="my-6 tracking-widest">UNIQUE FASHION BRAND</h6>
          <h1 className="text-5xl lg:text-6xl my-6">
            LAUNCH YOUR FASHION PROJECT
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className=" mt-10">
            <span className="bg-red-300 p-6 ">Book A Consultation</span>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto mt-2 md:hidden">
        <img src={fir} />
      </div>
    </div>
  );
}

export default Firstsection