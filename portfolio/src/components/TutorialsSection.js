import React from "react";
import pythonLogo from "../assets/python.png";
import jsLogo from "../assets/java-script.png";
import cppLogo from "../assets/c-plus-plus.png";
import "./TutorialsSection.css";
import ProjectCard from "./ProjectCard";

const tutorials = [
  {
    title: "Python",
    description: "Learn Python with topic wise hands-on examples and projects.",
    logo: pythonLogo , // Replace with actual image path or URL
    link: "https://github.com/yashan0202/Python",
  },
  {
    title: "JavaScript",
    description: "Comprehensive JavaScript tutorials from basics to advanced.",
    logo: jsLogo, // Replace with actual image path or URL
    link: "https://github.com/yashan0202/JavaScript",
  },
  {
    title: "C/C++",
    description: "C and C++ programming including OOPs concepts and Data Structures.",
    logo: cppLogo, // Replace with actual image path or URL
    link: "https://github.com/yashan0202/C-plus-plus-Programming",
  },
  // Add more tutorials as needed
];

const TutorialsSection = () => {
  return (
    <section id="tutorials" className="tutorials">
      <h2>Tutorials</h2>
      <div className="grid">
        {tutorials.map((tutorial, index) => (
          <ProjectCard key={index} project={tutorial} isTutorial={true} extraClass="tutorial-card" />
        ))}
      </div>
    </section>
  );
};

export default TutorialsSection;
