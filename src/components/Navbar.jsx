import React from 'react'
import logo from "../images/logo.png"
import Mobilebar from './Mobilebar';
import { HiBars3BottomRight } from "react-icons/hi2"

function Navbar() {
// mobile nav functionalities
  const [menu, setMenu] = React.useState(false);

  // hover effects
  console.log(menu)

  const handleMenu = () => {
    setMenu(pervState => !pervState)
  }

  const [show, handleShow] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 520) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    });
    return () => {
      window.removeEventListener("scroll")
    };
  }, []);

  return (
    <div className= {`flex w-full h-20 z-10 jus fixed top-0 left-0 right-0  ${show && "bg-white duration-500"} backdrop-blur-md`}>

      <nav className='relative flex justify-between px-24 w-full h-auto'>

        <div>
          <img src={logo} alt="logo" className='cursor-pointer' />
        </div>
        <ul className='hidden md:flex items-center justify-center gap-5 float-right '>
          <li className={`list-none cursor-pointer ${show && "text-[#740287] hover:text-black duration-500"} hover:text-[#740287]  duration-500 text-white text-lg`}>Home</li>
          <li className={`list-none cursor-pointer ${show && "text-[#740287] hover:text-black duration-500"} hover:text-[#740287]  duration-500 text-white text-lg`}>About</li>
          <li className={`list-none cursor-pointer ${show && "text-[#740287] hover:text-black duration-500"} hover:text-[#740287]  duration-500 text-white text-lg`}>Services</li>
          <li className={`list-none cursor-pointer ${show && "text-[#740287] hover:text-black duration-500"} hover:text-[#740287]  duration-500 text-white text-lg`}>Gallery</li>
          <li className={`list-none cursor-pointer ${show && "text-[#740287] hover:text-black duration-500"} hover:text-[#740287]  duration-500 text-white text-lg`}>Contact</li>
        </ul>
        {menu ? <Mobilebar toggle={handleMenu}/>:
        <HiBars3BottomRight className='md:hidden lg:hidden' style={{fontSize: "1.9rem", color: "white", marginTop: "1rem"}} onClick= {handleMenu}  />
     } </nav>




    </div>
  )
}

export default Navbar