import React from 'react'
import stars from "../images/Group 2 (1).png"

function Reviewrating({topname, subhead, review}) {
  return (
      <div className='flex-col flex items-center min-w-min'>
          <div>
              <p className='font-bold capitalize'>{ topname}</p>
              <img src={stars} alt="star" className='w-24 text-center' />
          </div>
          <h3 className='font-semibold mb-5'>{ subhead}</h3>
          <p className='px-2'> {review}
          </p>
      </div>
  )
}

export default Reviewrating