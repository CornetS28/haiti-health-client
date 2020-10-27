import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import UserImage from '../../components/UserImage'

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";



const styles = (theme) => ({
  ...theme.palette.primary,
  gridRowWrapper: {
    display: "flex",
  },
  divider: {
    color: "red",
    // margin: "auto",
    width: "100%",
    marginTop: -20,
    // marginTop: -40,
  },
  spacingTop: {
    marginTop: -40,
  },
  singleInfo: {
    display: "flex",
  },
  userImg: {
    left: "3%",
    position: "relative",
  },
  patientHistory: {
    color: theme.palette.primary.main,
  },
});

class FullPatientinfo extends Component {
 
  render() {
     const { classes } = this.props;
    return (
      <Grid container spacing={4}>
        <div className={classes.userImg}>
          <UserImage />
        </div>

        <Grid item sm={12} xs={12} className={[classes.gridRowWrapper]}>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <h4>
                First Name:{" "}
                <span className={classes.patientHistory}>James Brooks</span>{" "}
              </h4>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <h4>
                Last Name: <span className={classes.patientHistory}>Hills</span>
              </h4>
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid
          item
          sm={12}
          xs={12}
          className={[classes.gridRowWrapper, classes.spacingTop]}
        >
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <h4>
                Age: <span className={classes.patientHistory}>29</span>{" "}
              </h4>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <h4>
                Phone: <span className={classes.patientHistory}>+509 2373 2233</span>
              </h4>
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid
          item
          sm={12}
          xs={12}
          className={[classes.gridRowWrapper, classes.spacingTop]}
        >
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <h4>
                Address:{" "}
                <span className={classes.patientHistory}>32, Rue Clervau, Petion-ville</span>{" "}
              </h4>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <h4>
               Marital Status: <span className={classes.patientHistory}>Maried</span>
              </h4>
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid
          item
          sm={12}
          xs={12}
          className={[classes.gridRowWrapper, classes.spacingTop]}
        >
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <h4>
                Emergency Contact:{" "}
                <span className={classes.patientHistory}>Mrs. Clark Hearald</span>{" "}
              </h4>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <h4>
                Weight: <span className={classes.patientHistory}>Hills</span>
              </h4>
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
    );
  }
}

export default withStyles(styles)(FullPatientinfo);
