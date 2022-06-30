import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="flex items-center justify-center py-16 w-full gradient-bg-testimonials">
        <div className="px-4 md:p-20">
          <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
              <p className="mb-2 text-base font-medium tracking-tight text-white" data-aos="fade-up" data-aos-delay="100">
                Our customers love Stackup
              </p>
              <h2 
              className="text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl text-white"
              data-aos="fade-up"
              data-aos-delay="150"
              >
                Testimonials
              </h2>
              <p className="my-6 text-lg text-white" data-aos="fade-up" data-aos-delay="300">
                Don't just take our word for it, read from our extensive list of
                case studies and customer testimonials.
              </p>
              <a
                href="#_"
                className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10 bg-[#2952e3]"
                data-aos="fade-up-right"
                data-aos-delay="300"
              >
                View Case Studies
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <blockquote 
              className="flex items-center justify-between w-full col-span-1 md:p-6 p-4 rounded-lg shadow white-glassmorphism"
              data-aos="fade-up-left"
              data-aos-delay="400"
              >
                <div className="flex flex-col pr-2">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-[#2952e3] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                    <p className="mt-2 text-xs text-white sm:text-base lg:text-sm xl:text-base">
                      Awesome product! And the customer service is exceptionally
                      well.
                    </p>
                  </div>
                  <h3 className="pl-12 mt-3 text-xs font-medium leading-5 text-white truncate sm:text-base lg:text-base">
                    Jane Cooper
                    <span className="mt-1 text-xs hidden md:inline sm:text-sm leading-5 text-white truncate">
                      {" "}
                      - CEO SomeCompany
                    </span>
                  </h3>
                </div>
                <img
                  className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt=""
                />
              </blockquote>
              <blockquote 
              className="flex items-center justify-between w-full col-span-1 md:p-6 p-4 mt-4 rounded-lg shadow white-glassmorphism"
              data-aos="fade-up-left"
              data-aos-delay="400"
              >
                <div className="flex flex-col pr-4">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-[#2952e3] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                    <p className="mt-2 text-xs text-white sm:text-base lg:text-sm xl:text-base">
                      I can't express enough, how amazing this service has been
                      for my company.
                    </p>
                  </div>
                  <h3 className="pl-12 mt-3 text-xs font-medium leading-5 text-white truncate sm:text-base lg:text-base">
                    John Doe
                    <span className="mt-1 text-xs hidden md:inline leading-5 text-white truncate">
                      {" "}
                      - CEO SomeCompany
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-white truncate" />
                </div>
                <img
                  className="flex-shrink-0 w-14 h-14 md:w-24 md:h-24 bg-gray-300 rounded-full"
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&aauto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt=""
                />
              </blockquote>
              <blockquote 
              className="flex items-center justify-between w-full col-span-1 md:p-6 p-4 mt-4 rounded-lg shadow white-glassmorphism"
              data-aos="fade-up-left"
              data-aos-delay="400"
              >
                <div className="flex flex-col pr-4">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-[#2952e3] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                    <p className="mt-2 text-xs text-white sm:text-base lg:text-sm xl:text-base">
                      I can't express enough, how amazing this service has been
                      for my company.
                    </p>
                  </div>
                  <h3 className="pl-12 mt-3 text-xs font-medium leading-5 text-white truncate sm:text-base lg:text-base">
                    John Smith
                    <span className="mt-1 text-xs hidden md:inline leading-5 text-white truncate">
                      {" "}
                      - CEO SomeCompany
                    </span>
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-white truncate" />
                </div>
                <img
                  className="flex-shrink-0 w-14 h-14 md:w-24 md:h-24 bg-gray-300 rounded-full"
                  src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&aauto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt=""
                />
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
