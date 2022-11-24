import React from "react";
import firstImage from "../images/firstServices.png";
import secondImage from "../images/secondServices.png";
import thirdImage from "../images/thirdServices.png";
import backImage from "../images/back-2.jpeg";

function Services() {
  return (
    <div>
      <h1 className="capitalize text-center text-5xl p-2 mt-8 font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887] mb-10">
        services
      </h1>
      <div className="w-[85%] self-center h-80 flex gap-10 px-auto mx-auto items-center">
        <div className="shadow-xl rounded-3xl flex-1">
          <img
            src={firstImage}
            alt="firstServices"
            className="object-contain"
          />
          <p className="capitalize text-center text-sm mt-8 font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887] mb-10">
            gender empowerment
          </p>
        </div>
        <div className="shadow-xl rounded-3xl flex-1">
          <img
            src={secondImage}
            alt="secondServices"
            className="object-contain"
          />
          <p className="capitalize text-center text-sm mt-8 font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887] mb-10">
            training & networking
          </p>
        </div>
        <div className="shadow-xl rounded-3xl flex-1 ">
          <img
            src={thirdImage}
            alt="thirdServices"
            className="object-contain"
          />
          <p className="capitalize text-center text-sm mt-8 font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887] mb-10">
            expat community & welfare
          </p>
        </div>
      </div>
      <div
        className=" h-[307px] w-[85%] mx-auto my-10 rounded-3xl"
        style={{
          backgroundImage: `url(${backImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          boxShadow:"inset 0 0 0 2000px rgba(116, 2, 135, 0.9)"
        }}
      >
        <div className="p-20 relative">
        <h3 className="text-white text-2xl font-bold pb-10">
          "Creating a home away from home for many expatriates who have
          relocated is a major element of the work that we do"
        </h3>
        <button className='w-[201px] h-[49px] p-3 capitalize text-white bg-[#020887] rounded-md text-xl absolute right-20'>get in touch</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
