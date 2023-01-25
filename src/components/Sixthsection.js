import React, { useState } from 'react'
import vanilla from "../vanilla.module.css"; 
import sixth from "../img1 (10).jpg";

function Sixthsection() {
  const [arrow, setArrow]=useState(false)
  const [items, setItems] = useState(false);
  const [arrow1, setArrow1] = useState(false);
  const [items1, setItems1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [items2, setItems2] = useState(false);
  const [arrow3, setArrow3] = useState(false);
  const [items3, setItems3] = useState(false);
  const [arrow4, setArrow4] = useState(false);
  const [items4, setItems4] = useState(false);
  const [arrow5, setArrow5] = useState(false);
  const [items5, setItems5] = useState(false);
 const handlearrow=()=>{
  setArrow(!arrow)
  setItems(!items)
 }
 const handlearrow1 = () => {
   setArrow1(!arrow1);
   setItems1(!items1);
 };
 const handlearrow3 = () => {
   setArrow2(!arrow2);
   setItems2(!items2);
 };
 const handlearrow4 = () => {
   setArrow3(!arrow3);
   setItems3(!items3);
 };
 const handlearrow5 = () => {
   setArrow4(!arrow4);
   setItems4(!items4);
 };
 const handlearrow6 = () => {
   setArrow5(!arrow5);
   setItems5(!items5);
 };
  return (
    <div className="p-10 md:flex justify-between gap-10 md:items-start ">
      <div>
        <h6 className="text-base tracking-widest py-4">
          OUR APPROACH AND PROCESS
        </h6>
        <h1 className="text-4xl py-8 lg:break-words line-clamp-5">
          START A CLOTHING BRAND OR <br /> LAUNCHING A PRODUCT
        </h1>
        <div className={vanilla.bg3}>
          <div className=" md:w-[300px]  w-[250px] relative top-[250px] left-[300px] lg:top-[300px] lg:left-[460px] md:top-[300px] md:left-[140px] md:z-5 z-2 ">
            <img src={sixth} />
          </div>
        </div>
      </div>
      <div className="md:w-[600px]">
        <div
          className={`border-red-200 border-b h-7 overflow-hidden my-10  ${
            items ? "h-[110px]" : "h-7"
          }`}
        >
          <div className="flex items-center justify-between ">
            <h4 className="text-lg ">Fill up the Form</h4>
            <div onClick={handlearrow}>
              <ion-icon
                name={arrow ? "arrow-dropup" : "arrow-dropdown"}
              ></ion-icon>
            </div>
          </div>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div
          className={`border-red-200 border-b h-7 overflow-hidden my-10 ${
            items1 ? "h-[110px]" : "h-7"
          }`}
        >
          <div className="flex items-center justify-between ">
            <h4>Get A Quote</h4>
            <div onClick={handlearrow1}>
              <ion-icon
                name={arrow1 ? "arrow-dropup" : "arrow-dropdown"}
              ></ion-icon>
            </div>
          </div>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div
          className={`border-red-200 border-b h-7 overflow-hidden my-10 ${
            items2 ? "h-[110px]" : "h-7"
          }`}
        >
          <div className="flex items-center justify-between ">
            <h4>Discuss Your Idea</h4>
            <div onClick={handlearrow3}>
              <ion-icon
                name={arrow2 ? "arrow-dropup" : "arrow-dropdown"}
              ></ion-icon>
            </div>
          </div>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div
          className={`border-red-200 border-b h-7 overflow-hidden my-10 ${
            items3 ? "h-[110px]" : "h-7"
          }`}
        >
          <div className="flex items-center justify-between ">
            <h4>Recieve A proposal</h4>
            <div onClick={handlearrow4}>
              <ion-icon
                name={arrow3 ? "arrow-dropup" : "arrow-dropdown"}
              ></ion-icon>
            </div>
          </div>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div
          className={`border-red-200 border-b h-7 overflow-hidden my-10 ${
            items4 ? "h-[110px]" : "h-7"
          }`}
        >
          <div className="flex items-center justify-between ">
            <h4>Communicate</h4>
            <div onClick={handlearrow5}>
              <ion-icon
                name={arrow4 ? "arrow-dropup" : "arrow-dropdown"}
              ></ion-icon>
            </div>
          </div>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div
          className={`border-red-200 border-b h-7 overflow-hidden my-10 ${
            items5 ? "h-[110px]" : "h-7"
          }`}
        >
          <div className="flex items-center justify-between ">
            <h4>Receive the Result</h4>
            <div onClick={handlearrow6}>
              <ion-icon
                name={arrow5 ? "arrow-dropup" : "arrow-dropdown"}
              ></ion-icon>
            </div>
          </div>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className=" mt-10 md:text-right">
          <span className="bg-red-300 px-8 py-4  text-white">get in touch</span>
        </div>
      </div>
    </div>
  );
}

export default Sixthsection