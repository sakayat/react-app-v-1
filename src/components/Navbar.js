import React from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="navbar py-8">
      <nav className="container mx-auto text-xl flex justify-between">
        <Link to="/" className="navbar-brand">
          Deveoper Bytes
        </Link>
        <ul className="nav-links flex items-center gap-10">
        <li><BsFillMoonStarsFill className="cursor-pointer"/></li>
          <li>
            <Link to="/" className="py-3 px-8 bg-gradient-to-r from-slate-600 to-green-300 text-white rounded-sm">Resume</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
