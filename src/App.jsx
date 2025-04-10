import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import ScrollToTop from "./components/ScrollToTop";
import BookSlot from "./pages/BookSlot";
// import ChatBase from "./components/Chatbase";
import ChatBotWidget from "./components/Chatbase";
import AboutUs from "./pages/AboutUs";

const App = () => {
  // useEffect(() => {
  //   // Create script for configuration
  //   const configScript = document.createElement("script");
  //   configScript.innerHTML = `
  //     window.embeddedChatbotConfig = {
  //       chatbotId: "q6ev75eburH4Xu7b50O93",
  //       domain: "www.chatbase.co"
  //     };
  //   `;
  //   document.body.appendChild(configScript);

  //   // Create script for the actual chatbot embed
  //   const chatbotScript = document.createElement("script");
  //   chatbotScript.src = "https://www.chatbase.co/embed.min.js";
  //   chatbotScript.defer = true;
  //   document.body.appendChild(chatbotScript);

  //   // Cleanup on unmount
  //   return () => {
  //     document.body.removeChild(configScript);
  //     document.body.removeChild(chatbotScript);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ChatBotWidget />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<BookSlot />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
