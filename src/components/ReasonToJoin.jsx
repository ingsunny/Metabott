import React from "react";

const ReasonToJoin = () => {
  return (
    <>
      <section class="px-4 space-y-6 bg-gray-100  pt-20 pb-20 lg:pt-20 lg:pb-28">
        <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.1] ">
            Top Reasons to Join
          </h2>

          <p class="sm:text-base leading-normal sm:leading-7">
            Learn and Master the best out of most powerful and omnipotent AI
            Chatbots such as ChatGPT, Google Gemini, Perplexity and many more.
            Already integrated with all digital marketing courses.
          </p>
        </div>

        <div class="mx-auto grid justify-center gap-7 mg:gap-4 grid-cols-1 md:max-w-[64rem] md:grid-cols-2">
          <div className="w-full h-[200px] [perspective:1000px] group">
            <div
              className="relative w-full h-full transition-transform duration-1000 group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full bg-white text-black flex items-center justify-center text-xl font-semibold border-3 border-[#5c0601] rounded-xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
              >
                <div className="flex flex-col justify-between rounded-md gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>

                  <div class="space-y-2">
                    <h3 class="font-bold">100% Placement Assistance</h3>
                    <p class="text-sm font-normal">
                      From resume building to real interviews, we guide you till
                      you're hired.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full bg-[#5c0601] text-white flex items-center justify-center text-xl font-semibold border-8 border-[#5c0601] rounded-xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex flex-col justify-between rounded-md gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>

                  <div class="space-y-2">
                    <h3 class="font-bold">100% Placement Assistance</h3>
                    <p class="text-sm font-normal">
                      From resume building to real interviews, we guide you till
                      you're hired.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[200px] [perspective:1000px] group">
            <div
              className="relative w-full h-full transition-transform duration-1000 group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full bg-white text-black flex items-center justify-center text-xl font-semibold border-3 border-[#5c0601] rounded-xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
              >
                <div className="flex flex-col justify-between rounded-md gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>

                  <div class="space-y-2">
                    <h3 class="font-bold">Small Batches 6–10 Students</h3>
                    <p class="text-sm font-normal">
                      Personal mentorship for every learner, every step of the
                      way.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full bg-[#5c0601] text-white flex items-center justify-center text-xl font-semibold border-8 border-[#5c0601] rounded-xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex flex-col justify-between rounded-md gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>

                  <div class="space-y-2">
                    <h3 class="font-bold">Small Batches 6–10 Students</h3>
                    <p class="text-sm font-normal">
                      Personal mentorship for every learner, every step of the
                      way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[200px] [perspective:1000px] group">
            <div
              className="relative w-full h-full transition-transform duration-1000 group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full bg-white text-black flex items-center justify-center text-xl font-semibold border-3 border-[#5c0601] rounded-xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
              >
                <div className="flex flex-col justify-between rounded-md gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <div class="space-y-2">
                    <h3 class="font-bold">Flexible Timings</h3>
                    <p class="text-sm font-normal">
                      Schedule that fits your life, not the other way around.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full bg-[#5c0601] text-white flex items-center justify-center text-xl font-semibold border-8 border-[#5c0601] rounded-xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex flex-col justify-between rounded-md gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <div class="space-y-2">
                    <h3 class="font-bold"> Flexible Timings</h3>
                    <p class="text-sm font-normal">
                      Schedule that fits your life, not the other way around.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[200px] [perspective:1000px] group">
            <div
              className="relative w-full h-full transition-transform duration-1000 group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full bg-white text-black flex items-center justify-center text-xl font-semibold border-3 border-[#5c0601] rounded-xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
              >
                <div className="flex flex-col justify-between rounded-md gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                    />
                  </svg>

                  <div class="space-y-2">
                    <h3 class="font-bold">Mock Interviews & CV Building</h3>
                    <p class="text-sm font-normal">
                      Train like a pro, present like a pro—be interview-ready.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full bg-[#5c0601] text-white flex items-center justify-center text-xl font-semibold border-8 border-[#5c0601] rounded-xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex flex-col justify-between rounded-md gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                    />
                  </svg>

                  <div class="space-y-2">
                    <h3 class="font-bold">Mock Interviews & CV Building</h3>
                    <p class="text-sm font-normal">
                      Train like a pro, present like a pro—be interview-ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReasonToJoin;
