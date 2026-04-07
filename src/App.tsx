import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "./App.css";
import { useTheme } from "./context/ThemeProvider";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Concept from "./pages/Concept";
import Course from "./pages/Course";
import HOSModule from "./pages/HOSModule";
import HOSForm from "./pages/HOSForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/concepts" element={<Concept />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/hos-staff" element={<HOSModule />} />
        <Route path="/hos-staff/new" element={<HOSForm />} />
        <Route path="/hos-staff/:id" element={<HOSForm />} />
        <Route path="/hos-staff/:id/edit" element={<HOSForm />} />
      </Routes>
    </>
  );
}

export default App;
