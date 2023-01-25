import React from 'react'
import Subsecondsection from './Subsecondsection';
import first from "../img1 (6).png";
import second from "../img1 (11).png";
import third from "../img1 (10).png";
import fourth from "../img1 (9).png";
import fifth from "../img1 (8).png";
import sixth from "../img1 (7).png";


function Secondsection({image}) {
  return (
    <div className="bg-red-50 px-10 text-center   ">
      <div className="lg:w-[95.7%] lg:border-black lg:border-l lg:border-r lg:m-auto ">
        <h6 className="pt-40 tracking-widest ">OUR LOVED CUSTOMER</h6>
        <h1 className="text-5xl  m-auto py-4 leading-[80px]">
          TRUSTED BY <span className="text-red-100">1,500+</span> WORLDWIDE
          CUSTOMERS
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className=" md:flex flex-wrap items-center text-center justify-between lg:p-8 lg:gap-2">
          <Subsecondsection image={first} />
          <Subsecondsection image={second} />
          <Subsecondsection image={third} />
          <Subsecondsection image={fourth} />
          <Subsecondsection image={fifth} />
          <Subsecondsection image={sixth} />
        </div>
      </div>
    </div>
  );
}

export default Secondsection