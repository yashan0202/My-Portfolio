import React from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactForm />
    </div>
  );
};

export default App;
