import React from "react";
import Out from "./auth/login";
import RecoverPassNew from "./auth/recoverPassNew";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Out setModalShow={props.setModalShow} setUser={props.setUser} />
        </Route>
        <Route path="/recover">
          <RecoverPassNew setModalShow={props.setModalShow}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
