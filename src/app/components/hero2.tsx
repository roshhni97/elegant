import React from "react";

const Hero2 = () => {
  return (
    <div className="flex flex-col py-20 gap-20 items-center">
      <p className="text-xl mx-96 text-center text-[#767676]">
        At Elegant, we believe that{" "}
        <span className="text-[#806517]">fashion is an art</span> form -- one
        that should reflect individuality, confidence, and timeless beauty. Our
        journey began with a simple idea: to create clothing that not only fits
        your body but also{" "}
        <span className="text-[#806517]">complements your spirit.</span>
      </p>
      <div className="flex justify-center items-center w-full">
        <p className="text-3xl w-72 text-center leading-10">
          We have already more than 12k clients
        </p>
      </div>
      <div className="rounded-[40px] bg-[#2A3040] w-96 h-56 align-middle"></div>
      <div className="flex justify-center items-center w-full">
        <p className="text-3xl text-center leading-10">
          Get Ready to Save Big!
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-[800px] h-[200px] flex gap-2">
          <div className="rounded-full bg-[#283949] w-1/4"></div>
          <div className="rounded-[48px] bg-[#283949] w-1/4"></div>
          <div className="rounded-full bg-[#283949] w-1/4"></div>
          <div className="rounded-[48px] bg-[#283949] w-1/4"></div>
        </div>
        <div className="w-[800px] h-[200px] flex gap-2">
          <div className="rounded-[48px] bg-[#283949] w-1/4"></div>
          <div className="rounded-full bg-[#283949] w-1/4"></div>
          <div className="rounded-[48px] bg-[#283949] w-1/4"></div>
          <div className="rounded-full bg-[#283949] w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
