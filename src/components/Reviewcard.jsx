import React from 'react'
import Circleavater from './Circleavater'

function Reviewcard({name}) {
  return (
    <div className='flex shadow-lg w-[384px] h-[299px] bg-white ' style={{ boxShadow: "0px 2px 10px 1px rgba(210, 210, 210, 0.25)", borderRadius: "16px" }}>
      <Circleavater name={name} />
    </div>
  )
}

export default Reviewcard