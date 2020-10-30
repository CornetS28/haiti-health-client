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
    width: "100%",
    marginTop: -20,
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
    borderRadius: "3%",
  },
  doctorNoteContent: {
    // backgroundColor: "yellow",
    fontSize: 12,
  },
  doctorNoteWrapper: {
    overflowY: "scroll",
    height: 145,
   
  },

  doctorNoteDate: {
    // backgroundColor: "pink",
    color: theme.palette.secondary.main,
    float: "right",
    fontSize: 12,
    fontStyle: "italic",
    width: "100%",
    paddingRight: '-40%'
  },
  dividerDoctorNote: {
    marginLeft: 10,
    marginRight: 10,
   
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
            <div className={classes.doctorNoteWrapper}>
              <div className={classes.doctorNote2}>
                <p className={classes.doctorNoteDate}>Jan. 4th, 2019</p>
                <p className={classes.doctorNoteContent}>
                  patient need to be on medecin Urgently. Need some C vitamins
                  too.
                </p>
              </div>
              <Divider className={classes.dividerDoctorNote} />
              <div className={classes.doctorNote2}>
                <p className={classes.doctorNoteDate}>Jan. 4th, 2019</p>
                <p className={classes.doctorNoteContent}>
                  patient need to be on medecin Urgently. Need some C vitamins
                  too.
                </p>
              </div>
              <Divider className={classes.dividerDoctorNote} />
              <div className={classes.doctorNote2}>
                <p className={classes.doctorNoteDate}>Jan. 4th, 2019</p>
                <p className={classes.doctorNoteContent}>
                  patient need to be on medecin Urgently. Need some C vitamins
                  too.
                </p>
              </div>
              <Divider className={classes.dividerDoctorNote} />
            </div>
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
        <Grid
          item
          sm={12}
          xs={12}
          className={[classes.gridRowWrapper, classes.spacingTop]}
        >
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Email: </span>
                <span className={classes.patientHistory}>
                  john@gmail.com
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Weight: </span>
                <span className={classes.patientHistory}>78g</span>
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
                <span className={classes.staticText}>Sex: </span>
                <span className={classes.patientHistory}>Male</span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Date Od Birth: </span>
                <span className={classes.patientHistory}>April 21, 1990</span>
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
                <span className={classes.staticText}>Height(inches): </span>
                <span className={classes.patientHistory}>79</span>{" "}
              </p>
            </div>
          </Grid>
          {/* <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Date Of Birth: </span>
                <span className={classes.patientHistory}>April 21, 1990</span>
              </p>
            </div>
          </Grid> */}
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
                <span className={classes.staticText}>Contact Name: </span>
                <span className={classes.patientHistory}>
                  Mrs. Clark Hearald
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Contact Relation: </span>{" "}
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
                <span className={classes.staticText}>Contact Email:</span>
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
                <span className={classes.staticText}>Contact Phone: </span>
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
                <span className={classes.staticText}>
                  Currently Taken Any Medications:{" "}
                </span>
                <span className={classes.patientHistory}>Yes</span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>For What Illnesses: </span>
                <span className={classes.patientHistory}>
                  Genital Infection, Fever
                </span>
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
                  Latest Hopital Visited:{" "}
                </span>
                <span className={classes.patientHistory}>Hopital Espoir</span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Doctor (optional): </span>{" "}
                <span className={classes.patientHistory}>N/A</span>
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
                  Reason for Registration:{" "}
                </span>
                <span className={classes.patientHistory}>
                  Would like to make a complete check up. Blablabla
                </span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>More ABout You: </span>
                <span className={classes.patientHistory}>N/A</span>
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
                <span className={classes.staticText}>Illinesses: </span>
                <span className={classes.patientHistory}>Turbeculous</span>{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>
                <span className={classes.staticText}>Recommendation: </span>{" "}
                <span className={classes.patientHistory}>Blablabla</span>
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
