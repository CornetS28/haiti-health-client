import React, { Component } from "react";
import Link from "react-router-dom/Link";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import logo from "../../images/doctor.svg";

// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const styles = {
  logo: {
    width: '40px',
    height: '40px',
    marginRight: "10px",
    zIndex: 3,
  },
};

class Navbar extends Component {
  render() {
    const { classes } = this.props
    return (
      <AppBar>
        <Toolbar className="navbar-container">
          <div className={classes.logo}>
           
            <img
            src={logo}
            alt="logo"
          />
          </div>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
};

Navbar.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
