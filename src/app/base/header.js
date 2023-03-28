import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/beituzy/header/logo.svg'
import Config from '../../helpers/Config'
import Functions from '../../helpers/Functions'

import facebook from '../../assets/diana/header/Facebook2.svg'
import instagram from '../../assets/diana/header/instagram2.svg'
import twitter from '../../assets/diana/header/twitter2.svg'
import {  useScrollYPosition } from 'react-use-scroll-position';

const App=()=>{
  const scrollY   = useScrollYPosition();

  return  <Navbar expand="lg" bg="dark2" variant={scrollY<12?"dark nav-text-normal":"dark nav-text-white"} fixed="top">
            <Navbar.Brand href="#home" className="p-sm-4  ">
              <img src={logo} alt="pgrw" className="logo pt-4"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto parent">
                <Nav.Link href={Config.ConfigAppUrl} className={Functions.segment(1)===''?"border-primary-pgrw":""}>
                  Home
                </Nav.Link>
                <Nav.Link href={Config.ConfigAppUrl+"quienes_somos"} className={Functions.segment(1)==='quienes_somos'?"border-primary-pgrw":""}>
                  ¿Quiénes somos?
                </Nav.Link>
                <Nav.Link className={Functions.segment(1)==='servicios'?"border-primary-pgrw":""} href={Config.ConfigAppUrl+"servicios"}>Servicios</Nav.Link>
                <Nav.Link className={Functions.segment(1)==='contactenos'?"border-primary-pgrw":""} href={Config.ConfigAppUrl+"contactenos"}>Contáctenos</Nav.Link>
              </Nav>
              <Nav>
                <a className="p-2" href="https://www.facebook.com/Beituzy/" target="_blank">
                  <img className="redes" src={facebook} alt="facebook"/>
                </a>
                <a className="p-2" href="https://twitter.com/beituzy" eventKey={3} target="_blank">
                  <img className="redes" src={twitter} alt="twitter"/>
                </a>
                <a className="p-2" href="https://www.instagram.com/beituzy_/"  target="_blank" eventKey={2} >
                  <img className="redes" src={instagram} alt="instagram"/>
                </a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
}
export default App
