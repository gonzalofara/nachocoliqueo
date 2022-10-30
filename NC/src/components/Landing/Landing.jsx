import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="bg-black">
      <div className="grid mx-auto">
        <h1 className="text-gray-50 font-body font-monsieur text-6xl sm:text-8xl text-[#c5b358] ">
          Nacho Coliqueo
        </h1>
        <div className="flex justify-center gap-1 justify-items-center mt-2">
          <Link to="/tattoos">
            <p className="text-gray-700 hover:text-gray-400 mt-px">TATUAJES</p>
          </Link>
          <p className="text-[#c5b358]">|</p>

          <Link to="/paintings">
            <p className="text-gray-700 hover:text-gray-400 mt-px">CUADROS</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
