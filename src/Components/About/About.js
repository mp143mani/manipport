// import React from "react";
// import "./About.css";
// import myimage from "../../assets/image/18TUEE103.jpeg";

// function About() {
//   return (
//     <div className="container-fluid col-10 d-flex flex-column align-items-center">
//       <h1 id="about" className="text-center" style={{ marginTop: "90px" }}>
//         About
//       </h1>
//       <div className="col-md-4 my-2 nn carddd1">
//         <div className="card shadow carddd1">
//           <div className="inner">
//             <img src={myimage} className="card-img-top cc1" />
//           </div>
//           <div className="card-body ">
//             <h5 className="card-title text-center">MANIVENKATRAJ M</h5>
//             <h6>
//               Full stack web and mobile developer with background knowledge of
//               MERN stacks with redux, along with a knack of building
//               applications with utmost efficiency. Strong professional with a
//               Full Stack Web Development willing to be an asset for an Guvi.
//               <br />
//               <br />
//             </h6>
//             <ul className="list-styled">
//               <li>I am UI UX Designer</li>
//               <li>I am Full stack development</li>
//               <li>Interactive Front End as per the design</li>
//               <li>Redux for State Management</li>
//               <li>Managing database</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from "react";
import "./About.css";
import myimage from "../../assets/image/18TUEE103.jpeg";

function About() {
  return (
    <div className="container-fluid col-10 d-flex flex-column align-items-center">
      <h1 id="about" className="text-center" style={{ marginTop: "90px" }}>
        About
      </h1>
      <div className="col-md-6 my-2 ">
        <div className="card shadow ">
          <div className="row">
            {/* Column for image (on all devices) */}
            <div className="col-xxl-6">
              <div className="inner">
                <img src={myimage} className="card-img-top cc1" alt="My Image" />
              </div>
            </div>

            {/* Column for details (on all devices) */}
            <div className="col-xxl-6">
              <div className="card-body">
                <h5 className="card-title text-center">MANIVENKATRAJ M</h5>
                <h6>
                  Full stack web and mobile developer with background knowledge of
                  MERN stacks with redux, along with a knack of building
                  applications with utmost efficiency. Strong professional with a
                  Full Stack Web Development willing to be an asset for an Guvi.
                  <br />
                  <br />
                </h6>
                <ul className="list-styled">
                  <li>I am UI UX Designer</li>
                  <li>I am Full stack development</li>
                  <li>Interactive Front End as per the design</li>
                  <li>Redux for State Management</li>
                  <li>Managing database</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

