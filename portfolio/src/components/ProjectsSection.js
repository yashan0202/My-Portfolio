import React from "react";
import "./ProjectsSection.css";
import ProjectCard from "./ProjectCard";

const projects = [
  { title: "Little Lemons's", description: "Little Lemon is a Restaurant Table Booking Management app designed to streamline the reservation process for both customers and restaurant staff. This web application allows customers to browse available tables, select their preferred time, and book a table for their dining experience.", link: "https://github.com/yashan0202/littlelemon" },
  { title: "Dove Music", description: "A better Songs & Video streaming and Exploration App", link: "https://github.com/yashan0202/dove-music-app" },
  { title: "Movie management System", description: "Rent a movie or Keep track of your Wishlist", link: "https://github.com/yashan0202/Movie-management-System" },
  { title: "Automated Ticket Booking System - BookMyTrip", description: "This project is an automated ticket booking system built for the BookMyTrip website using SELENIUM and Java", link: "https://github.com/yashan0202/Frugal-Testing-s-SDE" },
  { title: "Music Bot", description: "A music bot that can be added to a chat platform like Discord, which allows users to play music from a variety of sources, including YouTube, SoundCloud, and Spotify in voice channels. A bot created using Node.js can be built using the Discord.js library, which provides a simple interface for interacting with Discord's API.", link: "https://github.com/yashan0202/Music-Bot" },
  { title: "Fet's Luck", description: "A dating Application User Interference build with HTML and CSS", link: "https://github.com/yashan0202/Fet-s-Luck" },
  { title: "Kamakhya Jwellers", description: "A Jwellery-Website Interference build as a Front-End Development project using HTML, CSS and JavaScript", link: "https://github.com/yashan0202/Jwellery-Website" },
  { title: "React Native Application", description: "React Native application paired with comprehensive end-to-end tests written using Maestro. The project showcases how to set up an environment, generate a React Native application, and write effective tests to ensure the application works as intended.", link: "https://github.com/yashan0202/React-Native-Application" },
  { title: "Resume Builder", description: "The Resume Builder is a dynamic and customizable tool developed using React. It allows users to create, edit, and manage their resumes by adding various sections tailored to their professional and personal profiles. ", link: "https://github.com/yashan0202/Resume-Builder" },

];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
