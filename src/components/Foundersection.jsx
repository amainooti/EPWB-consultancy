import React from "react";
import founderimage from "../images/founderimage.png";

function foundersection() {
  return (
    <div style={{backgroundImage: "linear-gradient(to right, rgba(116, 2, 135, 0.276),rgba(2, 8, 135, 0.18)"}}>
      <div className="flex m-20 gap-12">
        <div className="flex-1 leading-8">
          <h2>
            Meet our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#020887] to-[#740287]">Founder</span>
          </h2>
          <h5 className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#020887] to-[#740287]">princess nwakego ibrahim-pam director/lead consultant</h5>
          <p>
            She is an Educationist, a Linguist, an Inspirational Speaker, a
            Social Entrepreneur, a Mentor, an Employer, a Trainer and an
            Administrator. She Specializes in Early Childhood Education and
            Parental Involvement and she is known for her remarkable work with
            special needs children and their families. She is the Founder and
            Executive Director of Petra Speech and Early Childhood Developmental
            Centre (PECC) founded October 1997 in Jos Nigeria. It is an
            inclusive educational Centre which has been in existence for past
            three decades for special needs children and their families. She is
            a seasoned expatriate spouse, who has lived in several continents
            and she has visited more than 45 countries and she has visited more
            than 45 countries. She is the Founder and Chairperson of the Expat
            Professional and Business Women’s Network International, founded in
            Tunisia in 2013. She is also the Co-Founder of the Korea Africa
            Economic Association (KOAFEA) founded on the 9TH of April 2019.
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <img src={founderimage} alt="founder-image" />
          <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#020887] to-[#740287]">
            Princess Nwakego Ibrahim-Pam receiving her award from the Korean
            National Sport Ministry
          </p>
        </div>
      </div>
    </div>
  );
}

export default foundersection;
