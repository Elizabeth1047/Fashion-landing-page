import React from 'react'

function Subfourthsection({image,text}) {
  return (
    <div className="my-10 w-[300px] md:w-[350px]  m-auto">
      <div className="w-[100px] m-auto">
        <img src={image} />
      </div>
      <h5 className="m-5 ">{text}</h5>
      <p className="px-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>
  );
}

export default Subfourthsection