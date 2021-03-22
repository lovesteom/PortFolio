import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import '../styles/Cards.scss';
import wordpress from "../img/wordpress.png";
import html from "../img/html-5.png";
import css from "../img/css.png";
import android from "../img/android.png";
import java from "../img/java.png";
import c from "../img/c.png";
import cplus from "../img/cplus.png";
import cshar from "../img/cshar.png";


const Cards =() => {
  
    return (
      <div className="cardss">


        <div className="comp">
          <ReactBootStrap.Card className="designCard">
              <ReactBootStrap.Card.Img variant="top" src={html} className="igmCard" />
                <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>HTML</ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text className="text">
                  Langage de balisage utilisé pour la création de pages web,<br/> permettant notamment de définir des liens hypertextes.
                </ReactBootStrap.Card.Text>
                  
              </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>

        <div className="comp">
          <ReactBootStrap.Card className="designCard">
              <ReactBootStrap.Card.Img variant="top" src={wordpress} className="igmCard" />
                  <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title>WordPress</ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text className="text">
                  WordPress est un système de gestion de contenu gratuit, libre et open-source.<br/> Ce logiciel écrit en PHP repose sur une base de données MySQL<br/> et est distribué par la fondation WordPress.org
                  </ReactBootStrap.Card.Text>
              </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>

        <div className="comp">
          <ReactBootStrap.Card className="designCard">
              <ReactBootStrap.Card.Img variant="top" src={css} className="igmCard" />
                  <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title>CSS 3</ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text className="text">
                  CSS désigne Cascading Style Sheets (pour Feuilles de style en cascade).<br/>
                   Il s'agit d'un langage de style .<br/>
                    En effet, le CSS s’intéresse à la mise en forme du contenu intégré avec du HTML.
                  </ReactBootStrap.Card.Text>
              </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>

        <div className="comp">
          <ReactBootStrap.Card className="designCard">
              <ReactBootStrap.Card.Img variant="top" src={android} className="igmCard" />
                  <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title>Android</ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text className="text">
                  Android est un système d'exploitation mobile fondé sur le noyau Linux et développé par Google.
                  </ReactBootStrap.Card.Text >
              </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>

        <div className="comp">
          <ReactBootStrap.Card className="designCard">
              <ReactBootStrap.Card.Img variant="top" src={java} className="igmCard" />
                  <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title>Java</ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text className="text">
                  Java est un langage de programmation et une plate-forme <br/>informatique qui ont été créés par Sun Microsystems en 1995.<br/>
                  </ReactBootStrap.Card.Text>
              </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>

        <div className="comp">
          <ReactBootStrap.Card className="designCard">
              <ReactBootStrap.Card.Img variant="top" src={c} className="igmCard" />
                  <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title>C</ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text className="text">
                  C est un langage de programmation impératif généraliste.
                  </ReactBootStrap.Card.Text>
              </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>

        <div className="comp">
          <ReactBootStrap.Card className="designCard">
              <ReactBootStrap.Card.Img variant="top" src={cplus} className="igmCard" />
                  <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title>C++</ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text className="text">
                  Le C++ est le langage de programmation le plus utilisé par les développeurs,<br/> notamment en ce qui concerne les applications.
                  </ReactBootStrap.Card.Text>
              </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>

        <div className="comp">
          <ReactBootStrap.Card className="designCard">
              <ReactBootStrap.Card.Img variant="top" src={cshar} className="igmCard" />
                  <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title>C#</ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text className="text">
                  C# est un langage de programmation orientée objet,<br/> commercialisé par Microsoft depuis 2002 et destiné à développer sur la plateforme Microsoft .NET.
                  </ReactBootStrap.Card.Text>
              </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>
        
      </div>
    )
  
};

export default Cards;
