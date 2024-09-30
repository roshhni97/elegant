import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col gap-6 w-full items-center justify-center">
      <div className="flex justify-center items-center w-full">
        <p className="text-3xl text-center leading-10">FAQ</p>
      </div>
      <div className="bg-[#0E0E0E] flex justify-between items-center w-2/5 p-6 rounded-2xl">
        <p>01 What payment methods do you accept?</p>
        <ChevronDown />
      </div>
      <div className="bg-[#1C2230] flex flex-col w-2/5 p-6 rounded-2xl gap-2">
        <div className="flex justify-between">
          <p>01 What payment methods do you accept?</p>
          <ChevronUp />
        </div>
        <div>
          <p className="text-sm text-[#C3C3C3]">
            Standard shipping typically takes 5-7 business days, while expedited
            shipping options are available for faster delivery
          </p>
        </div>
      </div>
      <div className="bg-[#0E0E0E] flex justify-between items-center w-2/5 p-6 rounded-2xl">
        <p>01 What payment methods do you accept?</p>
        <ChevronDown />
      </div>
      <div className="bg-[#0E0E0E] flex justify-between items-center w-2/5 p-6 rounded-2xl">
        <p>01 What payment methods do you accept?</p>
        <ChevronDown />
      </div>
      <div className="bg-[#0E0E0E] flex justify-between items-center w-2/5 p-6 rounded-2xl">
        <p>01 What payment methods do you accept?</p>
        <ChevronDown />
      </div>
    </div>
  );
};

export default FAQ;
