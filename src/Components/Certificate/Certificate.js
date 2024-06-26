import React, { useState } from 'react';
import './Certificate.css';
import fullstack from '../../assets/image/Fullstack.png';
import HTML from '../../assets/image/HTML.png';
import css from '../../assets/image/css.png';
import Boots from '../../assets/image/Bootstarp.png';
import javascript from '../../assets/image/Javascript.png';
import RReact from '../../assets/image/React.png';
import mysql from '../../assets/image/Mysql.png';
import mongodb from '../../assets/image/MongoDB.png';
import nodejs from '../../assets/image/node.png';
import Autocad from '../../assets/image/autocad.jpg'; // Import internshala image
import Autocadpdf from '../../assets/pdf/internshala/AutoCAD Training - Certificate of Completion (1).pdf'; // Assuming this is the PDF link for internshala

import Autocad3d from '../../assets/image/autocad 3d.png'
import Autocad3dpdf from '../../assets/pdf/internshala/AutoCAD 3D Training - Certificate of Completion (2).pdf';

import xl from '../../assets/image/xl.jpg';
import xlpsf from '../../assets/pdf/internshala/Advanced Excel Training - Certificate of Completion.pdf'


import react from '../../assets/image/reactlogo.png';
import reactpdf from '../../assets/pdf/internshala/React Training - Certificate of Completion.pdf'


import plc from '../../assets/image/plc.jpg';
import plcpdf from '../../assets/pdf/internshala/PLC Programming Training - Certificate of Completion.pdf';

import udemy from '../../assets/image/uiux.jpg';
import udemypdf from '../../assets/pdf/udemyuiux.pdf';

import uiux from '../../assets/image/ui.jpg';
import uipdf from '../../assets/pdf/uiuxintershala.pdf';
function Appcertificate() {
  const [activeTab, setActiveTab] = useState('guvi');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const certificateData = [
    {
      category: 'guvi',
      cradimg: fullstack,
      cardname: 'Full stack Development',
      cardbtn: fullstack,
    },
    {
      category: 'guvi',
      cradimg: HTML,
      cardname: 'HTML',
      cardbtn: HTML,
    },
    {
      category: 'guvi',
      cradimg: css,
      cardname: 'CSS',
      cardbtn: css,
    },
    {
      category: 'guvi',
      cradimg: Boots,
      cardname: 'Bootstrap',
      cardbtn: Boots,
    },
    {
      category: 'guvi',
      cradimg: javascript,
      cardname: 'JavaScript',
      cardbtn: javascript,
    },
    {
      category: 'guvi',
      cradimg: RReact,
      cardname: 'ReactJS',
      cardbtn: RReact,
    },
    {
      category: 'guvi',
      cradimg: mysql,
      cardname: 'MySQL',
      cardbtn: mysql,
    },
    {
      category: 'guvi',
      cradimg: mongodb,
      cardname: 'MongoDB',
      cardbtn: mongodb,
    },
    {
      category: 'guvi',
      cradimg: nodejs,
      cardname: 'NodeJS',
      cardbtn: nodejs,
    },
    // {
    //   category: 'internshala',
    //   cradimg: Autocad,
    //   cardname: 'Autocad',
    //   cardbtn: Autocadpdf,
    // },
    // {
    //   category: 'internshala',
    //   cradimg: Autocad3d,
    //   cardname: 'Autocad 3D',
    //   cardbtn: Autocad3dpdf,
    // },
    {
      category: 'internshala',
      cradimg: uiux,
      cardname: 'UI UX',
      cardbtn: uipdf,
    },
    {
      category: 'internshala',
      cradimg: react,
      cardname: 'React',
      cardbtn: reactpdf,
    },
    // {
    //   category: 'internshala',
    //   cradimg: plc,
    //   cardname: 'PLC Programming',
    //   cardbtn: plcpdf,
    // },
    {
      category: 'Udemy',
      cradimg: udemy,
      cardname: 'Complete Web & Mobile Designer: UI/UX, Figma, +more',
      cardbtn: udemypdf,
    }

  ];

  const filteredCertificates = certificateData.filter(certificate => certificate.category === activeTab);

  return (
    <div className="container-fluid col-10">
      <section id="certificate">
        <h1 className="head">My Achievement</h1>
        <div className="tab">
          <button className={`tablinks ${activeTab === 'guvi' ? 'active' : ''}`} onClick={() => handleTabChange('guvi')}>Guvi</button>
          <button className={`tablinks ${activeTab === 'internshala' ? 'active' : ''}`} onClick={() => handleTabChange('internshala')}>Internshala</button>
          <button className={`tablinks ${activeTab === 'Udemy' ? 'active' : ''}`} onClick={() => handleTabChange('Udemy')}>Udemy</button>
        </div>
        <div className="row">
          {filteredCertificates.map((certificate, index) => (
            <div className="col-md-4 my-2" key={index}>
              <div className="card shadow">
                <div className="inner">
                  <img src={certificate.cradimg} className="card-img-top" alt={certificate.cardname} />
                </div>
                <div className="card-body nn">
                  <h5 className="card-title text-center">{certificate.cardname}</h5>
                  <a href={certificate.cardbtn} type="button" target="_blank" className="btn btn-success my-lg-3 my-3 bt" rel="noopener noreferrer">
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
