import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import './App.css';

// Pages
import mainHome from './pages/mainHome';
import signup from "./pages/signup";
import login from "./pages/login";
import ophtalmologyHome from "./pages/ophtalmologyHome";
import generalSurgeryHome from "./pages/generalSurgeryHome";
import urologyHome from "./pages/urologyHome";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={mainHome} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/login" component={login} />
          <Route exact path="/ophtalmology" component={ophtalmologyHome} />
          <Route exact path="/urology" component={urologyHome} />
          <Route
            exact
            path="/general-surgery-home"
            component={generalSurgeryHome}
          />
        </Switch>
      </Router>

      <h1> Haiti Hospital </h1>
    </div>
  );
}

export default App;
