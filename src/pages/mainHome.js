import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "react-router-dom/Link";
import PropTypes from "prop-types";

import hospitalImage from "../images/hospital1.jpeg";
import urologyImage from "../images/urology.jpg";
import ophtalmologyImage from "../images/ophtalmology.jpg";
import generalSurgeryImage from "../images/general-surgery.jpeg";
import physiotherapyImage from "../images/physiotherapy.jpg";
import radiotherapyImage from "../images/radiotherapy.jpg";
import sexualHealthImage from "../images/sexual-health.jpeg";
import rheumatologyImage from "../images/rheumatology.jpg";


// Components
import Theme from "../util/theme";

//MUI
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  gridTitle: {
    fontSize: "25px",
    textAlign: "center",
  },
  gridContent: {
    height: "100px",
    width: "100%",
    paddingBottom: "1rem",
    position: "relative",
  },
  departmentBtn: {
    width: "100%",
    height: "100%",
    boxShadow: "10px 10px 5px #aaaaaa",
  },
  departmentText: {
    margin: "auto",
    color: Theme.palette.primary.main,
  },
  departmentImage: {
    maxWidth: "20%",
    height: "100%",
    marginRight: "-10px",
  },
  gridWrapperImage: {
    height: "calc(100vh - 114)",
    width: "98%",
    marginLeft: "1.5%",
  },
  hospitalImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
    display: "block",
  },
  departmentSectionImage: {
    maxWidth: "70%",
    objectFit: "contain",
    backgroundSize: "cover",
    marginRight: "-8px",
    position: "obsolute",
    maxHeight: "100%",
    margin: "auto",
    display: "block",
  },
};

class mainHome extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={36}>
        <Grid item sm={8} xs={12} className={classes.gridWrapper}>
          <h5 className={classes.gridTitle}>Our Departments</h5>

          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
              component={Link}
              to="/urology"
            >
              <h1 className={classes.departmentText}>Urology</h1>
              <div className={classes.departmentImage}>
                <img
                  src={urologyImage}
                  alt="urology"
                  className={classes.departmentSectionImage}
                />
              </div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              component={Link}
              to="/ophtalmology"
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Ophtalmology</h1>
              <div className={classes.departmentImage}>
                <img
                  src={ophtalmologyImage}
                  alt="ophtalmology"
                  className={classes.departmentSectionImage}
                />
              </div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
              component={Link}
              to="/general-surgery"
            >
              <h1 className={classes.departmentText}>General Surgery</h1>
              <div className={classes.departmentImage}>
                <img
                  src={generalSurgeryImage}
                  alt="general-surgery"
                  className={classes.departmentSectionImage}
                />
              </div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Physiotherapy</h1>
              <div className={classes.departmentImage}>
                <img
                  src={physiotherapyImage}
                  alt="physiotherapy"
                  className={classes.departmentSectionImage}
                />
              </div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Radiotherapy</h1>
              <div className={classes.departmentImage}>
                {" "}
                <img
                  src={radiotherapyImage}
                  alt="radiotherapy"
                  className={classes.departmentSectionImage}
                />
              </div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Sexual Health</h1>
              <div className={classes.departmentImage}>
                <img
                  src={sexualHealthImage}
                  alt="sexual-health"
                  className={classes.departmentSectionImage}
                />
              </div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Rheumatology</h1>
              <div className={classes.departmentImage}>
                <img
                  src={rheumatologyImage}
                  alt="rheumatologyimage"
                  className={classes.departmentSectionImage}
                />
              </div>
            </Button>
          </Grid>
        </Grid>

        <Grid item sm={4} xs={12}>
          <h5 className={classes.gridTitle}>Haiti's Health</h5>
          <Grid item sm={12} xs={12} className={classes.gridWrapperImage}>
            <div className={classes.hopitalImage}>
              <img
                src={hospitalImage}
                alt="hospital"
                className={classes.hospitalImage}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
mainHome.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(mainHome);
