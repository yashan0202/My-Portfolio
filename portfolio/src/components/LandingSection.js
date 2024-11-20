import React from "react";
import "./LandingSection.css";

const LandingSection = () => {
  return (
    <section id="landing" className="landing">
      <img src="/pic.png" alt="Avatar" className="avatar" />
      <h1>Yash Anand</h1>
      <p>I am the monkey out of HC Verma. Ask me about MERN, React, BitCoin & Universe. I’m currently working on a Full Stack Music/Video streaming application that is a mixture of (YouTube+Spotify+Shazam)</p>

      <div className="resume-box">
          <h3></h3>
          <a
            href="https://drive.google.com/file/d/1jd5p34xn4YrE3HEgryR-JBXtJzY15h27/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            Download Resume
          </a>
        </div>
    </section>
    
  );
};

export default LandingSection;
