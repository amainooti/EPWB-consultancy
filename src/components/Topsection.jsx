import React from 'react'
import topSectionImage from "../images/background.png"
import Hero from './Hero'


function Topsection() {
  return (
      <div className='w-full h-[100vh] flex flex-col relative'
          style={{ backgroundImage: `url(${topSectionImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "center top ", backgroundSize: "cover" }}>
          <Hero />
    </div>
  )
}

export default Topsection