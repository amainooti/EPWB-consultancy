import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const Mobilebar = ({toggle}) => {
  const mobileItems = ["home", "about", "service", "gallery", "contact"]
  return (
    <div className='flex  bg-white  w-full h-screen align-top justify-start relative'>
      <AiOutlineClose onClick={toggle} style={{fontSize: "1.3rem", marginLeft: "50px", position: "absolute", right: "12px", top: "20px", zIndex: "200", color: "#740287"}} />
      <ul className='flex duration-300 translate-x-5 flex-col p-12 w-full backdrop-blur-sm z-20 items-center gap-5 float-right'>
        {mobileItems.map(mobileItem => (
          <li className = 'list-none capitalize cursor-pointer hover:text-[#740287]  duration-500 text-black text-lg' > {mobileItem} </li>
        ))}

        </ul>
    </div>
  )
}

export default Mobilebar