import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

export interface CarouselItem {
    id: string;
    image: string; // Der Typ von "image" sollte ein String sein
}

interface SliderProps {
    items: CarouselItem[];
    numberItemsDesktop?: number;
    numberItemsTablet?: number;
    numberItemsMobile?: number;
}

const Slider = ({ items, numberItemsDesktop = 1, numberItemsTablet = 1, numberItemsMobile = 1 }: SliderProps) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: numberItemsDesktop
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: numberItemsTablet
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: numberItemsMobile,
        }
    };

    return (
        <Carousel
            responsive={responsive}
            renderButtonGroupOutside
            className="container relative pb-10"
            arrows={true}
            draggable={true}
            showDots
            removeArrowOnDeviceType={['mobile', 'tablet']}
        >
            {items.slice(0,4).map(item => <div className=" w-full container" key={item.id}><img className=" w-full h-[300px]" src={item.image} alt="" /></div>)} 
        </Carousel>
    );
}

export default Slider;
