import React from "react";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  let navigate = useNavigate();
  const [typei] = useTypewriter({
    words: ["Electrical Engineering","FrontEnd Developer","React Developer"],
    loop: {},
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
                target="_blank" rel="noreferrer"
                onClick={() => navigate("https://github.com/mp143mani")}
              >
                <i
                  className="fab fa-github fa-2x"
                  style={{ color: "#c2c2c2" }}
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/in/manivenktraj-m-560b20287/"
                target="_blank" rel="noreferrer"
              >
                <i
                  className="fa-brands fa-linkedin fa-2x"
                  style={{ color: "#0A66C2" }}
                />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Manivenkatraj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                I'm a
                <span
                  style={{
                    fontWeight: "bold",
                    color: "green",
                    paddingLeft: "25px",
                  }}
                >
                  {typei}
                </span>
              </h1>

              <span className="profile-role-info">
                I have always had a great desire, becoming more of a person
                where I can find challenges in the work environment
              </span>
            </span>
          </div>
          <div className="profile-options">
          <button className="btn primary-btn" onClick={() => window.location.href = 'mailto:your.email@example.com'}> Hire Me </button>

            <a href="https://drive.google.com/file/d/1wNo0wTkwsW6fkYwuP8YoEEKjzI15VBGe/view?usp=sharing" target="_blank" download="mani ehizcv.pdf" rel="noreferrer">
              <button className="btn primary-btn" >Download</button>
            </a>
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
            alt="no internet conection"
          />
        </div>
      </div>
    </div>
  );
}
