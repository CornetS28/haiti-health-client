import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// MUI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Components
import Navbar from "./components/Navbar";
import themeObjectContent from "./util/theme";

// Pages
import mainHome from "./pages/mainHome";
import signup from "./pages/signup";
import login from "./pages/login";
import ophtalmologyHome from "./pages/ophtalmologyHome";
import generalSurgeryHome from "./pages/generalSurgeryHome";
import urologyHome from "./pages/urologyHome";

const theme = createMuiTheme(themeObjectContent);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={mainHome} />
                <Route exact path="/signup" component={signup} />
                <Route exact path="/login" component={login} />
                <Route
                  exact
                  path="/ophtalmology"
                  component={ophtalmologyHome}
                />
                <Route exact path="/urology" component={urologyHome} />
                <Route
                  exact
                  path="/general-surgery"
                  component={generalSurgeryHome}
                />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
