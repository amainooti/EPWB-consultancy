import React from 'react'
import Aboutsection from "../Aboutsection";
import Topsection from "../Topsection";
import Aboutcenter from "../Aboutcenter";
import Aboutbottom from "../Aboutbottom";
import Aboutending from "../Aboutending";
import Services from "../Services";
import Foundersection from "../Foundersection";
import Footersection from "../Footersection";
import Copyright from "../Copyright";
import Carousel from '../Carousel';
import Gallerysection from '../Gallerysection';

function Home() {
  return (
    <div className="flex flex-col">
    <Topsection />
    <Aboutsection />
    <Aboutcenter />
    <Aboutbottom />
    <Aboutending />
    <Services/>
    <Foundersection />
      <Carousel />
      <Gallerysection />
  </div>
  )
}

export default Home