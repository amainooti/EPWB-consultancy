import React from 'react';


function Aboutcenter() {
  return (
      <div className='w-full h-screen  items-center flex flex-col self-center' >
          <h1 className='capitalize text-center text-5xl mt-8 font-bold p-2 text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887] mb-10'>our objectives</h1>
          <div className=' h-72 text w-[85%]  self-center  px-24  gap-5 items-center'>
              <li className='leading-8'>Bring together expatriate professional and business spouses and promote the development of their careers by sharing knowledge and experiences.</li>
              <li className='leading-8'>Provide a platform for developing and promoting educational and training programs geared towards advancing the professional and personal lives of its members.</li>
              <li className='leading-8'>Provide our members with a forum for promotion of networking and collaboration with individuals and organizations that will help meet the objectives of the network.</li>
              <li className='leading-8'>Conduct programmes and activities that advance the interest and welfare of its members</li>
              <li className='leading-8'>To facilitate growth and independence.</li>
          </div>
          <button className='w-[201px] h-[49px] p-3 items-center justify-center flex text-white bg-[#020887] rounded-md text-lg'>learn more</button>

    </div>
  )
}

export default Aboutcenter