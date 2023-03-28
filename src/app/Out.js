import React from "react";
import Header from "./base/header";
import Footer from "./base/footer";
import Home from "./home";
import QuienesSomos from "./quienes_somos";
import Servicios from "./servicios";
import Contactenos from "./contactenos";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App=(props)=>{


  return  <>
            <Header/>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/quienes_somos">
                  <QuienesSomos/>
                </Route>
                <Route path="/servicios">
                  <Servicios/>
                </Route>
                <Route path="/contactenos">
                  <Contactenos/>
                </Route>
              </Switch>
            </Router>
            <Footer/>
          </>
}

export default App;
