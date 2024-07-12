import React from "react";

function AppSkilll() {
  const skills = [
    {
      title: "FrontEnd Technologies",
      percentage: "80",
      width: "80",
    },
    {
      title: "BackEnd Technologies",
      percentage: "40",
      width: "40",
    },
    {
      title: "HTML",
      percentage: "70",
      width: "7",
    },
    {
      title: "CSS",
      percentage: "80",
      width: "80",
    },
    {
      title: "Bootstrap",
      percentage: "70",
      width: "70",
    },
    {
      title: "JavaScript",
      percentage: "70",
      width: "70",
    },
    {
      title: "React",
      percentage: "88",
      width: "88",
    },

    {
      title: "NodeJS",
      percentage: "40",
      width: "40",
    },
    {
      title: "Figma",
      percentage: "90",
      width: "90",
    },
  ];

  const progressBarStyle = {
    fontSize: "18px", // Increase the font size to make the text larger
    background:
      "linear-gradient(90deg, rgb(100, 183, 755), rgb(238, 45, 1255))", // Add linear gradient background
  };

  const progressContainerStyle = {
    height: "30px", // Increase the height of the progress container
  };

  return (
    <div className="container-fluid col-10">
      <section id="home" style={{ marginTop: "70px" }}>
        <h1 className="text-center">My Skills</h1>
        {skills.map((skill, index) => (
          <div key={index}>
            <h5>{skill.title}</h5>
            <div
              className="progress rounded-circle"
              style={progressContainerStyle}
            >
              <div
                className="progress-bar rounded"
                role="progressbar"
                style={{
                  ...progressBarStyle,
                  width: `${skill.width}%`,
                }}
                aria-valuenow={skill.width}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {skill.percentage}%
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AppSkilll;
