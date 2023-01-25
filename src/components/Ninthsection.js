import React from "react";
import firt from "../img1 (1).jpg";
import sect from "../img1 (2).jpg";
import threet from "../img1 (3).jpg";
import fourt from "../img1 (4).jpg";
import fivet from "../img1 (5).jpg";
import sixt from "../img1 (10).jpg";
import { BsDot } from "react-icons/bs";

function Ninthsection() {
  return (
    <div className="text-center w-[90%] m-auto my-24">
      <div>
        <h5 className="text-base m-5">INSIGNTING ARTICLES</h5>
        <h1 className="text-4xl m-5">LASTEST BLOG YOU SHOULD READ</h1>
      </div>
      <div className=" mt-10  md:text-lefttext-center">
        <span className="bg-red-300 px-8 py-4  ">Read all Blog</span>
      </div>
      <div className="md:flex  w-90 md:w-50 md:m-auto md:flex-wrap md:justify-center gap-2">
        <div className="md:w-[30%]">
          <div className="mt-10">
            <img src={firt} />
          </div>
          <div className="text-left">
            <h5 className="text-xl pt-5">Fashion designer Blue</h5>
            <p className="text-red-300 text-lg">
              JANUARY 16,2022
              <span className="inline-block">
                <BsDot />
              </span>
              NO COMMENTS
            </p>
          </div>
        </div>

        <div className="md:w-[25%]">
          <div className="mt-10">
            <img src={sect} />
          </div>
          <div className="text-left">
            <h5 className="text-xl pt-5">Fashion designer Blue</h5>
            <p className="text-red-300 text-lg">
              JANUARY 16,2022
              <span className="inline-block">
                <BsDot />
              </span>
              NO COMMENTS
            </p>
          </div>
        </div>

        <div className="md:w-[35%]">
          <div className="mt-10 ">
            <img src={threet} className="" />
          </div>
          <div className="text-left">
            <h5 className="text-xl pt-5">Fashion designer Blue</h5>
            <p className="text-red-300 text-lg">
              JANUARY 16,2022
              <span className="inline-block">
                <BsDot />
              </span>
              NO COMMENTS
            </p>
          </div>
        </div>

        <div className="md:w-[30%]">
          <div className="mt-10">
            <img src={fourt} />
          </div>
          <div className="text-left">
            <h5 className="text-xl pt-5">Fashion designer Blue</h5>
            <p className="text-red-300 text-lg">
              JANUARY 16,2022
              <span className="inline-block">
                <BsDot />
              </span>
              NO COMMENTS
            </p>
          </div>
        </div>

        <div className="md:w-[25%]">
          <div className="mt-10">
            <img src={fivet} />
          </div>
          <div className="text-left">
            <h5 className="text-xl pt-5">Fashion designer Blue</h5>
            <p className="text-red-300 text-lg">
              JANUARY 16,2022
              <span className="inline-block">
                <BsDot />
              </span>
              NO COMMENTS
            </p>
          </div>
        </div>

        <div className="md:w-[35%]">
          <div className="mt-10">
            <img src={sixt} />
          </div>
          <div className="text-left">
            <h5 className="text-xl pt-5">Fashion designer Blue</h5>
            <p className="text-red-300 text-lg">
              JANUARY 16,2022
              <span className="inline-block">
                <BsDot />
              </span>
              NO COMMENTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ninthsection;
