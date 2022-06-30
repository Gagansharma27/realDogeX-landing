import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-16 w-full bg-black">
      <h2 className="text-white text-xl md:text-4xl font-bold p-4" data-aos="fade-down" data-aos-delay="100">
        Subscribe to our Newsletter
      </h2>
      <form className="m-4 flex" data-aos="fade-up" data-aos-delay="200">
        <input
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l placeholder-gray-400 text-white border-gray-600 bg-gray-700"
          placeholder="your@mail.com"
        />
        <button className="px-8 rounded-r-lg bg-[#2952e3] text-white font-bold p-4 uppercase">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
