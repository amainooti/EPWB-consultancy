import React from "react";
import first from "../images/firstservice.png"
import second from "../images/image 8.png"
import sixth from "../images/secondservice.png"
import fifth from "../images/image 14.png"
import third from "../images/thirdservice.png"
import fourth from "../images/thirdaboutimage.png"

function Gallerysection() {
  return (
    <div className="m-20">
      <h1 className="capitalize text-center text-5xl mt-8 p-2 font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887] mb-10">
        gallery
      </h1>
      <p className="text-center">
        EPBWN have been involved in diverse activities with different
        multicultural organizations globally. Partnerships and collaborations
        are an essential part of our operations as they open the doors for
        greater success and impact.
      </p>

      <div className="flex gap-8 my-10">
        <div className="flex-1 flex flex-col gap-5">
        <img
            src={first}
            alt="firstServices"
            className="object-contain h-[33%]"
          />
          <img
            src={second}
            alt="firstServices"
            className="object-contain  h-[43%]"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-2 flex">
            <div className="flex-1 flex flex-col">
            <img
            src={third}
            alt="firstServices"
            className="object-contain"
          />
          <img
            src={fourth}
            alt="firstServices"
            className="object-contain"
          />
            </div>
            <div className="flex-1">
            <img
            src={fifth}
            alt="firstServices"
            className="object-contain"
          />
            </div>
          </div>
          <div className="flex-1">
          <img
            src={sixth}
            alt="firstServices"
            className="object-contain"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallerysection;
