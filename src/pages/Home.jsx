import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import WhyUs from "../components/WhyUs";
import ReasonToJoin from "../components/ReasonToJoin";
import Footer from "../components/Footer";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

const Home = () => {
  // const cardRef = useRef(null);

  // const handleMouseMove = (e) => {
  //   const card = cardRef.current;
  //   const rect = card.getBoundingClientRect();
  //   const x = e.clientX - rect.left; // Mouse X within card
  //   const y = e.clientY - rect.top; // Mouse Y within card

  //   const centerX = rect.width / 2;
  //   const centerY = rect.height / 2;

  //   const rotateX = -(y - centerY) / 15;
  //   const rotateY = (x - centerX) / 15;

  //   card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  // };

  // const handleMouseLeave = () => {
  //   cardRef.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
  // };

  return (
    <>
      {/* <iframe
        src="https://www.chatbase.co/chatbot-iframe/q6ev75eburH4Xu7b50O93"
        width="100%"
        style={{ height: "100%", minHeight: "700px" }}
        frameBorder="0"
      /> */}

      <Navbar />
      <Hero />
      <Courses />

      {/* why choose us section ?  */}
      {/* <div className="overflow-x-auto max-w-screen-md lg:max-w-screen-xl py-12  m-auto">
        <div className="pb-8">
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-bold text-center mb-2">
            Why Choose MetaBott?
          </h2>
          <p className="text-center text-gray-600 mx-auto">
            Featured in Dainik Jagran for empowering students with
            industry-ready full stack skills and real placement success.
          </p>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="max-h-[350px] overflow-hidden"
        >
          <SwiperSlide className="!w-[350px]">
            <img
              src="https://metabott.in/wp-content/uploads/2024/09/Jagran-Josh_11zon-1.webp"
              className="w-full h-[350px] object-cover rounded-lg"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-[350px]">
            <img
              src="https://metabott.in/wp-content/uploads/2024/09/6-768x543.webp"
              className="w-full h-[350px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[350px]">
            <img
              src="https://metabott.in/wp-content/uploads/2024/09/7-768x543.webp"
              className="w-full h-[350px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[350px]">
            <img
              src="https://metabott.in/wp-content/uploads/2024/09/5-768x543.webp"
              className="w-full h-[350px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[350px]">
            <img
              src="https://metabott.in/wp-content/uploads/2024/09/4-768x543.webp"
              className="w-full h-[350px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[350px]">
            <img
              src="https://metabott.in/wp-content/uploads/2024/09/8-768x543.webp"
              className="w-full h-[350px] object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div> */}

      <WhyUs />

      <ReasonToJoin />

      <section className="relative h-[100vh] w-full">
        <div
          className="relative h-30/20 lg:h-13/12 xl:h-10/12 bg-red-500 bg-cover bg-fixed bg-center text-white flex flex-col items-center px-6 text-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="z-10 absolute top-1/9 sm:top-1/6 lg:top-1/6 xl:top-1/4 text-center px-2">
            {" "}
            <h2 className="text-4xl font-semibold mb-2 text-white">
              Enroll & Get Your Own Professional Website – Free!
            </h2>
            <p className="max-w-xl m-auto text-lg font-light text-[#a4acb3]">
              Join our Full Stack Pro Course today and we’ll build you a custom
              website at no extra cost. Learn full stack development while
              getting a live project of your own!
            </p>
          </div>
          {/* Dark overlay */}

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        </div>

        <div
          id="ReqForm"
          className="absolute top-16/12 lg:top-12/12 xl:top-10/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-[#1f2937] p-6 md:p-8 rounded-lg shadow-lg w-[95%] max-w-xl"
        >
          <form action="#" class="space-y-5 lg:space-y-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white w-full"
                  placeholder="Sunny"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Second Name
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white w-full"
                  placeholder="Patel"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white w-full"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white w-full"
                  placeholder="+91-830333000"
                  required
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message (optional)
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit bg-[#5c0601] cursor-pointer hover:bg-[#660803]"
            >
              Request a Call
            </button>
          </form>
        </div>

        <div className="h-9.5/12 bg-[#111827]  px-4 sm:px-6 lg:px-8 pt-72 lg:pt-62">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
