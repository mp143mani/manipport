import React from "react";
import myimage from "../../assets/image/myyy.jpg";
import "./About.css"

function About() {
  return (
    <div className="container-fluid col-10 d-flex flex-column align-items-center">
      <h1 id="about" className="text-center" style={{ marginTop: "90px" }}>
        About
      </h1>
      <div className="col-md-4 my-2 nn carddd1">
        <div className="card shadow carddd1">
          <div className="inner">
            <img src={myimage} className="card-img-top cc1" alt="My Image" style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="card-body ">
            <h5 className="card-title ">MANIVENKATRAJ M</h5>
            <h6 style={{ marginBottom: "1.5rem" }}>
              Full stack web and mobile developer with background knowledge of
              MERN stacks with redux, along with a knack of building
              applications with utmost efficiency. Strong professional with a
              Full Stack Web Development willing to be an asset for an Guvi.
            </h6>
            <ul className="list-styled" style={{ textAlign: "start", listStyleType: "square" }}>
              <li>I am fully Interested only FrontEnd</li>
              <li>Interactive Front End as per the design</li>
              <li>Redux for State Management</li>
              <li>React Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
