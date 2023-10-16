import React from "react";
import { useNavigate } from "react-router-dom";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  let navigate = useNavigate()
  return (
    <div className="profile-container" id="home">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
                
              <a  target="_blank" onClick={()=>navigate('https://github.com/mp143mani')}>
             <i className="fa-brands fa-github" style={{color: '#c2c2c2'}} />

             

              </a>
              <a href="https://www.linkedin.com/in/manivenktraj-m-560b20287/" target="_blank"><i className="fa-brands fa-linkedin" style={{color: '#0743ab'}} /></a>
             
            
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
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full stack Developer",
                    5000,
                    "UI/UX Designer",
                    5000,
                    //     "fddddddddds",
                    //     2000,
                    // "dfggrt",
                    //     2000,
                  ]}
                  wrapper="p"
                />
              </h1>
              <span className="profile-role-tagline">
                I have always had a great desire, becoming more of a person
                where I can find challenges in the work environment
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="ehizcv.pdf" download="mani ehizcv.pdf">
              <button className="btn primary-btn">Download</button>
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
