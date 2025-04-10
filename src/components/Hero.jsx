import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section class="bg-white pl-4 pr-8 pt-28 pb-20 lg:pt-42 lg:pb-24">
        <div class="grid max-w-screen-md lg:max-w-screen-xl mx-auto gap-8 lg:gap-0 lg:grid-cols-12">
          <div class="flex flex-col lg:col-span-7 order-2 lg:order-1">
            <h1 class="lg:max-w-xl mb-4 font-extrabold tracking-tight leading-8 sm:leading-none text-3xl text-gray-900 sm:text-4xl lg:text-5xl ">
              Lucknow’s <span className="text-[#732926]">#1 Institute</span> for
              Full Stack Development
            </h1>
            <p class="lg:max-w-xl xl:max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg xl:text-xl ">
              Led by industry veteran{" "}
              <span className="underline">Dubey Sir,</span> our programs are
              trusted by +1500 students and professionals to build real skills
              and real careers.
            </p>
            <Link
              to="/get-started"
              class="inline-flex w-fit scale-95 sm:scale-100 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-[#5c0601] hover:bg-[#660803]  rounded-lg"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div class="lg:mt-0 lg:col-span-5 order-1 lg:order-2 ">
            <div class="rounded-tl-4xl rounded-br-4xl overflow-hidden">
              <img
                src="teacherui.png"
                alt="mockup"
                className="w-[300px] sm:w-[360px] lg:w-full h-auto object-cover w-"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
