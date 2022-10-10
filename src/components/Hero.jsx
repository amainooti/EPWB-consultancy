import React from 'react'

function Hero() {
  return (
      <div className='flex flex-col w-[70%] h-[70%] mt-36 lg:py-8 lg:pl-8 self-center gap-5 overflow-y-hidden absolute'>
          <span className='mt-8  text-2xl lg:text-3xl  text-white'> Welcome to EPBWN </span>
          <div className='w-auto lg:pr-32'>
              <h1 className='capitalize lg:text-6xl text-5xl  font-semibold text-white'>Promoting the Dignity of Women</h1>
          </div>
          <h1 className='text-white text-lg capitalize'>Expat professional business woman's network</h1>
          <button className='w-[231px] h-[45px] p-3 items-center justify-center flex text-white bg-gradient-to-r from-[#740287] to-[#020887] rounded-md capitalize'>Contact us</button>
    </div>
  )
}

export default Hero