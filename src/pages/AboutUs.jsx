import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "https://metabott.in/wp-content/uploads/2024/09/9-768x543.webp",
  "https://metabott.in/wp-content/uploads/2024/09/3-768x543.webp",
  "https://metabott.in/wp-content/uploads/2024/09/4-768x543.webp",
  "https://metabott.in/wp-content/uploads/2024/09/5-768x543.webp",
];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section class="pt-32 xl:pt-46 pb-36 relative xl:mr-0 lg:mr-5 mr-0">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-center items-start gap-8 flex">
                <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 class="text-gray-400 text-base font-normal leading-relaxed">
                    About Us
                  </h6>
                  <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 class="text-[#5c0601] text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      The Journey of Metabott
                    </h2>
                    <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Metabott Institute is on a mission to empower aspiring
                      developers by equipping them with industry-relevant tech
                      skills, hands-on experience, needed to launch successful,
                      future-ready careers.
                    </p>
                  </div>
                </div>
                <div class="w-full flex-col justify-center items-start gap-6 flex">
                  <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="relative group w-full h-full pb-2">
                      <div className="relative h-full z-10 bg-white rounded-xl p-4">
                        <h4 className="text-gray-900 text-2xl font-bold leading-9">
                          10K+ Learners
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Empowered with real-world skills and practical
                          knowledge.
                        </p>
                      </div>
                      <span className="absolute inset-0 rounded-xl border-animation z-0" />
                    </div>
                    <div className="relative group w-full h-full pb-2">
                      <div className="relative h-full z-10 bg-white rounded-xl p-4">
                        <h4 className="text-gray-900 text-2xl font-bold leading-9">
                          Industry Experts
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Learn from mentors who’ve built real products and
                          scaled teams.
                        </p>
                      </div>
                      <span className="absolute inset-0 rounded-xl border-animation z-0" />
                    </div>
                  </div>
                  <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="relative group w-full h-full pb-2">
                      <div className="relative h-full z-10 bg-white rounded-xl p-4">
                        <h4 className="text-gray-900 text-2xl font-bold leading-9">
                          100% Practical
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Everything we teach is hands-on, project-driven and
                          job-ready.
                        </p>
                      </div>
                      <span className="absolute inset-0 rounded-xl border-animation z-0" />
                    </div>
                    <div className="relative group w-full h-full pb-2">
                      <div className="relative h-full z-10 bg-white rounded-xl p-4">
                        <h4 className="text-gray-900 text-2xl font-bold leading-9">
                          Career Support
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Mock interviews, resume reviews, and placement
                          assistance.
                        </p>
                      </div>
                      <span className="absolute inset-0 rounded-xl border-animation z-0" />
                    </div>
                  </div>
                </div>
              </div>
              <button class="sm:w-fit w-full group px-3.5 py-2 bg-gray-50 hover:bg-gray-100 cursor-pointer mt-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                <span class="px-1.5 text-[#5c0601] text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                  Request a Call
                </span>
                <svg
                  class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                    stroke="#5c0601"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div class="w-full lg:justify-start justify-center items-start flex">
              <div class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-[#5c0601] rounded-3xl sm:border-4 border-[#5c0601] relative">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]} //
                  className="h-full object-cover rounded-tl-3xl rounded-bl-3xl rounded-tr-2xl rounded-br-2xl"
                >
                  {images.map((url, idx) => (
                    <SwiperSlide key={idx} className="">
                      <img
                        src={url}
                        alt={`slide-${idx}`}
                        className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl rounded-tr-2xl rounded-br-2xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer style={"bg-[#111827] px-5"} />
    </>
  );
};

export default AboutUs;
