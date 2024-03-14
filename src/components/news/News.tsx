import { useState } from "react";
import Carousel from "react-multi-carousel";

const items = [
    {
        id: "1",
        image: "b2.jpg",
        desc: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."

    },
    {
        id: "2",
        image: "b3.jpg",
        desc: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."
    },
    {
        id: "3",
        image: "b4.jpg",
        desc: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."
    },
    {
        id: "4",
        image: "/b1.jpg",
        desc: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."
    },
    {
        id: "5",
        image: "b4.jpg",
        desc: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."

    },
    {
        id: "6",
        image: "b3.jpg",
        desc: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."
    },
    {
        id: "7",
        image: "b4.jpg",
        desc: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."
    }
    
]


const News = () => {
    const [_, setActiveIndex] = useState(0);
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  
  return (
    <div className="py-16 px-3 font-FONT_VIGA ">
      <div>
        <p className="text-center text-3xl ">TOP NEWS</p>
        <p className="text-center pt-5 py-8">
          Crypto Pulse: Breaking News and Updates from the Cryptocurrency World
        </p>
      </div>
      <Carousel
           responsive={responsive}
           renderButtonGroupOutside
           className=" flex items-center justify-between w-full"
           arrows={true}
           draggable={true}
           additionalTransfrom={0}
           beforeChange={(nextSlide) => setActiveIndex(nextSlide)}
      >
        {items.map((item) => (
          <div className="pr-1 last:mr-0" key={item.id}>
            <div className="coin-slider-theme p-4 flex flex-col rounded-lg w-full gap-2">
              <div className=" flex flex-col items-center  gap-3">
                <img className=" w-full rounded-lg h-48 " src={item.image} alt="" />
                <p>{item.desc.slice(0,70 )}...</p>
              </div>
            </div>
          </div>
        ))}

      </Carousel>
    </div>
  );
};

export default News;
