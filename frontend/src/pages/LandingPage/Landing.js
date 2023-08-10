import React from 'react'
import Carousel from "./Carousal";
import Statistics from "./Statistics";
import ImageSlider from "./Slider";
import Importance from './Importance';
import Cards from './Cards';
import Steps from './Steps';
import { HStack } from '@chakra-ui/react';
export default function Landing() {
  return (
    <div>
      <Carousel/>
      <hr/>
      <HStack>
      <Cards/>
      <Cards/>
      <Cards/>
      </HStack>
      
      <hr/>
      <Importance/>
      <hr/>
      <Steps/>
      <hr/>
      <ImageSlider/>
      <hr/>      
      <Statistics/>
      <hr/>
    </div>
  )
}
