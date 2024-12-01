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
    title: "How to integrate MongoDB into your Next.js apps",
    author: "Haris Ali Khan",
    authorImage: "https://via.placeholder.com/40",
    date: "November 3, 2024",
    description:
      "Learn how to seamlessly integrate MongoDB into your Next.js applications with best practices for efficient connection handling and improved performance.",
    readMoreLink: "https://example.com/mongodb-nextjs",
    originalLink: "https://example.com/original-blog",
  },
  {
    title: "How to host a Next.js app in Production on an Ubuntu VPS",
    author: "Haris Ali Khan",
    authorImage: "https://via.placeholder.com/40",
    date: "March 23, 2024",
    description:
      "Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide.",
    readMoreLink: "https://example.com/nextjs-ubuntu",
    originalLink: "https://example.com/original-blog2",
  },
];
export default App;
