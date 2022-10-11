import React from 'react'
import logo from "../images/logo.png"

function Navbar() {
// mobile nav functionalities
  const [shownav, setShownav] = React.useState(false);
  const [menu, setMenu] = React.useState(false);

  // hover effects



  return (
    <div className='  flex w-full h-20 z-10 jus fixed top-0 left-0 right-0 backdrop-blur-md	' onMouseOver="">

      <nav className=' flex justify-between px-24 w-full h-auto'>

        <div>
          <img src={logo} alt="logo" className='cursor-pointer' />
        </div>
        <ul className='flex items-center justify-center gap-5 float-right '>
          <li className='list-none cursor-pointer hover:text-[#740287]  duration-500 text-white text-lg'>Home</li>
          <li className='list-none cursor-pointer hover:text-[#740287]  duration-500 text-white text-lg'>About</li>
          <li className='list-none cursor-pointer hover:text-[#740287]  duration-500 text-white text-lg'>Services</li>
          <li className='list-none cursor-pointer hover:text-[#740287]  duration-500 text-white text-lg'>Gallery</li>
          <li className='list-none cursor-pointer hover:text-[#740287]  duration-500 text-white text-lg'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar