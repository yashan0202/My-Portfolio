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
    <div className="app">
      <Router>
        <Header />
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogPage />} />
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
