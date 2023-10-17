import React from "react";

function Skill({ skill }) {
  const progressBarStyle = {
    width: `${skill.width}%`,
    fontSize: "18px", // Increase the font size to make the text larger
    background: 'linear-gradient(90deg, rgb(100, 183, 755), rgb(238, 45, 1255))', // Add linear gradient background
  };

  const progressContainerStyle = {
    height: "30px", // Increase the height of the progress container
  };

  return (
    <div>
      <h5>{skill.title}</h5>
      <div className="progress rounded-circle" style={progressContainerStyle}>
        <div
          className="progress-bar rounded"
          role="progressbar"
          style={progressBarStyle}
          aria-valuenow={skill.width}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {skill.percentage}%
        </div>
      </div>
    </div>
  );
}

export default Skill;
