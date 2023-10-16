import React from "react";
import Project from "./Project";
import manilogo from "../../assets/image/Logo.0268ac4ba8f24691976d.png";

function Appproject() {
  let mani1 = "https://zen--manitechinstitution.netlify.app/";
  let mani2 = "https://github.com/mp143mani/frontend";
  let mani3 = "https://github.com/mp143mani/zen";

  const projectdata = [
    {
      cardimg: manilogo,
      cardname: "ManitechWorld",
      carddes:
        "This project is online institution dashboard for Cordinator,teacher and student management system",
      livebtn: mani1,
      frontbtn: mani2,
      backbtn: mani3,
    },
    //   {
    //       cardimg:"",
    //       cardname:"",
    //       carddes:"",
    //       livebtn:"",
    //       frontbtn:"",
    //       backbtn:""
    //   },
    //   {
    //     cardimg:"",
    //     cardname:"",
    //     carddes:"",
    //     livebtn:"",
    //     frontbtn:"",
    //     backbtn:""
    // }
  ];
  return (
    <div className="container-fluid col-10  ">
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
