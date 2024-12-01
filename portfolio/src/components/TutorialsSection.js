import React from "react";
import "./TutorialsSection.css";
import ProjectCard from "./ProjectCard";

const tutorials = [
  {
    title: "Python",
    description: "Comprehensive Python tutorials from basics to advanced.",
    logo: "./python.png", // Replace with actual image path or URL
    link: "https://github.com/yashan0202/Python",
  },
  {
    title: "JavaScript",
    description: "Learn JavaScript with hands-on examples and projects.",
    logo: "./java-script.png", // Replace with actual image path or URL
    link: "https://github.com/example/JavaScript",
  },
  {
    title: "C/C++",
    description: "C and C++ programming including OOPs concepts and Data Structures.",
    logo: "./c-plus-plus.png", // Replace with actual image path or URL
    link: "https://github.com/example/JavaScript",
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
