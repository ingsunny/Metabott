import React from "react";
import { useParams } from "react-router-dom";
import courseData from "../data/courseData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CourseDetails = () => {
  const { courseId } = useParams();

  const course = courseData[courseId];

  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto pb-20 lg:pb-24">
        <div
          className="relative h-[340px] bg-fixed bg-center bg-cover flex flex-row items-center justify-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <h2 className="text-white text-5xl font-bold mt-12 z-10">
            {course.title}
          </h2>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>

        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-2 items-center text-center">
            <span className="text-6xl">📚</span>
            <h3 className="text-md font-normal text-gray-900">
              Learn Coding At Your Own Schedule
            </h3>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-2 items-center text-center">
            <span className="text-6xl">🎓</span>
            <h3 className="text-md font-normal text-gray-900">
              Certificate of Training from METABOTT
            </h3>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-2 items-center text-center">
            <span className="text-6xl">🗣️</span>
            <h3 className="text-md font-normal text-gray-900">
              Learn in Your Native Language (Hindi/English)
            </h3>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-2 items-center text-center">
            <span className="text-6xl">⏱️</span>
            <h3 className="text-md font-normal text-gray-900">
              8 Weeks | 1hr/Day | Flexible Schedule
            </h3>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-2 items-center text-center">
            <span className="text-6xl">💡</span>
            <h3 className="text-md font-normal text-gray-900">
              4 Projects & 4 Assignments for Hands-on Practice
            </h3>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-2 items-center text-center">
            <span className="text-6xl">🌱</span>
            <h3 className="text-md font-normal text-gray-900">
              Beginner Friendly — No Prior Knowledge Required
            </h3>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-2 items-center text-center">
            <span className="text-6xl">💼</span>
            <h3 className="text-md font-normal text-gray-900">
              Placement Assistance to Build Your Career
            </h3>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-2 items-center text-center">
            <span className="text-6xl">❓</span>
            <h3 className="text-md font-normal text-gray-900">
              Doubt Clearing Through Live Sessions
            </h3>
          </div>
        </div>

        {/* <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <p className="text-lg text-gray-700">Syllabus: {course.syllabus}</p> */}
      </div>
      <Footer style={"bg-[#111827] p-5"} />
    </>
  );
};

export default CourseDetails;
