import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import courseData from "../data/courseData";
import { ChevronDown, ChevronUp } from "lucide-react";

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

  // modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal(); // your modal close function
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // mobile menu #

  const [openCourses, setOpenCourses] = useState(false);

  const courseLinks = [
    { name: "Frontend Development", path: "/courses/frontend" },
    { name: "Backend with Node.js", path: "/courses/backend" },
    { name: "Full Stack Pro", path: "/courses/fullstack" },
    { name: "JS + React Specialization", path: "/courses/jsreact" },
  ];

  return (
    <>
      <nav
        className={`bg-white z-50 fixed w-full transition-all duration-300 ease-in-out top-0 h-[73px] md:h-[83px] xl:h-fit shadow-sm ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : isFixed
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }
  `}
      >
        <div className="xl:block hidden bg-[#5c0601] text-white text-[0.78rem] py-2 flex justify-center items-center text-center">
          Get A Free Website 😎 &nbsp;&nbsp;|&nbsp;&nbsp; Assured Placements
          &nbsp;&nbsp;|&nbsp;&nbsp; Internship + Experience Letter
          &nbsp;&nbsp;|&nbsp;&nbsp; Lifetime Support &nbsp;&nbsp;|&nbsp;&nbsp;
          Hi-Tech Classroom
        </div>

        <div className=" mx-auto flex justify-between items-center px-5 py-4 xl:py-0">
          <div className="flex items-center cursor-pointer">
            <Link to="/">
              <img className="w-[160px] sm:w-[230px]" src="/logo.jpg" />
            </Link>
          </div>
          <div className="hidden xl:flex gap-1 md:items-center text-base">
            <Link
              to="/"
              className="px-5 font-semibold hover:text-[#5c0601] py-7 cursor-pointer"
            >
              Home
            </Link>
            <div
              className="px-5 flex items-center hover:text-[#5c0601] py-7 relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="font-semibold cursor-default">
                Courses&nbsp;&nbsp;
              </span>
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
                    {Object.entries(courseData).map(([key, item], index) => (
                      <Link
                        to={`/courses/${key}`}
                        key={index}
                        className="bg-white hover:bg-[#5c0601] hover:text-white cursor-pointer p-4 border-b border-gray-200"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a className="px-5 font-semibold hover:text-[#5c0601] py-7">
              Downloads
            </a>
            <Link
              to="/about-us"
              className="px-5 font-semibold hover:text-[#5c0601] py-7 cursor-pointer"
            >
              About Us
            </Link>

            <a className="px-5 font-semibold hover:text-[#5c0601] py-7 cursor-pointer">
              Career
            </a>
          </div>
          <a
            onClick={openModal}
            className="hidden xl:block cursor-pointer rounded-md py-[0.6rem] px-[1rem] text-sm font-medium text-center text-white bg-[#5c0601] hover:bg-[#660803]"
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

        <div
          className={`xl:hidden bg-white h-screen pb-7 border-t border-gray-400 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="text-lg h-full overflow-y-auto flex flex-col bg-gray-100 py-4 px-2 gap-1">
            {/* Home */}
            <Link to="/">
              <li className="group px-4 py-3 cursor-pointer border-b hover:bg-[#5c0601] transition-all rounded-md">
                <span className="font-medium text-gray-800 group-hover:text-white transition-all duration-300">
                  Home
                </span>
              </li>
            </Link>

            {/* Courses with toggle */}
            <li
              onClick={() => setOpenCourses(!openCourses)}
              className="group px-4 py-3 cursor-pointer flex justify-between items-center border-b hover:bg-[#5c0601] transition-all rounded-md"
            >
              <span className="font-medium text-gray-800 group-hover:text-white transition-all duration-300">
                Courses
              </span>
              {openCourses ? (
                <ChevronUp
                  size={18}
                  className="text-gray-600 group-hover:text-white transition-all"
                />
              ) : (
                <ChevronDown
                  size={18}
                  className="text-gray-600 group-hover:text-white transition-all"
                />
              )}
            </li>

            {/* Submenu */}
            {openCourses && (
              <ul className="ml-6 mt-1 space-y-2 border-l border-gray-300 pl-4">
                {courseLinks.map((course, index) => (
                  <Link to={`${course.path}/`}>
                    <li key={index}>
                      <span className="block text-gray-700 hover:text-[#5c0601] transition-all duration-300">
                        {course.name}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            )}

            {/* Downloads */}
            <li className="group px-4 py-3 cursor-pointer border-b hover:bg-[#5c0601] transition-all rounded-md">
              <span
                className="font-medium text-gray-800 group-hover:text-white transition-all"
                // href="/downloads"
              >
                Downloads
              </span>
            </li>

            {/* About Us */}
            <Link to="/about-us">
              <li className="group px-4 py-3 cursor-pointer border-b hover:bg-[#5c0601] transition-all rounded-md">
                <span className="font-medium text-gray-800 group-hover:text-white transition-all">
                  About Us
                </span>
              </li>
            </Link>

            {/* Request a Call */}
            <li
              onClick={openModal}
              className="group px-4 py-3 cursor-pointer border-b hover:bg-[#5c0601] transition-all rounded-md"
            >
              <span className="font-medium text-gray-800 group-hover:text-white transition-all">
                Request a Call
              </span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/70 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white/70 p-6 rounded-lg shadow-lg w-[90%] max-w-md"
          >
            <h2 className="text-xl font-semibold mb-4">Request a Call</h2>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 rounded outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 rounded outline-none"
              />
              <textarea
                placeholder="Message (optional)"
                className="border p-2 rounded outline-none"
              />
              <button
                type="submit"
                className="bg-[#5c0601] hover:bg-[#660803] text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
