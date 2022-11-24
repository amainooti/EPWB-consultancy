import React from 'react'
import aboutBackground from "../images/aboutbackground.png"

function Aboutbottom() {
  return (
      <div className='w-full h-screen gap-7  items-center flex flex-col self-center'>
          <img src={aboutBackground} alt="" className='w-[800px] h-[193px]' />
          <div className='w-[80%] mt-10 text-center'>
              <p className='text-lg'>Expat Professional and Business Women’s Consultants International has provided stellar gender development services to organizations around the globe over the past decade.</p>
          </div>
          <div className='p-5 w-full h-screen justify-center items-center gap-32 flex self-center'>
              <div className='w-72 h-52'>
                  <h1 className='text-center font-bold text-2xl capitalize text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887]'> our vision</h1>
                  <p className='text-center'>To empower women and men, achieve success, build confidence, enhance effectiveness by providing a supportive and nurturing environment, leadership opportunities and mentoring them in their various countries as accompanying spouses.</p>
              </div>
              <div className='w-72 h-52'>
                  <h1 className=' font-bold text-center text-2xl capitalize text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887]'> our mission</h1>
                  <p className='text-center'>EPBWN Consultants is a diverse group of expatriate professionals. We enhance the advancement of expatriate spouses through Training, Networking, and the Mentoring and Placement Program. Our networking activities provide opportunities for women to share strengths, talents and experiences.</p>
              </div>
          </div>
    </div>
  )
}

export default Aboutbottom