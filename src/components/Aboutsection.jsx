import React from 'react';
import firstImage from "../images/firstaboutimage.png";
import secondImage from "../images/secondaboutimage.png";
import thirdImage from "../images/thirdaboutimage.png";


function Aboutsection() {
  return (
      <div className='w-full h-[100%] flex flex-col gap-8'>
          <h1 className='capitalize text-center text-5xl mt-8 font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887] mb-10'> about us</h1>
          <div className='w-[85%]  self-center h-80  px-24 flex gap-5 items-center'>
            <img src={firstImage} alt="first one" className='object-contain w-[316px] h-[216px]'/>
            <img src={secondImage} alt="first one" className='object-contain w-[316px] h-[216px]'/>
            <img src={thirdImage} alt="first one" className='object-contain w-[316px] h-[216px]'/>
          </div>
          <div className='w-[90%] self-center h-80 text-center  px-24 flex gap-5 items-center'>
              <p>The Expat Professional Business Women’s Network (EPBWN) is a diverse group of expatriate professional  business women and men. We enhance the advancement of expatriate spouses through Training, Networking, and the Mentoring and Placement Program. Our networking activities provide opportunities for women to share strengths, talents and experiences. EPBWN was launched on the 20th of April, 2013 in Tunis, Tunisia. Currently, EPBWN has members and chapters in Kenya, Malawi, South Africa, Ethiopia, Nigeria, South Korea, Cote D’Ivoire, Belgium, Philippines, Lesotho, Zimbabwe, Zambia, United Kingdom, United States, and the Netherlands.
              Our team works closely with women’s groups and networks to empower them and strengthen them economically, socially, culturally, politically, and physically, We achieve this through advocacy and developmental activities that build capacity, mentor and place women within reach of life changing opportunities and resources. By creating sustainable and engaging communities, we provide an avenue for support, personal and professional development.

              </p>
          </div>
    </div>
  )
}

export default Aboutsection