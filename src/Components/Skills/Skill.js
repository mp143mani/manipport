import React from "react";

function Skill({ skill }) {
  const progressBarStyle = {
    width: `${skill.width}%`,
    fontSize: "18px", // Increase the font size to make the text larger
  };

  const progressContainerStyle = {
    height: "30px", // Increase the height of the progress container
  };

  return (
    <div>
      <h5>{skill.title}</h5>
      <div className="progress" style={progressContainerStyle}>
        <div
          className="progress-bar"
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
