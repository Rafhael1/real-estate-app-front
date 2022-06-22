import React, { useState } from 'react';

import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded
} from '@mui/icons-material';

import { SliderContainer, Images, SlideArrow } from './Style';

interface ImageSliderProps {
  images?: string[];
  imageDimension?: {
    width?: string;
    height?: string;
  };
}

const ImageSlider = ({ images, imageDimension }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);
  const length = images?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <SliderContainer>
      {images?.map((image: string, index: number) => (
        <div key={index}>
          {index === current && (
            <Images imageDimension={imageDimension} src={image} />
          )}
        </div>
      ))}
      <SlideArrow onClick={prevSlide} float="left" top="-150px">
        <KeyboardArrowLeftRounded fontSize="large" />
      </SlideArrow>
      <SlideArrow onClick={nextSlide} float="right" top="-150px">
        <KeyboardArrowRightRounded fontSize="large" />
      </SlideArrow>
    </SliderContainer>
  );
};

export default ImageSlider;
