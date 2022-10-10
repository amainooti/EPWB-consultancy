import React from 'react'
import Navbar from './Navbar'
import topSectionImage from "../images/background.png"
import Hero from './Hero'


function Topsection() {
  return (
      <div className='w-full h-[100vh] flex flex-col relative'
          style={{ backgroundImage: `url(${topSectionImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "center top ", backgroundSize: "cover" }}>
          <Navbar />
          <Hero />
    </div>
  )
}

export default Topsection