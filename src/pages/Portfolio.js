import React from 'react'
import '../styles/Portfolio.scss';
import om from '../img/om.png';
import linked from '../img/linked.png';
import upwork from '../img/upwork.png';
import whatsapp from '../img/whatsapp.png';
import Cards from "./Cards.js";
const Portfolio =() => {
  
    return (
      <div className="portfo">
        <div className="presentation">
          <p>
            <h1 className="salut">Hello</h1>
            <h2 className="descript">Loveste is a passionate Web and Mobile developer<br/> Who loves robotics and everything related to new technology</h2>
            <a className="ico_taf" href="https://www.linkedin.com/in/ou%C3%A9zizalovesteom">
              <img className="lien_ico" src={linked} alt="contact Ouéziza Loveste Om"/>
            </a>
            <a className="ico_taf" href="https://www.upwork.com/ab/flservices/cl/api/public/org/1278566646136963073">
              <img className="lien_ico" src={upwork} alt="contact Ouéziza Loveste Om"/>
            </a>
            <a className="ico_taf" href="">
              <img className="lien_ico" src={whatsapp} alt="contact Ouéziza Loveste Om"/>
            </a>
            

          </p>
           <img className="img_my" src={om} alt="Ouéziza Loveste Om"/>
        </div>

        <div className="apprentissage">

          <h1>Area of expertise</h1>
          <div className="cardss">
            <Cards/>
          </div>


        </div>
          
      </div>
    )
  
};

export default Portfolio;
