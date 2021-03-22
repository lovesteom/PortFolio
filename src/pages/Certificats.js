import React  from 'react'
import * as ReactBootStrap from "react-bootstrap";
import '../styles/Certificat.scss';
import C_by_coursera from "../img/certificats/C_by_coursera.png";
import  Cshar_unity_by_coursera from "../img/certificats/Cshar-unity_by_coursera.png";
import react_by_coursera from "../img/certificats/Font-end-react_by_coursera.png";
import html_by_coursera from "../img/certificats/Html5_by_coursera.png";
import java_by_coursera from "../img/certificats/Java-for-android_by_coursera.png";
import python_by_coursera from "../img/certificats/Python_by_coursera.png";
import wordpress_by_coursera from "../img/certificats/WordPress_by_coursera.png";


const Certification =()=> {
  
    return (
        <div className="proCertifi">
            <h1>My Certificats</h1>

            <div className="certificat">
                <div className="comp">
                <ReactBootStrap.Card className="designCard">
                    <ReactBootStrap.Card.Img variant="top" src={C_by_coursera} className="igmCard" />
                        <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Coursera -C for Everyone- Programming Fundamentals</ReactBootStrap.Card.Title>
                        
                        <ReactBootStrap.Button href="https://coursera.org/verify/FW6DNA5WC9TN" variant="primary">Verify the certificate</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                </div>
            </div>

            <div className="certificat">
                <div className="comp">
                <ReactBootStrap.Card className="designCard">
                    <ReactBootStrap.Card.Img variant="top" src={Cshar_unity_by_coursera} className="igmCard" />
                        <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Coursera Introduction to C# Programming and Unity</ReactBootStrap.Card.Title>
                        
                        <ReactBootStrap.Button href="https://coursera.org/verify/4TG52CB8K8FP" variant="primary">Verify the certificate</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                </div>
            </div>

            <div className="certificat">
                <div className="comp">
                <ReactBootStrap.Card className="designCard">
                    <ReactBootStrap.Card.Img variant="top" src={react_by_coursera} className="igmCard" />
                        <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Front-End Web Development with React</ReactBootStrap.Card.Title>
                        
                        <ReactBootStrap.Button  href="https://coursera.org/verify/S4SLVGS9ZCRQ" variant="primary">Verify the certificate</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                </div>
            </div>

            <div className="certificat">
                <div className="comp">
                <ReactBootStrap.Card className="designCard">
                    <ReactBootStrap.Card.Img variant="top" src={html_by_coursera} className="igmCard" />
                        <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Coursera HTML5</ReactBootStrap.Card.Title>
                        
                        <ReactBootStrap.Button href="https://coursera.org/verify/SM5LBZU8BJVS" variant="primary">Verify the certificate</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                </div>
            </div>

            <div className="certificat">
                <div className="comp">
                <ReactBootStrap.Card className="designCard">
                    <ReactBootStrap.Card.Img variant="top" src={java_by_coursera} className="igmCard" />
                        <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Coursera Java for Android</ReactBootStrap.Card.Title>
                        
                        <ReactBootStrap.Button href="https://coursera.org/verify/GL38HRTWWUW5" variant="primary">Verify the certificate</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                </div>
            </div>

            <div className="certificat">
                <div className="comp">
                <ReactBootStrap.Card className="designCard">
                    <ReactBootStrap.Card.Img variant="top" src={python_by_coursera} className="igmCard" />
                        <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Coursera Certificat Python</ReactBootStrap.Card.Title>
                        
                        <ReactBootStrap.Button href="https://coursera.org/verify/WPT47T73LZD9" variant="primary">Verify the certificate</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                </div>
            </div>

            <div className="certificat">
                <div className="comp">
                <ReactBootStrap.Card className="designCard">
                    <ReactBootStrap.Card.Img variant="top" src={wordpress_by_coursera} className="igmCard" />
                        <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>Coursera -Use WordPress to Create a Blog for your Business</ReactBootStrap.Card.Title>
                        
                        <ReactBootStrap.Button href="https://coursera.org/verify/L6ATEJ47MJ8A" variant="primary">Verify the certificate</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                </div>
            </div>
    </div>
    )
  
}
export default Certification;