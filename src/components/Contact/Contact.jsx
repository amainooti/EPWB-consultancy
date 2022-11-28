import React from "react";
import { Icon } from "@iconify/react";
import { FiCheck } from "react-icons/fi";

import backgroundimg from "../../images/background.png";

function Contact() {
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
          <h1 className="capitalize font-bold text-5xl">contact us</h1>
        </div>
      </div>
      <div className="w-5/6 mx-auto my-10">
        <h1
          className="text-3xl text-center my-10"
          style={{ color: "#02088799" }}
        >
          We would love to hear from you.
        </h1>
        <div className="flex">
          <div className="flex-1 flex flex-col gap-5 items-center">
            <div className="flex gap-2 items-center" style={{ color: "" }}>
              <div className="rounded-full border-4">
              <svg width="0" height="0">
                  <linearGradient
                    id="blue-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop stopColor="#02088799" offset="0%" />
                    <stop stopColor="#740287D9" offset="100%" />
                  </linearGradient>
                </svg>
                <Icon
                  icon="carbon:location"
                  className="text-4xl m-4"
                  style={{ stroke: "url(#blue-gradient)" }}
                />
              </div>
              <p className="text-2xl capitalize text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#020887] to-[#740287]">
                location
              </p>
            </div>
            <p className="text-lg text-center">Nigeria</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="flex gap-2 items-center">
              <div className="rounded-full border-4">
                <Icon
                  icon="ic:outline-mail-outline"
                  className="text-4xl m-4"
                  style={{ stroke: "url(#blue-gradient)" }}
                />
              </div>
              <p className="text-2xl capitalize text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#020887] to-[#740287]">
                location
              </p>
            </div>
            <p className="text-lg text-center">Nigeria</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="flex gap-2 items-center">
            <div className="rounded-full border-4">
              <Icon
                icon="ic:outline-mail-outline"
                className="text-4xl m-4"
                style={{ stroke: "url(#blue-gradient)" }}
              />
              </div>
              <p className="text-2xl capitalize text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#020887] to-[#740287]">
                location
              </p>
            </div>
            <p className="text-lg text-center">Nigeria</p>
          </div>
        </div>
        <div className="my-20">
        <form action="#" method="post" className="flex flex-col gap-5 w-3/6 mx-auto">
              <label htmlFor="" className="">
                <input type="text" name="name" className="p-5 text-black border-2 focus:outline-none my-2 rounded w-full" placeholder="Your Name"/>
              </label>
              <label htmlFor="" className="">
                <input type="email" name="email" className="p-5 text-black border-2 focus:outline-none my-2 rounded w-full" placeholder="Your Email"/>
              </label>
              <label htmlFor="" className="">
                <textarea name="message" rows={4} className="p-5 text-black border-2 my-2 rounded w-full focus:outline-none " placeholder="Message"/>
              </label> 
              <button type="submit" style={{backgroundImage: "linear-gradient(to right, rgba(2, 70, 135, 0.6),rgba(116, 2, 135, 0.92)"}} className="p-2 rounded text-white capitalize w-1/6 mx-auto">send</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
