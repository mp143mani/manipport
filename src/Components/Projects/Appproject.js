import React from "react";
import Project from "./Project";
import manilogo from "../../assets/image/Logo.0268ac4ba8f24691976d.png";
import crm from "../../assets/image/crm.jpg";
import veg from "../../assets/image/veg-combo-1.jpg"

function Appproject() {
  let mani1 = "https://adorable-griffin-ca3ebe.netlify.app/";
  let mani2 = "https://github.com/mp143mani/manitfronend.git";
  let mani3 = "https://github.com/mp143mani/manitbackend.git";
  let manibackl="https://backendmanitech.onrender.com/";

  let crml = "https://crmcrm.netlify.app/";
  let crmf ="https://github.com/mp143mani/crmfront.git";
  let crmb="https://github.com/mp143mani/crmback.git";
  let crmbl ="https://backendcrm-66ya.onrender.com/";

  let vegl = "https://vegetablemart.netlify.app/";
  let vegf ="https://github.com/mp143mani/pfrontend.git";
  let vegb ="https://github.com/mp143mani/pbackend.git";
  let vegbl="https://backendp-n8dl.onrender.com/";
  const projectdata = [
    {
      cardimg: manilogo,
      cardname: "ManitechWorld",
      carddes:
        "This project is online institution dashboard for Cordinator,teacher and student management system",
      livebtn: mani1,
      frontbtn: mani2,
      backbtn: mani3,
      backbtnl:manibackl
    },
      {
          cardimg:crm,
          cardname:"customer relationship management system",
          carddes:"A Customer Relationship Management (CRM) system is a software tool designed to help businesses manage and enhance their interactions and relationships with customers, enabling improved customer service and data-driven decision-making",
          livebtn:crml,
          frontbtn:crmf,
          backbtn:crmb,
          backbtnl:crmbl
      },
      {
        cardimg:veg,
        cardname:"Kmart",
        carddes:"An online vegetable shop is a web-based platform where customers can conveniently purchase fresh and diverse vegetables, often with home delivery services, providing a convenient and accessible way to access high-quality produce.",
        livebtn:vegl,
        frontbtn:vegf,
        backbtn:vegb,
        backbtnl:vegbl
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
}

export default Appproject;
