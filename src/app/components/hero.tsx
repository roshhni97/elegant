import { ArrowUpRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-[200px]">Elegant</h1>
      <div className="w-[800px] h-[160px] flex relative -top-16">
        <div className="rounded-full bg-[#E6C1BE] w-1/4"></div>
        <div className="rounded-[48px] bg-[#A84026] w-1/4"></div>
        <div className="rounded-full bg-[#53A826] w-1/4 flex flex-col justify-center items-center gap-2">
          <ArrowUpRight />
          See Catalog
        </div>
        <div className="rounded-[48px] bg-[#64ACC4] w-1/4"></div>
        <div className="rounded-full bg-[#C49015] w-1/4"></div>
      </div>
      <div className="flex justify-center items-center gap-8 mx-56">
        <div className="w-1/3 rounded-[40px] bg-[#0E0E0E] p-7">
          <p className="text-[#767676] text-xs">
            Here you will find everything you need. Our collection is constantly
            expanding to suit your unique style.
          </p>
        </div>
        <div className="w-1/3 rounded-[40px] bg-[#0E0E0E] p-7">
          <p className="text-[#767676] text-xs">
            The women’s clothing in our new collection is both comfortable and
            stylish, ideal for both casual days and special occasions, all at
            affordable prices.
          </p>
        </div>
        <div className="w-1/3 rounded-[40px] bg-[#0E0E0E] p-7 flex items-center justify-center gap-4 py-10">
          <p>Explore New Collection</p>
          <ArrowUpRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
