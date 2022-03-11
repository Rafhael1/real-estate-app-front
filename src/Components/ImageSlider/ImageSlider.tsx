import React, { useState } from 'react';

import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded
} from '@mui/icons-material';

import { SlidersContainer, Images, SlideArrow } from './Style';

const ImageSlider = ({ images }: any) => {
  const [current, setCurrent] = useState(0);
  const { length } = images;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(images) || images.length <= 0) {
  // 	return null
  // }
  return (
    // @ts-ignore
    <SlidersContainer>
      {/* @ts-ignore */}
      <SlideArrow onClick={prevSlide} float="left" position="absolute">
        <KeyboardArrowLeftRounded fontSize="large" />
      </SlideArrow>
      {images.map((image: { img: string }, index: number) => (
        <div key={index}>{index === current && <Images src={image.img} />}</div>
      ))}
      {/* @ts-ignore */}
      <SlideArrow onClick={nextSlide} float="right" position="relative">
        <KeyboardArrowRightRounded fontSize="large" />
      </SlideArrow>
    </SlidersContainer>
  );
};

export default ImageSlider;
