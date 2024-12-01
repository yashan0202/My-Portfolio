import React from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import TutorialsSection from "./components/TutorialsSection";
import CertificationsAndMore from "./components/CertificationsAndMore";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
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

export default App;
