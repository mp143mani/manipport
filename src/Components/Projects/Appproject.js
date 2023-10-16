import React from "react";
import Project from "./Project";
import zen from '../../assets/image/zen.png'
import sbadmin from '../../assets/image/it.jpg'


function Appproject() {
    let zenl ="https://manitechinstitution.netlify.app/"
    let zenf ="https://github.com/mp143mani/frontend"
    let zenb = "https://github.com/mp143mani/zen"

    let sbl ="https://frabjous-taiyaki-b98703.netlify.app/dashboard"
    let sbf ="https://github.com/mp143mani/management"
    
    const projectdata= [
        {
            cardimg:sbadmin,
            cardname:"ZEN dashboard",
            carddes:"This project is online institution dashboard for Cordinator,teacher and student management system",
            livebtn:zenl,
            frontbtn:zenf,
            backbtn:zenb
        },
        {
            cardimg:sbadmin,
            cardname:"ZEN dashboard",
            carddes:"This project is online institution dashboard for Cordinator,teacher and student management system",
            livebtn:zenl,
            frontbtn:zenf,
            backbtn:zenb
        },
        {
            cardimg:sbadmin,
            cardname:"Student and Teacher Manahement",
            carddes:"This project is SB admin for student and teacher curd operation",
            livebtn: sbl,
            frontbtn:sbf
            
        }
    ]
  return (
    <div className="container-fluid col-10  ">
            <section id="project">
                <h1 className="head">My Projects</h1>
                <div className="row">
          {
            projectdata.map((e,i)=>{
                return <Project projectdata={e} key={i}/>
            })
          }
        </div>
      </section>
    </div>
  );
}

export default Appproject;
