import React from 'react'
import backgroundimg from "../../images/background.png"

function Services() {
  return (
    <div>
         <div
        className="relative w-full h-[70vh] flex"
        style={{
          backgroundImage: `url(${backgroundimg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top ",
          backgroundSize: "cover",
        }}
      >
        <div className="text-white text-center absolute mt-[20%]">
          <h4 className="text-2xl">
            Welcome to <span style={{ color: "#9747FF" }}>EPBWN</span>
          </h4>
          <h1 className="capitalize font-bold text-5xl">about us</h1>
        </div>
      </div>
    </div>
  )
}

export default Services