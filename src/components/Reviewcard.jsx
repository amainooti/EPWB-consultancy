import React from 'react'
import Circleavater from './Circleavater'
import Reviewrating from './Reviewrating'

function Reviewcard({name, topname, subhead, review}) {
  return (
    <div className='flex relative pt-6 pl-8 shadow-lg w-[384px] h-[299px] bg-white ' style={{ boxShadow: "0px 2px 10px 1px rgba(210, 210, 210, 0.25)", borderRadius: "16px" }}>
      <Circleavater name={name} />
      <Reviewrating topname={topname } subhead={subhead} review={review} />
    </div>
  )
}

export default Reviewcard