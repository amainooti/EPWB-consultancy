import React from "react";
import backgroundimage from "../../images/aboutpagebackground.jpeg";
import firstaboutimg from "../../images/aboutpage1.jpeg";
import aboutimg2 from "../../images/aboutpage2.png";
import aboutimg3 from "../../images/aboutpage3.png";

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
      <div className="w-full my-10 items-center flex flex-col self-center">
        <h1 className="capitalize text-center text-5xl mt-8 font-bold p-2 text-transparent bg-clip-text  bg-gradient-to-r from-[#020887] to-[#740287] mb-10">
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
      </div>
      <div className="w-5/6 mx-auto border-b border-black">
        <img
          src={firstaboutimg}
          alt="firstabout"
          className="object-contain p-10"
        />
      </div>
      <div className="flex flex-col w-5/6 mx-auto">
        <div className="flex border-b border-black p-10 gap-5">
          <div className="flex-1 flex flex-col">
            <h1 className="capitalize text-5xl mt-8 font-bold p-2 text-transparent bg-clip-text  bg-gradient-to-r from-[#020887] to-[#740287] mb-10">
              why us?
            </h1>
            <p className="text-lg">
              We are tried and tested. Our methods are holistic, integrative,
              and research focused. We use cutting-edge techniques that result
              in measurable outcomes.
            </p>
          </div>
          <div className="flex-1">
            <img src={aboutimg2} alt="secondimg" />
          </div>
        </div>
        <div className="flex border-b border-black p-10 gap-5">
          <div className="flex-1">
            <img src={aboutimg3} alt="secondimg" />
          </div>
          <div className="flex-1 flex flex-col text-right">
            <h1 className="capitalize text-5xl mt-8 font-bold p-2 text-transparent bg-clip-text  bg-gradient-to-r from-[#020887] to-[#740287] mb-10">
              our experience
            </h1>
            <p className="text-lg">
              Expat Professional and Business Women’s Consultants International
              has provided stellar gender development services to organizations
              around the globe over the past decade.
            </p>
          </div>
        </div>
      </div>
      <div className="w-5/6 p-10 mx-auto">
        <h1 className="text-center text-5xl mt-8 p-2 font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#740287] to-[#020887] mb-10">
          Partnership and Collaboration
        </h1>
        <p className="text-center text-md">
          Expat Professional and Business Women’s Consultants International has
          provided stellar gender development services to organizations around
          the globe over the past decade.
        </p>
      </div>
    </div>
  );
}

export default About;
