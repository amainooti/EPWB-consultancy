import React from "react";
import backgroundimage from "../../images/aboutpagebackground.jpeg";
import firstaboutimg from "../../images/aboutpage1.jpeg";

function About() {
  return (
    <div>
      <div
        className="relative w-full h-[70vh] flex"
        style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top ",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.65)",
        }}
      >
        <div className="text-white text-center absolute mt-[20%]">
          <h4 className="text-2xl">
            Welcome to <span style={{ color: "#9747FF" }}>EPBWN</span>
          </h4>
          <h1 className="capitalize font-bold text-5xl">about us</h1>
        </div>
      </div>
      <div className="w-full h-screen  items-center flex flex-col self-center">
        <h1 className="capitalize text-center text-5xl mt-8 font-bold p-2 text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887] mb-10">
          our objectives
        </h1>
        <div className=" h-72 text w-[85%]  self-center  px-24  gap-5 items-center">
          <li className="leading-8">
            Bring together expatriate professional and business spouses and
            promote the development of their careers by sharing knowledge and
            experiences.
          </li>
          <li className="leading-8">
            Provide a platform for developing and promoting educational and
            training programs geared towards advancing the professional and
            personal lives of its members.
          </li>
          <li className="leading-8">
            Provide our members with a forum for promotion of networking and
            collaboration with individuals and organizations that will help meet
            the objectives of the network.
          </li>
          <li className="leading-8">
            Conduct programmes and activities that advance the interest and
            welfare of its members
          </li>
          <li className="leading-8">To facilitate growth and independence.</li>
        </div>
        <img
            src={firstaboutimg}
            alt="firstabout"
            className="object-contain w-5/6"
          />
      </div>
      <div > 
      
      </div>
    </div>
  );
}

export default About;
