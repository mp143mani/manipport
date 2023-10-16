import React from "react";
import "./Project.css";

function Project({ projectdata }) {
  return (
    <div className="col-md-4 my-2">
      <div className="card shadow">
        <div className="inner">
          <img src={projectdata.cardimg} className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{projectdata.cardname} </h5>
          <div className="card-text">{projectdata.carddes}</div>
          <a
            href={projectdata.livebtn}
            type="button" target="_blank"
            className="btn btn-success my-lg-3 my-3"
          >
            Live Demo
          </a>
          <a
            href={projectdata.frontbtn}
            type="button" target="_blank"
            className="btn btn-success my-lg-3 my-3"
          >
            Frontend
          </a>
          <a
            href={projectdata.backbtn}
            type="button" target="_blank"
            className="btn btn-success my-lg-3 my-3"
          >
            Backend
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
