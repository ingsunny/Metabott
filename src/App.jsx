import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import ScrollToTop from "./components/ScrollToTop";
import BookSlot from "./pages/BookSlot";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<BookSlot />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
