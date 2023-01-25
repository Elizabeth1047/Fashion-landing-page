import React from 'react'
import Subeightsec from './Subeightsec'
import fir1 from "../img1 (1).png";
import fir2 from "../img1 (2).png";
import fir3 from "../img1 (3).png";
import fir4 from "../img1 (12).png";


function Eightsection({ image, text, text2 }) {
  return (
    <div className="text-center w-[90%] m-auto my-20">
      <h5 className="text-base m-5">OUR EXPERT TEAM</h5>
      <h1 className="text-4xl m-10">PEOPLE BEHIND THE FAYSHANA</h1>
      <div className="md:flex md:w-[90%] lg:w-[100%] md:m-auto justify-center items-center">
        <Subeightsec
          image={fir1}
          text={"Brown Jack"}
          text2={"Senior Designer"}
        />
        <Subeightsec
          image={fir2}
          text={"Anita Cruch"}
          text2={"Junior Designer"}
        />
        <Subeightsec image={fir3} text={"Yuana Viny"} text2={"Lead Designer"} />
        <Subeightsec image={fir4} text={"Ghea Lady"} text2={"Manager"} />
      </div>
      <div className=" mt-10 text-left md:text-center">
        <span className="bg-red-300 px-8 py-4  ">get in touch</span>
      </div>
    </div>
  );
}

export default Eightsection