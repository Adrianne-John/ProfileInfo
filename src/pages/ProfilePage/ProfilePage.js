import React, { useState } from "react";
import "./ProfilePage.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaStar, FaCommentDots } from "react-icons/fa";
import dajbanking from "../images/dajbanking.png";
import furwell from "../images/furwell.png";
import swiftSail from "../images/swiftsail.png";
import teknoSpace from "../images/teknospace.png";
import adri1 from "../images/adri1.jpg";
import adri2 from "../images/adri2.jpg";
import adri3 from "../images/adri3.jpg";
import adri4 from "../images/adri4.png";


const ProfilePage = () => {
  const [activePanel, setActivePanel] = useState("projects");

  return (
    <div className="profile-container">
      <div className="profile-banner"></div>
      <div className="adri-info">
        <div className="adri-img-container"></div>
        <div className="adri-name-container">
          <h1 className="adri-name">Adrianne John G. Camus</h1>
          <h3 className="adri-title">3rd Year Computer Engineering Student</h3>
          <h3 className="adri-school">Cebu Institute of Technology - University</h3>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="adri-contact-container">
          <div className="contact-info-container">
            <h2 className="contact-title">Contact Information</h2>
            <p className="contact-gmail">
              <FaEnvelope className="contact-icon" /> haha cute
            </p>
            <p className="contact-linkedin">
              <FaLinkedin className="contact-icon" /> adri
            </p>
            <p className="contact-github">
              <FaGithub className="contact-icon" /> adri
            </p>
            <p className="contact-loc">
              <FaMapMarkerAlt className="contact-icon" /> Apas, Cebu City
            </p>
            <div className="review-container">
              <p className="review-title">Reviews:</p>
              <div className="star-container">
                <FaStar className="review-icon" />
                <FaStar className="review-icon" />
                <FaStar className="review-icon" />
                <FaStar className="review-icon" />
                <FaStar className="review-icon" />
              </div>
              <p className="review-count">(100 reviews)</p>
              <button className="review-btn">
                <FaCommentDots className="comment-icon" /> Write A Review
              </button>
            </div>
          </div>
        </div>
        <div className="adri-main-container">
          <div className="panels-container">
            <div
              className={`panel-button ${activePanel === "projects" ? "active" : ""}`}
              onClick={() => setActivePanel("projects")}
            >
              Projects
            </div>
            <div
              className={`panel-button ${activePanel === "techStack" ? "active" : ""}`}
              onClick={() => setActivePanel("techStack")}
            >
              Tech Stack
            </div>
            <div
              className={`panel-button ${activePanel === "aboutMe" ? "active" : ""}`}
              onClick={() => setActivePanel("aboutMe")}
            >
              About Me
            </div>
          </div>
          <div className="adri-main-content">
            {activePanel === "projects" && (
              <div>
                <h3>1. FurWell</h3>
                <h4>Full-Stack Developer</h4>
                <p className="proj-duration">February - May 2025</p>
                <div className="content-image">
                  <img src={furwell} alt="Dog" />
                  <div className="content-text">
                    <p>
                    FurWell aims to streamline veterinary care by enabling online bookings for pet owners, allowing clinics to subscribe and manage appointments, and providing admins with analytics to oversee clinic operations efficiently.
                    </p>
                    <p>
                        ======================================================================
                    </p>
                  </div>
                </div>

                <h3>2. SwiftSail</h3>
                <h4>Front-End Developer</h4>
                <p className="proj-duration">September - December 2024</p>
                <div className="content-image">
                  <img src={swiftSail} alt="Dog" />
                  <div className="content-text">

                    <p>
                    SwiftSail seeks to simplify ferry travel by connecting companies to register their ferries and customers to book available trips, addressing the need for a convenient and centralized ferry booking platform.
                    </p>
                    <p>
                        ======================================================================
                    </p>
                  </div>
                </div>

                <h3>3. TeknoSpace</h3>
                <h4>Full-Stack Developer</h4>
                <p className="proj-duration">June - July 2024</p>
                <div className="content-image">
                  <img src={teknoSpace} alt="Dog" />
                  <div className="content-text">

                    <p>
                    TeknoSpace centralizes student resources by offering a platform for school updates, maintenance alerts, and lost-and-found postings by faculty, addressing the need for a unified communication hub for students.
                    </p>
                    <p>
                        ======================================================================
                    </p>
                  </div>
                </div>
                
                <h3>4. Daj Banking Management</h3>
                <h4>Full-Stack Developer</h4>
                <p className="proj-duration">February - May 2024</p>
                <div className="content-image">
                  <img src={dajbanking} alt="Dog" />
                  <div className="content-text">
                    <p>
                    Daj Banking Management simulates online banking for users to deposit, withdraw, and track transactions with receipts, while admins oversee operations, addressing the demand for a secure and user-friendly banking experience.
                    </p>
                  </div>
                </div>

              </div>

              
            )}
            {activePanel === "techStack" && (
              <div>
                <h3>Tech Stack</h3>
                
                <p align="left">
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a><a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" width="36" height="36" alt="C" /></a><a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg" width="36" height="36" alt="C#" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a><a href="https://www.php.net/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg" width="36" height="36" alt="PHP" /></a><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg" width="36" height="36" alt="VS Code" /></a><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a><a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a><a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" /></a><a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a><a href="https://store.arduino.cc/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arduino-colored.svg" width="36" height="36" alt="Arduino" /></a><a href="https://dotnet.microsoft.com/en-us/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg" width="36" height="36" alt=".NET" /></a>
</p>
              </div>
            )}
            {activePanel === "aboutMe" && (
              <div>
                <h3>About Me</h3>
                <div className="content-image-about">
                  <div className="image-slider">
                    <img src={adri1} alt="adri1" />
                    <img src={adri2} alt="adri2" />
                    <img src={adri3} alt="adri3" />
                    <img src={adri4} alt="adri4" />
                  </div>
                    <p>I'm a 3rd-year Computer Engineering student passionate about crafting interactive and user-friendly web applications. With a strong foundation in programming and a keen interest in web development, I enjoy building projects that blend creativity with technical expertise. My goal is to create impactful solutions through clean code and innovative design.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;