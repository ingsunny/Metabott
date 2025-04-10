import { useState } from "react";
import { Link } from "react-router-dom";

const BookSlot = () => {
  // const handleSubmit = async (e) => {
  //   setLoading(true);
  //   e.preventDefault();

  //   if (name == "" && email == "") {
  //     setLoading(false);
  //     alert("Please enter both name & email id");
  //     return false;
  //   }

  //   await axios
  //     .post("/api/send", { name, email })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false);
  //       if (data && data.id) {
  //         alert(
  //           `Thank you for your interest ${name}! We will get back to you soon!`
  //         );
  //         setName("");
  //         setEmail("");
  //       } else {
  //         alert("Apologies! Please try again.");
  //       }
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       alert("Ooops! unfortunately some error has occurred.");
  //     });
  //   return true;
  // };
  return (
    <main className="flex flex-col lg:flex-row">
      <div
        className={`flex w-full flex-col items-center px-5 py-8 sm:px-10 sm:py-16 lg:px-24 lg:py-24 min-h-screen -mt-4`}
      >
        <div className="relative flex flex-col  max-w-xl gap-4 ">
          <div className="flex flex-col gap-10">
            <Link to="/">
              <img src="/logo.jpg" alt="logo" className="w-[200px]" />
            </Link>

            <p className="text-lg text-gray-600">
              Thanks for your interest. Enter your name and details so we can
              connect you with one of our team.
            </p>
          </div>
          <form className="mt-6 flex flex-col  max-w-xl gap-4 z-10">
            <div>
              <label htmlFor="name" className="font-normal text-gray-700">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                // value={name}
                className="rounded-sm w-full mt-1  bg-white/5 px-3 py-2.5 outline-none text-black border border-gray-400/80 text-sm"
                placeholder="Name"
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email-address"
                className="font-normal text-gray-700"
              >
                Your email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                // value={email}
                className="rounded-sm w-full bg-white/5 mt-1 px-3.5 py-2.5 outline-none text-black border border-gray-400/80  text-sm "
                placeholder="Email"
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <h3 className="font-normal text-gray-700 mb-3">
                Select your course
              </h3>
              <div className="flex md:flex-row flex-col justify-between">
                <span className="flex items-center">
                  <input
                    type="radio"
                    id="checkbox1"
                    name="service"
                    className="form-checkbox h-4 w-4 text-indigo-600 mr-2"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="font-normal text-gray-700 text-md"
                  >
                    Frontend Mastery
                  </label>
                </span>

                <span className="flex items-center">
                  <input
                    type="radio"
                    id="checkbox1"
                    name="service"
                    className="form-checkbox h-4 w-4 text-indigo-600 mr-2"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="font-normal text-gray-700 text-md"
                  >
                    Javascript + React.js
                  </label>
                </span>
                <span className="flex items-center">
                  <input
                    type="radio"
                    id="checkbox1"
                    name="service"
                    className="form-checkbox h-4 w-4 text-indigo-600 mr-2"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="font-normal text-gray-700 text-md"
                  >
                    Backend with Node.js
                  </label>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="datetime" className="font-normal text-gray-700">
                Book Slot
              </label>
              <input
                id="datetime"
                type="datetime-local"
                className="rounded-sm w-full mt-1  bg-white/5 px-3 py-2.5 outline-none text-black border border-gray-400/80 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email-address"
                className="font-normal text-gray-700"
              >
                Your message (optional)
              </label>
              <textarea
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                // value={email}
                className="rounded-sm w-full mt-1  h-24 bg-white/5 px-3.5 py-2.5 outline-none text-black border border-gray-400/80 text-sm "
                placeholder="Leave a comment.."
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md py-[0.6rem] px-[1rem] text-sm flex items-center font-semibold text-white bg-[#5c0601] hover:bg-[#660803] cursor-pointer"
              >
                {/* {loading ? (
                  <div
                    style={{
                      borderTopColor: "transparent",
                    }}
                    className="w-4 h-4 border-2 border-white border-solid rounded-full animate-spin"
                  ></div>
                ) : (
                  <> */}
                {"Get started"}&nbsp;&nbsp;&nbsp;
                <svg
                  width="24"
                  height="24"
                  class="transition-colors duration-300 w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 13L17.17 13L13.59 16.59L15 18L21 12L15 6L13.59 7.41L17.17 11L3 11L3 13Z"></path>
                </svg>
                {/* </>
                )} */}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* // Modal for */}

      {/* // another seciton  */}

      {/* <div className="bg-[#3D4751] lg:w-[560px] lg:h-auto h-[700px]  px-4 pt-12 lg:pb-36 flex flex-col justify-around text-center">
        <h3 className="text-white text-2xl">Amazing Clients who trust us</h3>
        <div className="  mx-auto">
          <img
            className="w-36 "
            src="https://www.bairesdev.com/start/brands/google.svg"
            alt="google"
          />
        </div>
        <div className="  mx-auto">
          <img
            className="w-36 "
            src="https://www.bairesdev.com/start/brands/rolls-royce-white.svg"
            alt="google"
          />
        </div>
        <div className="  mx-auto">
          <img
            className="w-36 text-xl"
            src="https://www.bairesdev.com/start/brands/netgear.svg"
            alt="google"
          />
        </div>
        <div className="  mx-auto">
          <img
            className="w-12 "
            src="https://www.bairesdev.com/start/brands/ernst-young.svg"
            alt="google"
          />
        </div>
        <div className="  mx-auto">
          <img
            className="w-36 "
            src="https://www.bairesdev.com/start/brands/siriusxm.svg"
            alt="google"
          />
        </div>
        <div className=" mx-auto">
          <img
            className="w-12 "
            src="https://www.bairesdev.com/start/brands/hp.svg"
            alt="google"
          />
        </div>
      </div> */}
    </main>
  );
};

export default BookSlot;
