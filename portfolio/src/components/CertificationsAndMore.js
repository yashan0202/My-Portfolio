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
                  href="https://www.coursera.org/account/accomplishments/professional-cert/N15FW3PSDAS9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meta Front-End Developer - Meta
                </a>
              </li>
              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/TK8XBZYRELLN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React JS Developer Certification - Coursera
                </a>
              </li>
              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/38TJZ2TZFUGW"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Neural Networks and Deep Learning - DeepLearning.AI
                </a>
              </li>
              <li>
                <a
                  href="https://www.cloudskillsboost.google/public_profiles/02f136e5-9df5-4725-8352-00f8ad959842/badges/6075364"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction to Generative AI - Google
                </a>
              </li>
              <li>
                <a
                  href="https://moonshot.scaler.com/s/sl/Wstx7c8M8z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Structures & Algorithms - Scaler
                </a>
              </li>
              <li>
                <a
                  href="https://www.credly.com/badges/e38d450a-00dd-4ef8-ae78-0d59b951052a/print"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS Cloud - Amazon Web Services
                </a>
              </li>
            </ul>
          </div>

          <div className="work-experience">
            <h3>Work Experience</h3>
            <ul>
              <li>Front-End Software Developer at Skyscanner - <b>2024</b></li>
              <li>Global Finance and Business Management Intern at JPMorgan&Chase - <b>2024</b></li>
              <li>Full Stack Developer Intern at GroIntern - <b>2023</b></li>
              <li>UI/UX Developer Intern at GeeksforGeeks - <b>2021</b></li>
            </ul>
          </div>

          <div className="extra-curricular">
            <h3>Extra-Curricular Activities</h3>
            <ul>
              <li>Writing <b>Blog on latest Tech</b> on LinkedIn</li>
              <li>Served as a <b>Co-ordinator of the Fashion Society “KRYSTAL”</b>, KIIT University</li>
              <li>Led my college's <b>Event Management Committee</b></li>
              <li>Participated in <b>GitHub Hands-on Workshop</b> organized by GitHub</li>
              <li>Volunteered for <b>Rotaract Club of Bhubaneswar</b> for Social Cause</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndMore;
