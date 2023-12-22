import React from 'react';
import fullstack from '../../assets/image/Fullstack.png';
import HTML from '../../assets/image/HTML.png';
import css from '../../assets/image/css.png';
import Boots from '../../assets/image/Bootstarp.png';
import javascript from '../../assets/image/Javascript.png';
import RReact from '../../assets/image/React.png';
import mysql from '../../assets/image/Mysql.png';
import mongodb from '../../assets/image/MongoDB.png';
import nodejs from '../../assets/image/node.png';
import './Certificate.css';

function Appcertificate() {
  const Certificatedata = [
    {
      cradimg: fullstack,
      cardname: 'Full stack Development',
      cardbtn: fullstack,
    },
    {
      cradimg: HTML,
      cardname: 'HTML',
      cardbtn: HTML,
    },
    {
      cradimg: css,
      cardname: 'CSS',
      cardbtn: css,
    },
    {
      cradimg: Boots,
      cardname: 'Bootstrap',
      cardbtn: Boots,
    },
    {
      cradimg: javascript,
      cardname: 'JavaScript',
      cardbtn: javascript,
    },
    {
      cradimg: RReact,
      cardname: 'ReactJS',
      cardbtn: RReact,
    },
    {
      cradimg: mysql,
      cardname: 'MySQL',
      cardbtn: mysql,
    },
    {
      cradimg: mongodb,
      cardname: 'MongoDB',
      cardbtn: mongodb,
    },
    {
      cradimg: nodejs,
      cardname: 'NodeJS',
      cardbtn: nodejs,
    },
    // Add more certificates if needed
  ];

  return (
    <div className="container-fluid col-10">
      <section id="certificate">
        <h1 className="head">My Achievement</h1>
        <div className="row">
          {Certificatedata.map((certificate, index) => (
            <div className="col-md-4 my-2" key={index}>
              <div className="card shadow">
                <div className="inner">
                  <img src={certificate.cradimg} className="card-img-top" alt={certificate.cardname} />
                </div>
                <div className="card-body nn">
                  <h5 className="card-title text-center">{certificate.cardname}</h5>
                  <a
                    href={certificate.cardbtn}
                    type="button"
                    target="_blank"
                    className="btn btn-success my-lg-3 my-3 bt"
                    rel="noopener noreferrer"
                  >
                    View certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Appcertificate;
