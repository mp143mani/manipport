import manilogo from "../../assets/image/Logo.0268ac4ba8f24691976d.png";
import crm from "../../assets/image/crm.jpg";
import veg from "../../assets/image/veg-combo-1.jpg"
import Port from "../../assets/image/port.jpg";
import React from "react";
import "./Project.css";

const Project = ({ projectdata }) => {
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
              {projectdata.livebtn && (
                <a
                  href={projectdata.livebtn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success my-2"
                >
                  Live Demo
                </a>
              )}
              {projectdata.frontbtn && (
                <a
                  href={projectdata.frontbtn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success my-2"
                >
                  Frontend
                </a>
              )}
              {projectdata.backbtn && (
                <a
                  href={projectdata.backbtn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success my-2"
                >
                  Backend
                </a>
              )}
              {projectdata.backbtnl && (
                <a
                  href={projectdata.backbtnl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success my-2"
                >
                  Backend Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Appproject = () => {

  // Define URLs for projects
  const mani1 = "https://adorable-griffin-ca3ebe.netlify.app/";
  const mani2 = "https://github.com/mp143mani/manitfronend.git";
  const mani3 = "https://github.com/mp143mani/manitbackend.git";
  const manibackl = "https://backendmanitech.onrender.com/";

  const crml = "https://crmcrm.netlify.app/";
  const crmf = "https://github.com/mp143mani/crmfront.git";
  const crmb = "https://github.com/mp143mani/crmback.git";
  const crmbl = "https://backendcrm-66ya.onrender.com/";

  const vegl = "https://vegetablemart.netlify.app/";
  const vegf = "https://github.com/mp143mani/pfrontend.git";
  const vegb = "https://github.com/mp143mani/pbackend.git";
  const vegbl = "https://backendp-n8dl.onrender.com/";

 

  const portl ="https://manivenkatrajm.netlify.app/";
  const portf="https://github.com/mp143mani/manipport.git";

  const projectdata = [
    {
      cardimg: manilogo,
      cardname: "ManitechWorld",
      carddes:
        "This project is an online institution dashboard for Coordinator, teacher, and student management system, covered by MongoDB, Express, React, and Node.js",
      livebtn: mani1,
      frontbtn: mani2,
      backbtn: mani3,
      backbtnl: manibackl
    },
    {
      cardimg: crm,
      cardname: "Customer Relationship Management System",
      carddes:
        "A CRM system designed to help businesses manage and enhance interactions and relationships with customers, developed using MongoDB, Express, React, and Node.js",
      livebtn: crml,
      frontbtn: crmf,
      backbtn: crmb,
      backbtnl: crmbl
    },
    {
      cardimg: veg,
      cardname: "Kmart",
      carddes:
        "An online vegetable shop providing a convenient way to access high-quality produce, developed using MongoDB, Express, React, and Node.js",
      livebtn: vegl,
      frontbtn: vegf,
      backbtn: vegb,
      backbtnl: vegbl
    },
    {
      cardimg: Port,
      cardname: "My portfolio",
      carddes:"This my frontend developer portfolio! With expertise in ReactJS, I design captivating user interfaces. Let's collaborate to craft seamless web experiences.",
      livebtn: portl,
      frontbtn: portf,
      backbtn: false,
      backbtnl: false
    }
  ];

  return (
    <div className="container-fluid col-10 ji">
      <section id="project">
        <h1 className="head">My Projects</h1>
        <div className="row">
          {projectdata.map((e, i) => {
            return <Project projectdata={e} key={i} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Appproject;
