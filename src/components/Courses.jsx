import React from "react";
import TiltCard from "./TiltCard";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <section className="bg-gray-100 py-18 px-5">
        <div className="max-w-screen-md lg:max-w-screen-xl mx-auto ">
          <div className="mb-12 text-center">
            <h2 className="hidden lg:block text-3xl md:text-4xl font-bold text-gray-900 ">
              The Power of{" "}
              <span className="relative inline-block after:content-[''] after:block after:w-42 after:h-1 after:bg-[#5c0601] after:mx-auto after:mt-1 after:rounded-full">
                Full Stack
              </span>{" "}
              – In Your Hands
            </h2>
            <h2 className="block lg:hidden text-3xl md:text-4xl font-bold text-gray-900 ">
              Code the{" "}
              <span className="relative inline-block after:content-[''] after:block after:w-24 after:h-1 after:bg-[#5c0601] after:mx-auto after:mt-1 after:rounded-full">
                Future
              </span>{" "}
              With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:px-10">
            {/* card 1 */}
            <TiltCard>
              <img
                src="https://www.mindinventory.com/blog/wp-content/uploads/2022/10/frontend-development-tools.png"
                alt="Frontend"
                className="h-56 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <div className="px-2 pt-1 pb-6">
                  <div className="flex items-center gap-2 py-1">
                    <h4 className="text-[13px] text-gray-600 font-medium">
                      8 weeks
                    </h4>
                    <img
                      className="w-18 object-cover"
                      src="/language-card.png"
                      alt="language-taught"
                    />
                  </div>
                  <h2 className="text-[1.2rem] pt-2 mb-3 font-semibold">
                    Frontend Web Development Mastery
                  </h2>
                  <p className="text-gray-600 mb-3 text-sm">
                    Learn HTML, CSS, JavaScript, and React with hands-on
                    projects.
                  </p>
                  <div className="flex gap-2">
                    <span className="flex text-[14px] text-gray-600 font-medium items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99984 2.66666L9.64784 5.95793L13.3332 6.48895L10.6665 9.04941L11.2958 12.6667L7.99984 10.9579L4.70384 12.6667L5.33317 9.04941L2.6665 6.48895L6.35184 5.95793L7.99984 2.66666Z"
                          fill="#FFAE00"
                          stroke="#FFAE00"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>4.2</span>
                    </span>
                    <span className="text-[14px] border-l border-[#9a9a9a] pl-2 text-gray-600  font-medium">
                      250+ learners
                    </span>
                  </div>
                </div>

                <Link to="/courses/frontend">
                  <button className="w-full bg-[#5c0601] hover:bg-[#660803] text-white rounded-lg py-2 text-sm font-semibold transition cursor-pointer">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </TiltCard>

            {/* card 2  */}

            <TiltCard>
              <img
                src="https://www.mindinventory.com/blog/wp-content/uploads/2022/10/frontend-development-tools.png"
                alt="Frontend"
                className="h-56 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <div className="px-2 pt-1 pb-6">
                  <div className="flex items-center gap-2 py-1">
                    <h4 className="text-[13px] text-gray-600 font-medium">
                      8 weeks
                    </h4>
                    <img
                      className="w-18 object-cover"
                      src="/language-card.png"
                      alt="language-taught"
                    />
                  </div>
                  <h2 className="text-[1.2rem] pt-2 mb-3 font-semibold">
                    JavaScript + React Specialization
                  </h2>
                  <p className="text-gray-600 mb-3 text-sm">
                    Master core JavaScript concepts and build dynamic UIs with
                    React.
                  </p>
                  <div className="flex gap-2">
                    <span className="flex text-[14px] text-gray-600 font-medium items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99984 2.66666L9.64784 5.95793L13.3332 6.48895L10.6665 9.04941L11.2958 12.6667L7.99984 10.9579L4.70384 12.6667L5.33317 9.04941L2.6665 6.48895L6.35184 5.95793L7.99984 2.66666Z"
                          fill="#FFAE00"
                          stroke="#FFAE00"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>4.3</span>
                    </span>
                    <span className="text-[14px] border-l border-[#9a9a9a] pl-2 text-gray-600  font-medium">
                      180+ learners
                    </span>
                  </div>
                </div>

                <Link to="/courses/backend">
                  <button className="w-full bg-[#5c0601] hover:bg-[#660803] text-white rounded-lg py-2 text-sm font-semibold transition cursor-pointer">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </TiltCard>

            {/* card 3  */}

            <TiltCard>
              <img
                src="https://www.mindinventory.com/blog/wp-content/uploads/2022/10/frontend-development-tools.png"
                alt="Frontend"
                className="h-56 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <div className="px-2 pt-1 pb-6">
                  <div className="flex items-center gap-2 py-1">
                    <h4 className="text-[13px] text-gray-600 font-medium">
                      8 weeks
                    </h4>
                    <img
                      className="w-18 object-cover"
                      src="/language-card.png"
                      alt="language-taught"
                    />
                  </div>
                  <h2 className="text-[1.2rem] pt-2 mb-3 font-semibold">
                    Backend Development with Node.js
                  </h2>
                  <p className="text-gray-600 mb-3 text-sm">
                    Learn RESTful APIs, databases, and manage servers using
                    Node.js and Express.
                  </p>
                  <div className="flex gap-2">
                    <span className="flex text-[14px] text-gray-600 font-medium items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99984 2.66666L9.64784 5.95793L13.3332 6.48895L10.6665 9.04941L11.2958 12.6667L7.99984 10.9579L4.70384 12.6667L5.33317 9.04941L2.6665 6.48895L6.35184 5.95793L7.99984 2.66666Z"
                          fill="#FFAE00"
                          stroke="#FFAE00"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>4.1</span>
                    </span>
                    <span className="text-[14px] border-l border-[#9a9a9a] pl-2 text-gray-600  font-medium">
                      200+ learners
                    </span>
                  </div>
                </div>

                <button className="w-full bg-[#5c0601] hover:bg-[#660803] text-white rounded-lg py-2 text-sm font-semibold transition cursor-pointer">
                  Enroll Now
                </button>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
