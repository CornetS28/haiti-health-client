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
    fontSize: 14,
    marginBottom: -9,
  },
  staticText: {
    fontWeight: "bold",
  },
  userImg: {
    left: "3%",
    position: "relative",
  },
  patientHistory: {
    color: theme.palette.primary.main,
  },
  section: {
    marginTop: "5%",
    margin: "auto",
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
  },
  section1: {
    marginBottom: 30,
    margin: "auto",
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
  },
  topInfo: {
    display: "flex",
  },
  doctorNote: {
    backgroundColor: theme.palette.secondary.lightest,
    height: "97%",
    width: 330,
    marginLeft: 60,
    marginTop: 10,
    textAlign: "center",
    borderRadius: '3%',
  },
});

class FullPatientinfo extends Component {
 
  render() {
     const { classes } = this.props;
    return (
      <Grid container spacing={4}>
        <div className={classes.topInfo}>
          <div className={classes.userImg}>
            <UserImage />
          </div>
          <div className={classes.doctorNote}>
            <h4>Latest Doctor Note:</h4>
            <Divider className={classes.divider} />
          </div>
        </div>
        <h4 className={classes.section}>Personal Info</h4>
        <Grid item sm={12} xs={12} className={[classes.gridRowWrapper]}>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>First Name: </span>
                <span className={classes.patientHistory}>
                  James Brooks
                </span>{" "}
              </p>
            </div>
          </Grid>

          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Last Name: </span>
                <span className={classes.patientHistory}>Hills</span>
              </p>
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
              <p>
                <span className={classes.staticText}>Age: </span>
                <span className={classes.patientHistory}>29</span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Phone: </span>
                <span className={classes.patientHistory}>+509 2373 2233</span>
              </p>
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
              <p>
                <span className={classes.staticText}>Address: </span>
                <span className={classes.patientHistory}>
                  32, Rue Clervau, Petion-ville
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Marital Status: </span>
                <span className={classes.patientHistory}>Maried</span>
              </p>
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <h4 className={classes.section1}>Emergency Contact</h4>
        <Grid
          item
          sm={12}
          xs={12}
          className={[classes.gridRowWrapper, classes.spacingTop]}
        >
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>
                  Emergency Contact Name:{" "}
                </span>
                <span className={classes.patientHistory}>
                  Mrs. Clark Hearald
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>
                  Emergency Contact Relation:{" "}
                </span>{" "}
                <span className={classes.patientHistory}>Father</span>
              </p>
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
              <p>
                <span className={classes.staticText}>
                  Emergency Contact Email:
                </span>
                <span className={classes.patientHistory}>
                  {" "}
                  father@gmail.com
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Phone: </span>
                <span className={classes.patientHistory}>+509 2373 2233</span>
              </p>
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
              <p>
                <span className={classes.staticText}>Address: </span>
                <span className={classes.patientHistory}>
                  32, Rue Clervau, Petion-ville
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Marital Status: </span>
                <span className={classes.patientHistory}>Maried</span>
              </p>
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
              <p>
                <span className={classes.staticText}>Emergency Contact: </span>
                <span className={classes.patientHistory}>
                  Mrs. Clark Hearald
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Weight: </span>{" "}
                <span className={classes.patientHistory}>78</span>
              </p>
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
              <p>
                <span className={classes.staticText}>Age: </span>
                <span className={classes.patientHistory}>29</span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Phone: </span>
                <span className={classes.patientHistory}>+509 2373 2233</span>
              </p>
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <h4 className={classes.section1}>Frequent Illnesses</h4>
        <Grid
          item
          sm={12}
          xs={12}
          className={[classes.gridRowWrapper, classes.spacingTop]}
        >
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Address: </span>
                <span className={classes.patientHistory}>
                  32, Rue Clervau, Petion-ville
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Marital Status: </span>
                <span className={classes.patientHistory}>Maried</span>
              </p>
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
              <p>
                <span className={classes.staticText}>Emergency Contact: </span>
                <span className={classes.patientHistory}>
                  Mrs. Clark Hearald
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Weight: </span>{" "}
                <span className={classes.patientHistory}>78</span>
              </p>
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
              <p>
                <span className={classes.staticText}>Age: </span>
                <span className={classes.patientHistory}>29</span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Phone: </span>
                <span className={classes.patientHistory}>+509 2373 2233</span>
              </p>
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
              <p>
                <span className={classes.staticText}>Address: </span>
                <span className={classes.patientHistory}>
                  32, Rue Clervau, Petion-ville
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Marital Status: </span>
                <span className={classes.patientHistory}>Maried</span>
              </p>
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
              <p>
                <span className={classes.staticText}>Emergency Contact: </span>
                <span className={classes.patientHistory}>
                  Mrs. Clark Hearald
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Weight: </span>{" "}
                <span className={classes.patientHistory}>78</span>
              </p>
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <h4 className={classes.section1}>Diagnostic</h4>
        <Grid
          item
          sm={12}
          xs={12}
          className={[classes.gridRowWrapper, classes.spacingTop]}
        >
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Emergency Contact: </span>
                <span className={classes.patientHistory}>
                  Mrs. Clark Hearald
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Weight: </span>{" "}
                <span className={classes.patientHistory}>78</span>
              </p>
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
    );
  }
}

export default withStyles(styles)(FullPatientinfo);
