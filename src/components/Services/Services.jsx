import React from "react";
import backgroundimg from "../../images/background.png";
import firstimg from "../../images/servicepage1.png";
import secondimg from "../../images/servicepage2.png";
import thirdimg from "../../images/servicepage3.png";

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
          <h1 className="capitalize font-bold text-5xl">our services</h1>
        </div>
      </div>
      <div className=" my-20 w-5/6 mx-auto flex flex-col">
        <div className="flex flex-col p-10 border-b-2">
          <h1 className="text-5xl font-bold p-2 text-transparent bg-clip-text  bg-gradient-to-r from-[#020887] to-[#740287] mb-10">
            Training and Networking
          </h1>
          <p className="text-lg">
            Our team works closely with women’s groups and networks to empower
            them and strengthen them economically, socially, culturally,
            politically, and physically, We achieve this through advocacy and
            developmental activities that build capacity, mentor and place women
            within reach of life changing opportunities and resources.
          </p>
        </div>
        <div className="flex flex-col p-10 border-b-2">
          <h1 className="text-5xl font-bold p-2 text-transparent bg-clip-text  bg-gradient-to-r from-[#020887] to-[#740287] mb-10">
            Our Women Network
          </h1>
          <p className="text-lg">
            The Expat Professional Business Women’s Network (EPBWN) was launched
            on the 20th of April, 2013 in Tunis, Tunisia. Currently, EPBWN has
            members and chapters in Kenya, Malawi, South Africa, Ethiopia,
            Nigeria, South Korea, Cote D’Ivoire, Belgium, Philippines, Lesotho,
            Zimbabwe, Zambia, United Kingdom, United States, and the
            Netherlands.
          </p>
        </div>
        <div className="flex flex-col p-10 border-b-2">
          <h1 className="text-5xl font-bold p-2 text-transparent bg-clip-text  bg-gradient-to-r from-[#020887] to-[#740287] mb-10">
            Gender Empowerment
          </h1>
          <p className="text-lg pb-10">
            Our team works closely with women’s groups and networks to empower
            them and strengthen them economically, socially, culturally,
            politically, and physically, We achieve this through advocacy and
            developmental activities that build capacity, mentor and place women
            within reach of life changing opportunities and resources.
          </p>
          <div className="flex gap-10 w-full p-2">
            <img src={firstimg} alt="first" />
            <img src={secondimg} alt="second" />
            <img src={thirdimg} alt="third"/>
          </div>
        </div>
        <div className="flex flex-col p-10">
          <h1 className="text-5xl font-bold p-2 text-transparent bg-clip-text bg-gradient-to-r from-[#020887] to-[#740287] mb-10">
            Expatriate Communities and Welfare
          </h1>
          <p className="text-lg">
            EPBWN Consultants host a variety of workshops, trainings courses,
            roundtables and webinars annually in locations around the world. All
            of these events use Innovative, hands-on-methods from brief
            presentations by subject matter experts to small group exercises and
            interactive polls-that actively engage participants in their own
            learning. Such approaches not only increase participants’ knowledge
            and skills, but they also provide the opportunity for participants
            to network with each other while sharing best practices and lessons
            learned.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
