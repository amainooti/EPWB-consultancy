import React from 'react'

function Circleavater({name}) {
  return (
    <div className='rounded-full  p-5 grid place-content-center bg-[#E9E0F0] w-12 h-12'>
      <p className='uppercase font-bold'>{ name}</p>
    </div>
  )
}

export default Circleavater