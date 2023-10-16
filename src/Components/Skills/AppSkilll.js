import React from "react";
import "./Skill";
import Skill from "./Skill";

function AppSkilll() {
  const skills = [
    {
      title: "HTML",
      percentage: "70",
      width: "70",
    },
    {
      title: "CSS",
      percentage: "60",
      width: "60",
    },
    {
      title: "Bootstrap",
      percentage: "30",
      width: "30",
    },
    {
      title: "JavaScript",
      percentage: "7",
      width: "7",
    },
    {
      title: "React",
      percentage: "88",
      width: "88",
    },
    {
      title: "MySQl",
      percentage: "50",
      width: "50",
    },
    {
      title: "MongoDB",
      percentage: "60",
      width: "60",
    },
    {
      title: "NodeJS",
      percentage: "50",
      width: "50",
    },
  ];

  return (
    <div className="container-fluid col-10">
      
      <section id="home" style={{marginTop:"70px"}}>
        <h1 className="text-center" >My Skills</h1>
        {skills.map((skill, index) => (
          <Skill skill={skill} key={index} />
        ))}
      </section>
    </div>
  );
}

export default AppSkilll;