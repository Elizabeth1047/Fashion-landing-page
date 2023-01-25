import React from 'react'

function Subeightsec({image,text,text2}) {
  return (
    <div className=" md:w-[180px] lg:w-[300px] ">
      <div className="w-full   bg-red-200">
        <img src={image} />
      </div>
      <div className="bg-black text-white  ">
        <h5 className="text-2xl">{text}</h5>
        <p className="text-red-100 text-sm">{text2}</p>
      </div>
    </div>
  );
}

export default Subeightsec