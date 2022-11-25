import React from 'react'


const date = new Date()
const currentYear = date.getFullYear()

function Copyright() {
  return (
    <div style={{ backgroundColor: "#020887" }} className="h-full">
        <p className='text-sm font-thin text-white text-center p-7'>Copyright {currentYear} EPBWN Consultants International - All Rights Reserved. </p>
    </div>
  )
}

export default Copyright