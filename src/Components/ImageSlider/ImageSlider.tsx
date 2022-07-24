import React, { useState, useRef, useEffect } from 'react';
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded
} from '@mui/icons-material';
import { Skeleton } from '@mui/material';
import { SliderContainer, Images, SlideArrow } from './Style';
import ImagePlaceholder from 'Assets/Images/image_placeholder.jpg';

interface ImageSliderProps {
  altText?: string;
  images?: string[];
  arrowPosition?: string;
  imageDimension?: {
    width?: string;
    height?: string;
  };
}

const ImageSlider = ({
  images,
  imageDimension,
  altText,
  arrowPosition = '10px'
}: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);
  // To handle image loading
  const [shouldLoad, setShouldLoad] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (!shouldLoad && placeholderRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setShouldLoad(true);
        }
      });
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [shouldLoad, placeholderRef]);
  //

  const length = images?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const showArrowsCondition = () => {
    if (length > 1) {
      return true;
    }
    return false;
  };

  return (
    <SliderContainer>
      {shouldLoad ? (
        images?.map((image: string, index: number) => (
          <span key={index}>
            {index === current && (
              <Images
                imageDimension={imageDimension}
                src={
                  `${process.env.REACT_APP_IMAGES_URL}/${image}` ||
                  ImagePlaceholder
                }
                loading="lazy"
                alt={altText || 'image'}
              />
            )}
          </span>
        ))
      ) : (
        <Skeleton
          ref={placeholderRef}
          sx={{ margin: '0 auto' }}
          height={imageDimension?.height || '200px'}
          width="90%"
        />
      )}
      {showArrowsCondition() ? (
        <>
          <SlideArrow
            onClick={prevSlide}
            float="left"
            // arrowPosition={arrowPosition}
          >
            <KeyboardArrowLeftRounded fontSize="large" />
          </SlideArrow>
          <SlideArrow
            onClick={nextSlide}
            float="right"
            // arrowPosition={arrowPosition}
          >
            <KeyboardArrowRightRounded fontSize="large" />
          </SlideArrow>
        </>
      ) : null}
    </SliderContainer>
  );
};

export default ImageSlider;
