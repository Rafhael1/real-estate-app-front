import React, { useState } from 'react'

import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material'

import {
  SlidersContainer,
  Images,
  SlideArrow
} from './style'

const ImageSlider = (
  { images },
) => {
  const [current, setCurrent] = useState(0)
  const length = images.length
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  
  // if (!Array.isArray(images) || images.length <= 0) {
  // 	return null
  // }
  return(
    <SlidersContainer>
      <SlideArrow
        onClick={prevSlide}
        float="left"
        position="absolute"
      >
        <KeyboardArrowLeftRounded fontSize="large" />
      </SlideArrow>
      {
        images.map((image: {img: string}, index: number) => (
          <div key={index}>
            {
              index === current && (
                <Images src={image.img} />
              )
            }
          </div>
        ))
      }
      <SlideArrow 
        onClick={nextSlide}
        float="right"
        position="relative"
      >
        <KeyboardArrowRightRounded fontSize="large" />
      </SlideArrow>
    </SlidersContainer>
  )
}

export default ImageSlider