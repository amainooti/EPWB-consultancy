import React from 'react';
import Logo from "../images/logo.png"

function Navbar() {
  return (
      <>
          <nav className='w-[100%] h-14 bg-black flex justify-between px-6 align-middle' >
              <div className="flex">
                  <img src={ Logo} alt="" />
              </div>
              <ul className='flex gap-4 self-center'>
                  <li><a href="home" className='capitalize  text-white'> home </a></li>
                  <li><a href="abous us" className='capitalize text-white'>About Us</a></li>
                  <li><a href="services" className='capitalize text-white'> Services</a></li>
                  <li><a href="services" className='capitalize text-white'> gallery </a></li>
              </ul>
      </nav>
    </>
  )
}

export default Navbar