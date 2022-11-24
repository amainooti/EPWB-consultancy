import React from 'react'

function Card({img, text}) {
  return (
      <div className='flex  flex-col w-[310px] h-[310px] shadow-md rounded-lg'>
          <div className='self-start w-full'>
              <img src={img} alt="serviceImage" className='w-full h-auto' />
          </div>
          <p className='mt-6 font-bold text-lg capitalize text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887]'>{ text}</p>
    </div>
  )
}

export default Card