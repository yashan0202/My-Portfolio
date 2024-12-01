import React from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import TutorialsSection from "./components/TutorialsSection";
import CertificationsAndMore from "./components/CertificationsAndMore";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./BlogPage";

const App = () => {
  return (
    <div className="app">
      <Router>
       <Routes>
        <Route path="/blogs" element={<BlogPage />} />
        {/* Add other routes here */}
       </Routes>
      </Router>


      <Header />
      <LandingSection />
      <ProjectsSection />
      <TutorialsSection />
      <CertificationsAndMore />
      <ContactForm />
      <Footer />
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
