import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import TutorialsSection from "./components/TutorialsSection";
import CertificationsAndMore from "./components/CertificationsAndMore";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BlogPage from "./BlogPage";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          {/* Define routes for your different sections */}
          <Route path="/" element={<LandingSection />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/tutorials" element={<TutorialsSection />} />
          <Route path="/certifications" element={<CertificationsAndMore />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
const blogs = [
  {
    title: "",
    author: "Yash Anand",
    authorImage: "https://via.placeholder.com/40",
    date: "",
    description:
      "",
    readMoreLink: "",
    originalLink: "",
  },
];
export default App;
