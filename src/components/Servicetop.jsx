import React from 'react'
import firstService from "../images/firstservice.png"
import secondService from "../images/secondservice.png"
import thirdService from "../images/thirdservice.png"
import Card from './Card'

function Servicetop() {
  return (
      <div className='w-full relative mt-8 h-screen text-center flex flex-col gap-12 '>
          <h1 className='text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887] text-4xl font-bold'>Services</h1>
      <div className='mt-[8rem]  block  lg:flex gap-5 w-[80%] h-[300px] items-center justify-center self-center '>
        <Card img={firstService} text= "gender empowerment" />
        <Card img= {secondService}  text= "training & networking" />
        <Card img= {thirdService} text = "expert community & welfare"  />
            </div>
      </div>
  )
}

export default Servicetop