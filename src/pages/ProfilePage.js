import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <div className="profile-container">
      {/* Profile Banner */}
      <div className="profile-banner"></div>

      {/* Profile Image & Text Directly on the Page */}
      <div className="profile-image"></div>
      <h2 className="profile-name">Adrianne John G. Camus</h2>
      <p className="profile-info">3rd Year Computer Engineering</p>
      <p className="profile-info">Cebu Institute of Technology - University</p>

      {/* Profile Content (Side by Side Layout) */}
      <div className="profile-content">
        {/* Contact Information */}
        <aside className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: adriannejohn.camus@cit.edu</p>
          <p>Email: adriannejohncamusofficial@gmail.com</p>
          <p>Phone: +639128187945</p>
          <div className="reviews">
            <p>Reviews: <strong>5.0</strong></p>
            <p>⭐⭐⭐⭐⭐ (100 reviews)</p>
          </div>
          <button className="chat-btn">CHAT</button>
        </aside>

        {/* Tabs & Panels */}
        <main className="main-content">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === "Projects" ? "active" : ""}`} 
              onClick={() => setActiveTab("Projects")}
            >
              Projects
            </button>
            <button 
              className={`tab ${activeTab === "Education" ? "active" : ""}`} 
              onClick={() => setActiveTab("Education")}
            >
              Education
            </button>
            <button 
              className={`tab ${activeTab === "Eskells" ? "active" : ""}`} 
              onClick={() => setActiveTab("Eskells")}
            >
              Eskells
            </button>
          </div>

          <div className="panel-content">
            {activeTab === "Projects" && (
              <div className="panel">
                <h3>FURWELL</h3>
                <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum...</p>
                <img src="furwell.png" alt="Furwell Project" className="project-image" />
              </div>
            )}
            {activeTab === "Education" && (
              <div className="panel">
                <h3>Education</h3>
                <p>Details about education go here...</p>
              </div>
            )}
            {activeTab === "Eskells" && (
              <div className="panel">
                <h3>Eskells</h3>
                <p>Details about Eskells go here...</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
