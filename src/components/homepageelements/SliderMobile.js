import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import SliderImg1 from "../../assets/sliderImage/mobile1.jpg"
import SliderImg2 from "../../assets/sliderImage/mobile2.jpg"
import SliderImg3 from "../../assets/sliderImage/mobile3.jpg"
import SliderImg4 from "../../assets/sliderImage/mobile4.jpg"
import SliderImg5 from "../../assets/sliderImage/mobile5.jpg"


const items = [
  {
    src: SliderImg1,
    altText: '',
    caption: ''
  },
  {
    src: SliderImg2,
    altText: '',
    caption: ''
  },
  {
    src: SliderImg3,
    altText: '',
    caption: ''
  }
  ,
  {
    src: SliderImg4,
    altText: '',
    caption: ''
  }
  ,
  {
    src: SliderImg5,
    altText: '',
    caption: ''
  }
];

const SliderMobile = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="slider-mobile"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default SliderMobile;