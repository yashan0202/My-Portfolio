import React from "react";
import "./CertificationsAndMore.css";

const CertificationsAndMore = () => {
  return (
    <section className="certifications-more" id="certifications-more">
      <div className="container">
        <h2 className="section-title">Certifications & More</h2>

        <div className="content">
          <div className="certifications">
            <h3>Certifications & Professional Courses</h3>
            <ul>
              <li>
                <a
                  href="https://coursera.org/certificate/react-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React JS Developer Certification - Coursera
                </a>
              </li>
              <li>
                <a
                  href="https://udemy.com/full-stack-development"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full-Stack Web Development - Udemy
                </a>
              </li>
              <li>
                <a
                  href="https://online.stanford.edu/machine-learning"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Machine Learning Specialization - Stanford Online
                </a>
              </li>
            </ul>
          </div>

          <div className="work-experience">
            <h3>Work Experience</h3>
            <ul>
              <li>Full Stack Developer Intern at XYZ Tech Solutions</li>
              <li>Backend Engineer Intern at ABC Corporation</li>
            </ul>
          </div>

          <div className="extra-curricular">
            <h3>Extra-Curricular Activities</h3>
            <ul>
              <li>Organized a hackathon at university with 300+ participants</li>
              <li>Volunteered as a coding mentor for high school students</li>
              <li>Active member of the Drama Club and Robotics Team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndMore;
