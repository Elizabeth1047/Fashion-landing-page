import {React,useState,useEffect} from 'react'
let details = [
  {
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus adipiscing elit Ut elit tellus elit Ut elit tellus ",
    "image": "/images/img1 (9).jpg",
    "name": "lizzy girl",
    "position": "manager",
  },
  {
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus adipiscing elit Ut elit tellus elit Ut elit tellus ",
    "image": "/images/img1 (8).jpg",
    "name": "lizzy girl",
    "position": "manager",
  },
  {
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus adipiscing elit Ut elit tellus elit Ut elit tellus ",
    "image": "/images/img1 (9).jpg",
    "name": "lizzy girl",
    "position": "manager",
  },
  {
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus adipiscing elit Ut elit tellus elit Ut elit tellus ",
    "image": "/images/img1 (9).jpg",
    "name": "lizzy girl",
    "position": "manager",
  },
  {
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus adipiscing elit Ut elit tellus elit Ut elit tellus ",
    "image": "/images/img1 (8).jpg",
    "name": "lizzy girl",
    "position": "manager",
  },
  {
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus adipiscing elit Ut elit tellus elit Ut elit tellus ",
    "image": "/images/img1 (9).jpg",
    "name": "lizzy girl",
    "position": "manager",
  },

];
let counts=0
function Seventhsection() {
    const [currentindexs, setCurrentindexs] = useState(0);

    useEffect(() => {
      setInterval(() => {
        counts = (counts + 1) % details.length;
        setCurrentindexs(counts);
      }, 5000);
    }, []);

  return (
    <div className="bg-red-100 py-16 my-16">
      <div className="w-[90%] m-auto text-center border-x border-r-emerald-50">
        <h6 className="pt-3 text-base">TESTIMONIALS</h6>
        <h1 className="text-4xl my-5">FEEL OUR CUSTOMER HAPPINESS</h1>
        <div className="flex lg:w-[90%] w-[560px] overflow-auto justify-between gap-10 text-center m-auto">
          {details.map((det) => (
            <div className=" bg-red-400 min-w-[580px] p-14 md:min-w-[45%] lg:min-w-[22%] md:p-8">
              <p>{det.text}</p>
              <div className="flex items-center justify-center gap-2 pt-4">
                <div className="w-10 ">
                  <img sizes={10} src={det.image} className="rounded-full" />
                </div>
                <div>
                  <p>{det.name}</p>
                  <p className="text-red-700">{det.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Seventhsection