import React from "react";
import Spline from '@splinetool/react-spline';

const RightCounter = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-start justify-center scroll-smooth overflow-hidden" id="home">
      <div className="relative w-full flex flex-col mt-[4rem]">
        {/* Left Side */}
        <div className="relative lg:top-[-4em] md:top-[-4rem]">
          <div className="absolute top-[8em] left-[2em] text-2xl text-black font-semibold tracking-[1rem]">
            Introducing
          </div>
          <div className="absolute top-[7.6em] left-[1em] text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-purple-300 to-pink-300 tracking-[0.1rem]">
            Cutting-Edge AI Solutions for Every Industry
          </div>
        </div>

        {/* Spline */}
        <div className="relative lg:top-[-15em] lg:left-[1em] sm:left-0 md:top-[-13rem] xsm:left-0 xsm:top-[-4rem] xl:left-[20%]">
          <Spline scene="https://prod.spline.design/5kbUBQzickSOLWE1/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default RightCounter;
