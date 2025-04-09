import { useEffect, useState } from "react";

const Navbar = () => {
  // Toggle Menu - Responsive

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Lock scroll when sidebar is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Dropdown - menu

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = (e) => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop) {
        // Scrolling down
        setIsFixed(true);
      } else {
        // Scrolling up
        setIsFixed(false);
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <nav
        className={`bg-white z-50 fixed w-full transition-all duration-300 ease-in-out top-0 h-[78px] xl:h-fit shadow-sm ${
          isOpen ? "" : isFixed ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className=" mx-auto flex justify-between items-center px-5 py-4 xl:py-0">
          <div className="flex items-center cursor-pointer">
            <a href="/">
              <img className="w-[160px] sm:w-[230px]" src="/logo.jpg" />
            </a>
          </div>
          <div className="hidden xl:flex gap-1 md:items-center text-base">
            <a className="px-5 font-semibold hover:text-[#5c0601] py-7 cursor-pointer">
              Home
            </a>
            <div
              className="px-5 flex items-center hover:text-[#5c0601] py-7 relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a className="font-semibold cursor-default">
                Courses&nbsp;&nbsp;
              </a>
              <svg
                className="fill-site-neutrals-800 w-4 h-4 "
                viewBox="0 0 24 24"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14.65C11.8833 14.65 11.771 14.6333 11.663 14.6C11.5543 14.5667 11.4583 14.5 11.375 14.4L6.84999 9.89999C6.71666 9.74999 6.64999 9.57499 6.64999 9.37499C6.64999 9.17499 6.72499 8.99999 6.87499 8.84999C7.02499 8.71666 7.19999 8.64999 7.39999 8.64999C7.59999 8.64999 7.77499 8.71666 7.92499 8.84999L12 12.925L16.1 8.84999C16.2333 8.69999 16.4 8.62899 16.6 8.63699C16.8 8.64566 16.975 8.71666 17.125 8.84999C17.275 8.99999 17.35 9.17899 17.35 9.38699C17.35 9.59566 17.275 9.76666 17.125 9.89999L12.625 14.4C12.5417 14.5 12.446 14.5667 12.338 14.6C12.2293 14.6333 12.1167 14.65 12 14.65Z"></path>
              </svg>

              {isDropdownOpen && (
                <div
                  className={` absolute top-[5rem] -ml-[100px] min-w-[350px] bg-white shadow-2xl transition-opacity duration-300 flex flex-col text-black ${
                    isDropdownOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 gap-2 border-t border-b">
                    <div className="bg-white hover:bg-[#5c0601] hover:text-white cursor-pointer p-4 border-b border-gray-200">
                      Frontend Development Mastery
                    </div>
                    <div className="bg-white hover:bg-[#5c0601] hover:text-white cursor-pointer p-4 border-b border-gray-200">
                      JavaScript + React Specialization
                    </div>
                    <div className="bg-white hover:bg-[#5c0601] hover:text-white cursor-pointer p-4 border-b border-gray-200">
                      Backend Development with Node.js
                    </div>
                    <div className="bg-white hover:bg-[#5c0601] hover:text-white cursor-pointer p-4">
                      Full Stack Integration + DevOps Basics
                    </div>
                  </div>

                  {/* <div className="flex gap-3 border-b-2 py-4 mb-5 border-gray-300/85 ">
                  <span>
                    <svg
                      width="32"
                      height="28"
                      viewBox="0 0 32 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8108 0.20166C25.4704 0.20166 31.6799 6.41113 31.6799 14.0708C31.6799 21.7304 25.4704 27.9399 17.8108 27.9399V0.20166Z"
                        fill="#F66135"
                      ></path>
                      <path
                        d="M7.99445 0C15.3286 2.20855 19.4849 9.94218 17.2763 17.2763C15.0696 24.6104 7.3341 28.7667 0 26.5581L7.99445 0Z"
                        fill="#F66135"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <h1 className="text-xl font-semibold text-gray-900 hover:underline">
                      <a href="/software-development-services">
                        Software Development Services.
                      </a>
                    </h1>
                    <p className="text-md text-gray-900/95">
                      Accelerate your tech projects with outsourced development.
                      Flexible engagement models,
                      <br /> tailored to you.
                    </p>
                  </span>
                </div> */}
                  {/* <div className="flex  justify-between pr-3">
                  <div>
                    <span>
                      <h2 className="text-xl font-semibold text-gray-900/95">
                        Top noch services.
                      </h2>
                      <p className="text-gray-900">
                        You can hire our software developers in different <br />{" "}
                        ways
                      </p>
                    </span>
                    <div className="mt-2">
                      <div className="flex gap-2 py-3">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.6567 8.84829L15.5609 3L0 5.8663L2.8903 21.2981L8.50211 20.2643L8.27749 24.0856L24.0779 25L25 9.33072L16.6567 8.84829Z"
                            fill="#F66135"
                          ></path>
                          <path
                            d="M9.08057 8.52795L25.3987 9.42126L24.5054 25.7393L8.18726 24.846L9.08057 8.52795Z"
                            fill="#FBB39E"
                          ></path>
                        </svg>
                        <span>
                          <h3 className="text-md font-bold text-gray-900/95">
                            Custom Web Development
                          </h3>
                          <p className="text-sm text-gray-900">
                            Our software developers in your team.
                          </p>
                        </span>
                      </div>
                      <div className="flex gap-2 py-3">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.6567 8.84829L15.5609 3L0 5.8663L2.8903 21.2981L8.50211 20.2643L8.27749 24.0856L24.0779 25L25 9.33072L16.6567 8.84829Z"
                            fill="#F66135"
                          ></path>
                          <path
                            d="M9.08057 8.52795L25.3987 9.42126L24.5054 25.7393L8.18726 24.846L9.08057 8.52795Z"
                            fill="#FBB39E"
                          ></path>
                        </svg>
                        <span>
                          <h3 className="text-md font-bold">
                            Custom App Development
                          </h3>
                          <p className="text-sm">
                            Our software developers in your team.
                          </p>
                        </span>
                      </div>
                      <div className="flex gap-2 py-3">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.6567 8.84829L15.5609 3L0 5.8663L2.8903 21.2981L8.50211 20.2643L8.27749 24.0856L24.0779 25L25 9.33072L16.6567 8.84829Z"
                            fill="#F66135"
                          ></path>
                          <path
                            d="M9.08057 8.52795L25.3987 9.42126L24.5054 25.7393L8.18726 24.846L9.08057 8.52795Z"
                            fill="#FBB39E"
                          ></path>
                        </svg>
                        <span>
                          <h3 className="text-md font-bold">
                            Personalized Cloud Hosting
                          </h3>
                          <p className="text-sm">
                            Our software developers in your team.
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900/95 mb-6">
                      Technologies.
                    </h2>
                    <span>
                      <ul className="flex flex-col gap-2 mb-3">
                        <li className="hover:underline cursor-pointer ">
                          React
                        </li>
                        <li className="hover:underline cursor-pointer ">
                          Next
                        </li>
                        <li className="hover:underline cursor-pointer ">
                          Tailwind
                        </li>
                        <li className="hover:underline cursor-pointer ">
                          Javascript
                        </li>
                        <li className="hover:underline cursor-pointer ">PHP</li>
                        <li className="hover:underline cursor-pointer ">
                          React
                        </li>
                        <li className="hover:underline cursor-pointer ">
                          Next
                        </li>
                        <li className="hover:underline cursor-pointer ">
                          Tailwind
                        </li>
                        <li className="hover:underline cursor-pointer ">
                          Javascript
                        </li>
                        <li className="hover:underline cursor-pointer ">PHP</li>
                      </ul>
                      <a
                        href="/technologies"
                        className="hover:underline text-md text-gray-400"
                      >
                        All technologies
                      </a>
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900/95 mb-6">
                      Solutions.
                    </h2>
                    <span>
                      <ul className="flex flex-col gap-2 mb-3">
                        <li>QA Testing Automation</li>
                        <li>Next</li>
                        <li>Tailwind</li>
                        <li>Android App Development</li>
                        <li>PHP</li>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Tailwind</li>
                        <li>Javascript</li>
                        <li>PHP</li>
                      </ul>
                      <a href="/solutions" className=" text-md text-gray-400">
                        All solutions
                      </a>
                    </span>
                  </div>
                </div> */}
                </div>
              )}
            </div>
            <a
              href="/downloads"
              className="px-5 font-semibold hover:text-[#5c0601] py-7"
            >
              Downloads
            </a>
            <a
              href="/about"
              className="px-5 font-semibold hover:text-[#5c0601] py-7 cursor-pointer"
            >
              About Us
            </a>

            <a className="px-5 font-semibold hover:text-[#5c0601] py-7 cursor-pointer">
              Career
            </a>
          </div>
          <a
            href="/basic-detail"
            className="hidden xl:block rounded-md py-[0.6rem] px-[1rem] text-sm font-medium text-center text-white bg-[#5c0601] hover:bg-[#660803]"
          >
            Request a Call
          </a>
          <button
            onClick={toggleMenu}
            className="xl:hidden flex items-center hover:shadow-sm px-2 py-1 cursor-pointer "
          >
            <span className="">
              {isOpen ? (
                <svg
                  className="fill-black w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 13.05L6.92499 18.125C6.79166 18.2583 6.62099 18.329 6.41299 18.337C6.20433 18.3457 6.02499 18.275 5.87499 18.125C5.72499 17.975 5.64999 17.8 5.64999 17.6C5.64999 17.4 5.72499 17.225 5.87499 17.075L10.95 12L5.87499 6.92499C5.74166 6.79166 5.67099 6.62066 5.66299 6.41199C5.65433 6.20399 5.72499 6.02499 5.87499 5.87499C6.02499 5.72499 6.19999 5.64999 6.39999 5.64999C6.59999 5.64999 6.77499 5.72499 6.92499 5.87499L12 10.95L17.075 5.87499C17.2083 5.74166 17.3793 5.67066 17.588 5.66199C17.796 5.65399 17.975 5.72499 18.125 5.87499C18.275 6.02499 18.35 6.19999 18.35 6.39999C18.35 6.59999 18.275 6.77499 18.125 6.92499L13.05 12L18.125 17.075C18.2583 17.2083 18.329 17.379 18.337 17.587C18.3457 17.7957 18.275 17.975 18.125 18.125C17.975 18.275 17.8 18.35 17.6 18.35C17.4 18.35 17.225 18.275 17.075 18.125L12 13.05Z"></path>
                </svg>
              ) : (
                <svg
                  className="stroke-black w-6 mt-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H24M0 8H24M0 15H24" strokeWidth="1.5"></path>
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        {/* {isOpen && ( */}
        {/* <> */}
        {/* <hr /> */}
        <div
          className={`xl:hidden bg-white h-screen pb-7 border-t border-gray-400 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="text-lg h-full overflow-y-auto flex flex-col bg-gray-100 gap-4">
            <li className=" hover:bg-[#5c0601] hover:text-white px-3 py-3 cursor-pointer">
              <a className="font-medium" href="/">
                Home
              </a>
            </li>
            <li className=" hover:bg-[#5c0601] hover:text-white px-3 py-3 cursor-pointer">
              <a className="font-medium" href="/about">
                Courses
              </a>
            </li>
            <li className=" hover:bg-[#5c0601] hover:text-white px-3 py-3 cursor-pointer">
              <a className="font-medium" href="/clients">
                Downloads
              </a>
            </li>
            <li className=" hover:bg-[#5c0601] hover:text-white px-3 py-3 cursor-pointer">
              <a className="font-medium" href="/blogs">
                Contact Us
              </a>
            </li>
            <li className=" hover:bg-[#5c0601] hover:text-white px-3 py-3 cursor-pointer ">
              <a className="font-medium" href="/basic-detail">
                Schedule a Call
              </a>
            </li>
          </ul>
        </div>
        {/* </> */}
        {/* )} */}
      </nav>
    </>
  );
};

export default Navbar;
