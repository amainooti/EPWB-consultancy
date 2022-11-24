import React from "react";
import logo from "../images/logo.png"

function Footersection() {
  return (
    <div className="text-white" style={{ backgroundColor: "#020887" }}>
      <div className="flex m-20 gap-14">
        <div className="flex-1">
          <div className="flex items-center">
          <img
            src={logo}
            alt="firstServices"
            className="object-contain"
          />
          <h1 className="text-4xl mb-5 font-semibold"><span className="uppercase" style={{color: "#740287"}}>epbwn </span>Consulting International</h1>
          </div>
          <p className="text-sm font-thin leading-7">
            With the application of our holistic, integrative and research
            focused techniques, we deliver premium services which have been
            tried and tested by our numerous partners across the world leading
            to measurable and pleasant outcomes everytime.
          </p>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex mb-5">
            <div className="flex flex-col flex-1">
              <h1 className="capitalize text-lg font-semibold">company</h1>
              <a href="#" className="text-sm font-thin leading-9">Meet our experts</a>
              <a href="#" className="capitalize text-sm font-thin leading-9">our services</a>
              <a href="#" className="capitalize text-sm font-thin leading-9">our teams</a>
            </div>
            <div className="flex flex-col flex-1">
              <h1 className="capitalize text-lg font-semibold">product</h1>
              <a href="#" className="capitalize text-sm font-thin leading-9">about us</a>
              <a href="#" className="capitalize text-sm font-thin leading-9">gallery</a>
              <a href="#" className="capitalize text-sm font-thin leading-9">consultations</a>
            </div>
            <div className="flex flex-col flex-1">
              <h1 className="capitalize text-lg font-semibold">resources</h1>
              <a href="#" className="capitalize text-sm font-thin leading-9">locations</a>
              <a href="#" className="capitalize text-sm font-thin leading-9">contact</a>
              
            </div>
          </div>
          <div>
            <p>Join the revolution</p>
            <form action="#" method="post" className="flex items-center">
              <label htmlFor="">
                <input type="email" name="email" className="p-2 my-2 rounded-l" placeholder="Email address"/>
              </label>
              <button type="submit" style={{backgroundImage: "linear-gradient(to right, rgba(2, 70, 135, 0.6),rgba(116, 2, 135, 0.92)"}} className="p-2 rounded-r capitalize">sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footersection;
