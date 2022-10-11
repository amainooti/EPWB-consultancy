import React from 'react'
import valuesImage from "../images/valuesimage.png"

function Aboutending() {
  return (
      <div className=' relative mt-20 w-full h-screen gap-7 items-center justify-center flex flex-col justify-center self-center' style={{ backgroundImage: `url(${valuesImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "center top ", backgroundSize: "cover" }}>
          <div className='absolute top-32 w-[80%] h-72'>
              <h1 className='capitalize text-center text-white text-6xl font-bold'>Core values</h1>
              <div className='flex gap-9 mt-5 items-center'>
                  <div className='flex-1'>
                      <li className='text-white capitalize leading-10 text-3xl mt-8 marker:text-[#E40000]'>Consistency</li>
                      <li className='text-white capitalize leading-10 text-3xl mt-8 marker:text-[#E40000]'>Social justice</li>
                      <li className='text-white capitalize leading-10 text-3xl mt-8 marker:text-[#E40000]'>Dynamism</li>
                  </div>
                  <div className='flex-initial'>
                      <li className='text-white capitalize leading-10 text-3xl mt-8 marker:text-[#E40000]'>Commitment</li>
                      <li className='text-white capitalize leading-10 text-3xl mt-8 marker:text-[#E40000]'>Diversity</li>
                      <li className='text-white capitalize leading-10 text-3xl mt-8 marker:text-[#E40000]'>Equality</li>
                  </div>
              </div>
              <button className='self-center align-middle justify-center mt-12 flex m-auto w-[231px] h-[54px] p-3  text-xl font-semibold  text-white bg-gradient-to-r from-[#740287] to-[#020887] rounded-md capitalize'>Contact us</button>
          </div>
    </div>
  )
}

export default Aboutending