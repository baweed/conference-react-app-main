import Slide from './Slide';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { MouseEventHandler } from 'react';
//
// type ArrowProps = {
//   onChangeSlide: MouseEventHandler;
//   isShown: boolean;
// }
//
// const PrevArrow = ({onChangeSlide, isShown}: ArrowProps) => {
//   return (
//     <span className="arrow"></span>
//   )
// }

const TourSlider = () => {
  return (
    <div className={'bg-green-700 container mx-auto xs:m-w-[300px] pb-1'}>
      <Carousel thumbWidth={300} infiniteLoop={true} showIndicators={false}>
        {Array.from({length: 41}).map((_, i) => {
          return (
            <Slide key={i} src={`/tour/${i + 1}.webp`}/>
          )
        })}
      </Carousel>

    </div>
);
};

export default TourSlider;