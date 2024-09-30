import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-6 w-full items-center justify-center py-20">
      <div className="flex justify-center items-center w-full">
        <p className="text-3xl text-center leading-10">Let’s talk</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-[800px] h-[350px] flex gap-2">
          <div className="rounded-3xl bg-[#283949] w-1/3"></div>
          <div className="rounded-3xl rounded-es-[120px] rounded-se-[120px] bg-[#283949] w-1/3"></div>
          <div className="rounded-3xl bg-[#283949] w-1/3">
            <div className="p-5 flex flex-col gap-3">
              <div className=" rounded-xl bg-[#556877] p-3"> Name</div>
              <div className=" rounded-xl bg-[#556877] p-3"> Email</div>
              <div className=" rounded-xl bg-[#556877] p-3"> Message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
