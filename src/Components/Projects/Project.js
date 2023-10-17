import React from "react";
import "./Project.css";

function Project({ projectdata }) {
  return (
    <div className="card horizontal-card my-4">
      <div className="row no-gutters">
        <div className="col-md-6">
          <img src={projectdata.cardimg} alt={projectdata.cardname} className="card-img" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h2 className="card-title">{projectdata.cardname}</h2>
            <p className="card-text">{projectdata.carddes}</p>
            <div className="buttons">
              <a
                href={projectdata.livebtn}
                target="_blank"
                className="btn btn-success my-2"
              >
                Live Demo
              </a>
              <a
                href={projectdata.frontbtn}
                target="_blank"
                className="btn btn-primary my-2"
              >
                Frontend
              </a>
              <a
                href={projectdata.backbtn}
                target="_blank"
                className="btn btn-info my-2"
              >
                Backend
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
