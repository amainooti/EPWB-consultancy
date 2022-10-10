import React from 'react';
import firstImage from "../images/firstaboutimage.png";
import secondImage from "../images/secondaboutimage.png";
import thirdImage from "../images/thirdaboutimage.png";


function Aboutsection() {
  return (
      <div className='w-full h-[100vh] flex flex-col'>
          <h1 className='capitalize text-center text-5xl mt-8 font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887] mb-10'> about us</h1>
          <div className='w-[85%] self-center h-80  px-32 flex gap-5 items-center'>
            <img src={firstImage} alt="first one" className='object-contain w-[316px] h-[216px]'/>
            <img src={secondImage} alt="first one" className='object-contain w-[316px] h-[216px]'/>
            <img src={thirdImage} alt="first one" className='object-contain w-[316px] h-[216px]'/>
          </div>
    </div>
  )
}

export default Aboutsection