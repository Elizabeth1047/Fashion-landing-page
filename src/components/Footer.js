import React from "react";
import logos from "../img1 (4).png";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-black  text-white lg:flex">
      <div className="w-[90%] m-auto lg:m-auto md:flex  ">
        <div className="  items-center justify-center text-center py-12 lg:flex lg:justify-between lg:p-6 lg:gap-5 lg:items-start ">
          <div className="md:text-left lg:w-[370px] ">
            <div className="w-full m-auto flex items-center justify-center py-5             md:justify-start md:text-left md:items-start">
              <img src={logos} sizes={30} />
            </div>
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="py-2">
              <em>Suzy Queue 4455 Landing Lange, Louisville, KY 40018-1234</em>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 py-2  ">
              <span>
                <MdOutlineMail />
              </span>
              <span> hi@templatename.com</span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 py-2 ">
              <span>
                <BsTelephone />
              </span>
              <span>+62 873 35973</span>
            </p>
          </div>

          <div className="md:flex md:items-center md:justify-between md:text-left lg:w-[410px] lg:items-start">
            <div className="py-10">
              <h1 className="py-3 text-xl">Company</h1>
              <p className="py-2 text-base text-gray-500">About us</p>
              <p className="py-2 text-base text-gray-500">Blogs</p>
              <p className="py-2 text-base text-gray-500">pricing plan</p>
              <p className="py-2 text-base text-gray-500">our team</p>
              <p className="py-2 text-base text-gray-500">jobs opening</p>
              <p className="py-2 text-base text-gray-500">contact us</p>
            </div>
            <div className="py-10">
              <h1 className="py-3 text-xl">Customer</h1>
              <p className="py-2 text-base text-gray-500">Help center</p>
              <p className="py-2 text-base text-gray-500">knoeledgebade</p>
              <p className="py-2 text-base text-gray-500">Gallary</p>
              <p className="py-2 text-base text-gray-500">Production</p>
            </div>
            <div className="py-10">
              <h1 className="py-3 text-xl">Links</h1>
              <p className="py-2 text-base text-gray-500">News</p>
              <p className="py-2 text-base text-gray-500">testimonial</p>
              <p className="py-2 text-base text-gray-500">porfiolio</p>
              <p className="py-2 text-base text-gray-500">manufacturing</p>
              <p className="py-2 text-base text-gray-500">distribution</p>
              <p className="py-2 text-base text-gray-500">Merchadising</p>
            </div>
          </div>
          <div className="lg:w-[400px]">
            <h2 className="text-lg p-3 lg:text-left">Stay informed</h2>
            <div className="bg-white/10 md:p-2 md:w-[600px] md:pl-8 md:flex md:justify-between md:items-center p-6 pb-2 text-left lg:w-[300px]">
              Email
              <div className="bg-red-200 md:p-3 md:px-14 md:inline-block block p-4 text-center mt-4">
                Subscribe
              </div>
            </div>
            <p className="py-3 text-sm text-left break-word">
              *Subscribe to our newsletter to receive early discount offers,
              updates and new products info.
            </p>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
