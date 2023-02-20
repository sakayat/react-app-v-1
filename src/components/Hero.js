import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="text-center flex flex-col gap-5 max-w-3xl mx-auto">
      <h2 className="section-title text-7xl text-teal-600">Sakhyat Kabir</h2>
      <h3 className="sub-title text-2xl">Developer and designer</h3>
      <p className="text-xl text-gray-600 leading-2">
        I specialize in providing programming and design services to meet your
        content needs. If you're looking for high-quality work and a fast
        turnaround, you've come to the right place. Let's get started and create
        some great content together!
      </p>
      <div className="social-links text-5xl flex justify-center gap-16">
        <Link to="/">
          <BsTwitter />
        </Link>
        <Link to="/">
          <FaLinkedinIn />
        </Link>
        <Link to="/">
          <AiFillYoutube />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
