
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter,Switch , Route} from "react-router-dom";
import Portfolio from "./pages/Portfolio.js";
import Certification from "./pages/Certificats";
import logo from './img/logo.png';
function App() {
  return (
    <div className="App">
      
          

      <ReactBootStrap.Navbar  className="nav" collapseOnSelect expand="lg"  variant="dark">
          <ReactBootStrap.Navbar.Brand href="/portfolio">
            <img className="logo" src={logo} alt="logo "/>Ouéz-Corp</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto">
                
              </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link >Tel : +229 67264246 </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link >Email : lovesteom@gmail.com / lovesteset@gmail.com</ReactBootStrap.Nav.Link>
                
             
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
      <BrowserRouter>

      <Switch>
        <Route path="/portfolio" exact component={Portfolio}/>
        <Route path="/certification" exact component={Certification}/>
      </Switch>
      </BrowserRouter>
      <Portfolio/>
      <div className="epaisseur">

      </div>
      <Certification/>
    </div>
  );
}

export default App;
