import MainProfile from "./components/profile/MainProfile";
import Slider, { CarouselItem } from "./components/slider/MainSlider";

const App = () => {
  const items: CarouselItem[] = [
    {
      id: "1",
      image: "/bild1.jpg",
    },
    {
      id: "2",
      image: "/bild2.jpg",
    },
    {
      id: "3",
      image: "/bild2.jpg",
    },
    {
      id: "4",
      image: "/bild2.jpg",
    },
    {
      id: "5",
      image: "/bild2.jpg",
    },
  ];

  return (

   <div>
     <div>
      <MainProfile/>
    </div>
     <div className=" container px-5">
      <Slider items={items} />
    <div className="text-3xl bg-red-400">
      Khalil
      

    </div>
   
   </div>
  );
};

export default App;
