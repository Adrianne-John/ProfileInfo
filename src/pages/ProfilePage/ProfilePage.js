import React, { useState } from "react";
import "./ProfilePage.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaStar, FaCommentDots } from "react-icons/fa";

const ProfilePage = () => {

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
                                <FaEnvelope className="contact-icon" /> Gmail: haha cute
                            </p>
                            <p className="contact-linkedin">
                                <FaLinkedin className="contact-icon" /> Linked-In: adri
                            </p>
                            <p className="contact-github">
                                <FaGithub className="contact-icon" /> Github: adri
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
              <div className="adri-main-content">
                {/* Add content here if needed */}
              </div>
            </div>
          </div>
        </div>
      );
};

export default ProfilePage;
