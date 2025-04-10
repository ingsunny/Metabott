import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courseData from "../data/courseData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import learningPath from "../data/learningPath";
import courseOutcomes from "../data/courseOutcome";
import visionData from "../data/visionData";
import faqs from "../data/faqs";

const CourseDetails = () => {
  const { courseId } = useParams();

  const course = courseData[courseId];

  if (!course) {
    return <h1>Course not found</h1>;
  }

  const features = [
    { icon: "📚", text: "Learn Coding At Your Own Schedule" },
    { icon: "🎓", text: "Certificate of Training from METABOTT" },
    { icon: "🗣️", text: "Learn in Your Native Language (Hindi/English)" },
    { icon: "⏱️", text: "8 Weeks | 1hr/Day | Flexible Schedule" },
    { icon: "💡", text: "4 Projects & 4 Assignments for Hands-on Practice" },
    { icon: "🌱", text: "Beginner Friendly — No Prior Knowledge Required" },
    { icon: "💼", text: "Placement Assistance to Build Your Career" },
    { icon: "❓", text: "Doubt Clearing Through Live Sessions" },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // faqs

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <h2 className="text-white text-4xl lg:text-5xl font-medium text-center lg:font-bold mt-12 z-10">
            {course.title}
          </h2>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
        <div className="bg-white pt-20 pb-24">
          <motion.div
            className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 flex flex-col gap-2 items-center text-center shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <span className="text-6xl">{feature.icon}</span>
                <h3 className="text-md font-medium text-gray-900">
                  {feature.text}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="bg-gray-100 pt-20 pb-24">
          <div className="max-w-screen-lg mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold mb-6 text-center text-[#5c0601]"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why {course.title}?
            </motion.h2>

            <motion.p
              className="text-lg text-[#5c0601] mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At Metabott Institute, we don't just teach full stack development
              — we transform learners into professionals with job-ready skills,
              confidence, and a real-world mindset.
            </motion.p>

            <motion.p
              className="text-md text-gray-500 mb-4 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Whether you're starting from scratch or leveling up your skills,
              our hands-on training, expert mentorship, and practical projects
              make you stand out in today’s tech industry. Our courses are built
              by industry experts, for future industry leaders. With placement
              support, mock interviews, and real-world learning — we don’t just
              educate, we launch careers.
            </motion.p>
          </div>
        </div>

        <div className="bg-white pt-20 pb-24">
          <div className="max-w-screen-lg mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold mb-10 text-center text-[#5c0601]"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Vision
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
              {visionData.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#5c0601]">
                    {item.icon} {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-100 pt-20 pb-24">
          <div className="max-w-screen-lg mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold mb-10 text-center text-[#5c0601]"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Course Outcome
            </motion.h2>

            <ul className="space-y-6 text-gray-800 text-lg leading-relaxed">
              {courseOutcomes.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#5c0601] text-2xl">✅</span>
                  <span>
                    <strong>{item.title}:</strong> {item.description}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-20 bg-white">
          <h2 className="text-4xl font-bold text-center text-[#5c0601] mb-16">
            Learning Path
          </h2>
          <div className="relative max-w-6xl mx-auto px-6 before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-[#9c7775] before:-translate-x-1/2">
            {learningPath.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.001 }}
                  className={`relative mb-12 w-full md:w-1/2 px-4 ${
                    isLeft
                      ? "md:pr-16 text-right md:left-0"
                      : "md:pl-16 md:left-1/2"
                  }`}
                >
                  <div className="bg-white shadow-xl rounded-xl p-6 border-l-4 border-[#5c0601]">
                    <h3 className="text-xl font-bold text-[#5c0601]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" bg-gray-100  px-4 py-20">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#5c0601] mb-8">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-300 rounded-lg">
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-4 py-3 text-left font-medium text-lg bg-white hover:bg-gray-50 cursor-pointer text-[#5c0601] transition"
                >
                  {faq.question}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 bg-gray-150 ease-in-out px-4 ${
                    openIndex === index ? "max-h-96 py-5" : "max-h-0"
                  }`}
                >
                  <p className="text-black">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer style={"bg-[#111827] p-5"} />
    </>
  );
};

export default CourseDetails;
