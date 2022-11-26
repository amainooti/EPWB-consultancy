import React from 'react'
import Reviewcard from './Reviewcard'
import '@splidejs/react-splide/css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Whywomensection from './Whywomensection';
function Carousel() {
  return (
    <>
      <Whywomensection />
    <div className='w-full px-24 gap-10 text-center flex items-center bg-gray-50 h-screen'>

      <Splide options={{
        rewind: true,
        perPage: 3,
        gap: '10rem',
        width: "100%",
        perMove: 1,
        padding: { left: 10 },
        pagination: false,
        drag: true,
        snap: false,
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        breakpoints: {
		  640: {
			destroy: true,
		},
  }
  } }>

        <SplideSlide>
          <Reviewcard
            name="S"
            topname="Sandra omotayo"
            subhead="The support is immense"
            review= "EPBWN has amazing and supportive members. It really transformed my business and connected me to like minds around the world."
            />
        </SplideSlide>

        <SplideSlide>
          <Reviewcard
            name="E"
            topname="Esther Awosika"
            subhead="Best Network out there"
            review = "EPBWN has amazing and supportive members. It really transformed my business and connected me to like minds around the world."
          />

        </SplideSlide>

        <SplideSlide>
          <Reviewcard
            name="A"
            topname="Amarachi Morah"
            subhead="Opened my eyes to a new path..."
            review = "EPBWN has amazing and supportive members. It really transformed my business and connected me to like minds around the world."
            />
        </SplideSlide>
        <SplideSlide>
          <Reviewcard
            name="O"
            topname="Obarakpo emmanual"
            subhead="Truly enlightening"
            review = "EPBWN has amazing and supportive members. It really transformed my business and connected me to like minds around the world."
            />
        </SplideSlide>
        <SplideSlide>
          <Reviewcard
            name="O"
            topname="Ohai Raphael"
            subhead="Motivating and Empowering"
            review = "EPBWN has amazing and supportive members. It really transformed my business and connected me to like minds around the world."
            />
        </SplideSlide>
      </Splide>
      </div>
      </>
  )
}

export default Carousel