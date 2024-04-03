import React from "react";
import { useNavigate } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [typei] = useTypewriter({
    words: ["Electrical Engineering", "FrontEnd Developer", "React Developer"],
    loop: true, // Specify loop as true to continuously loop through the words
    typeSpeed: 150,
    delaySpeed: 50,
  });

  return (
    <div className="maincontainer" id="home">
      <div className="profile2">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://github.com/mp143mani"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github fa-2x" style={{ color: "#c2c2c2" }}></i>
              </a>
              <a
                href="https://www.linkedin.com/in/manivenktraj-m-560b20287/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin fa-2x" style={{ color: "#0A66C2" }}></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Manivenkatraj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                I'm a
                <span style={{ fontWeight: "bold", color: "green", paddingLeft: "25px" }}>
                  {typei}
                </span>
              </h1>

              <span className="profile-role-info">
                I have always had a great desire, becoming more of a person where I can find challenges in the work environment
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => window.location.href = 'mailto:mani143tech@gmail.com'}>
              Hire Me
            </button>

            <a
              href="https://drive.google.com/file/d/1wNo0wTkwsW6fkYwuP8YoEEKjzI15VBGe/view?usp=sharing"
              target="_blank"
              download="mani ehizcv.pdf"
              rel="noreferrer"
            >
              <button className="btn primary-btn">Download</button>
            </a>

            <a href="https://wa.me/916379567674?text=hi"><button className="btn primary-btn">WhatsApp</button></a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-parent">
          <img
            src={require("../../assets/Home/shape-bg.png")}
            alt="no internet connection"
          />
        </div>
      </div>
    </div>
  );
}
