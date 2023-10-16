import React from 'react'
import Certificate from './Certificate'
import fullstack from '../../assets/image/Fullstack.png'
import HTML from '../../assets/image/HTML.png'
import css from '../../assets/image/css.png'
import Boots from '../../assets/image/Bootstarp.png'
import javascript from '../../assets/image/Javascript.png'
import RReact from '../../assets/image/React.png'
import mysql from '../../assets/image/Mysql.png'
import mongodb from '../../assets/image/MongoDB.png'
import nodejs from '../../assets/image/node.png'
import udemy from '../../assets/image/ud.jpg'
import './Certificate.css'



function Appcertificate() {
    const Certificatedata = [
        {
            cradimg: fullstack,
            cardname: "Full stack Development",
            cardbtn:fullstack
        },
        {
            cradimg: HTML,
            cardname: "HTML",
            cardbtn:HTML
        },
        {
            cradimg:css,
            cardname: "CSS",
            cardbtn:css
        },
        {
            cradimg:Boots,
            cardname: "Bootstrap",
            cardbtn:Boots
        },
        {
            cradimg:javascript,
            cardname: "JavaScript",
            cardbtn:javascript
        },
        {
            cradimg:RReact,
            cardname: "ReactJS",
            cardbtn:React
        },
        {
            cradimg:mysql,
            cardname: "MySQL",
            cardbtn:mysql
        },
        {
            cradimg:mongodb,
            cardname: "MongoDB",
            cardbtn:mongodb
        },
        {
            cradimg:nodejs,
            cardname: "NodeJS",
            cardbtn:nodejs
        }
        // {
        //     cradimg:intern,
        //     cardname: "Internshala",
        //     cardbtn:intern
        // }
        
    ]
    return (
        <div className="container-fluid col-10  ">
            <section id="certificate">
                <h1 className="head">My Achievement</h1>
                <div className="row">
                  {
                    Certificatedata.map((e,i)=>{
                        return <Certificate Certificatedata={e} key={i}/>
                    })
                  }

                </div></section>
        </div>
    )
}

export default Appcertificate