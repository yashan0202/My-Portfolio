import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import TutorialsSection from "./components/TutorialsSection";
import CertificationsAndMore from "./components/CertificationsAndMore";
import ContactForm from "./components/ContactForm";
import BlogPage from "./BlogPage";
import "./App.css";

const HomePage = () => {
  return (
    <>
      <LandingSection />
      <ProjectsSection />
      <TutorialsSection />
      <CertificationsAndMore />
      <ContactForm />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/tutorials" element={<TutorialsSection />} />
        <Route path="/certifications" element={<CertificationsAndMore />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
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
