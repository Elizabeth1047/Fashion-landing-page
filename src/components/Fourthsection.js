import React from 'react'
import Subfourthsection from './Subfourthsection';
import one from "../illustrations (1).png";
import two from "../illustrations (2).png";
import three from "../illustrations (3).png";
import four from "../illustrations (4).png";
import five from "../illustrations (5).png";
import six from "../illustrations (6).png";

function Fourthsection({image, text}) {
  return (
    <div className="text-center">
      <h6 className="tracking-widest p-5">OUR SERVICES</h6>
      <h1 className="text-5xl p-8">Fashion From Concept To Consumer</h1>
      <p className="pb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className='md:flex md:flex-wrap md:justify-between'>
        <Subfourthsection image={one} text={"fashion desigh"} />
        <Subfourthsection image={two} text={"fashion desigh"} />
        <Subfourthsection image={three} text={"fashion desigh"} />
        <Subfourthsection image={four} text={"fashion desigh"} />
        <Subfourthsection image={five} text={"fashion desigh"} />
        <Subfourthsection image={six} text={"fashion desigh"} />
      </div>
    </div>
  );
}

export default Fourthsection