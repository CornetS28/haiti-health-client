import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import UserImage from "../../components/UserImage";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const styles = (theme) => ({
  ...theme.palette.primary,
  gridRowWrapper: {
    display: "flex",
  },
  divider: {
    width: "95%",
    marginTop: -20,
    margin: "auto",
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
    marginLeft: "4%",
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

  doctorNoteWrapper: {
    backgroundColor: theme.palette.secondary.lightest,
    // height: "97%",
    width: 330,
    borderRadius: "3%",
    marginLeft: 60,
    marginTop: 10,
  },
  scrollableContent: {
    overflowY: "scroll",
    height: 155,
    marginLeft: 10,
    marginTop: 10,
  },

  doctorNoteTitle: {
    textAlign: "center",
    color: theme.palette.dark.main,
    marginTop: 10,
  },
  doctorNoteContent: {
    marginLeft: 10,
    marginRight: 10,
  },
  doctorNoteContent: {
    fontSize: 12,
  },
  doctorNoteStaticText: {
    color: theme.palette.dark.main,
    fontWeight: "bold",
    marginTop: -2,
    marginBottom: 2,
  },
  patientStateValue: {
    color: theme.palette.secondary.main,
    fontWeight: "normal",
  },
  doctorNoteDate: {
    fontStyle: "italic",
    color: theme.palette.primary.main,
    marginTop: -1,
    paddingLeft: "70%",
  },
  dividerDoctorNote: {
    margin: "-5px 10px 10px 5px",
  },
  extremeUrgent: {
    color: theme.palette.emergencyColor.extremeUrgent,
    fontWeight: "normal",
  },
  urgent: {
    color: theme.palette.emergencyColor.urgent,
    fontWeight: "normal",
  },
  notTooUrgent: {
    color: theme.palette.emergencyColor.notTooUrgent,
    fontWeight: "normal",
  },
  normal: {
    color: theme.palette.primary.main,
    fontWeight: "normal",
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
          <div className={classes.doctorNoteWrapper}>
            <h4 className={classes.doctorNoteTitle}>Latest Doctor Note:</h4>
            <Divider className={classes.divider} />
            <div className={classes.scrollableContent}>
              <div className={classes.doctorNoteContent}>
                <p className={classes.doctorNoteStaticText}>
                  Patient State:{" "}
                  <span className={classes.extremeUrgent}> Extreme Urgent</span>
                </p>
                <p className={classes.doctorNoteStaticText}>
                  Current Medication Taken:{" "}
                  <span className={classes.patientStateValue}>
                    {" "}
                    Amoxisilin 500g
                  </span>
                </p>

                <p className={classes.doctorNoteStaticText}>
                  Recommendation:{" "}
                  <span className={classes.patientStateValue}>
                    {" "}
                    patient need to be on medecin Urgently. Need some C vitamins
                    too. patient need to be on medecin Urgently. Need some C
                    vitamins too. patient need to be on medecin Urgently. Need
                    some C vitamins too. patient need to be on medecin Urgently.
                    Need some C vitamins too. 500g
                  </span>
                </p>
                <p className={classes.doctorNoteDate}>Jan. 4th, 2014</p>
              </div>
              <Divider className={classes.dividerDoctorNote} />

              <div className={classes.doctorNoteContent}>
                <p className={classes.doctorNoteStaticText}>
                  Patient State: <span className={classes.urgent}>Urgent</span>
                </p>
                <p className={classes.doctorNoteStaticText}>
                  Current Medication Taken:{" "}
                  <span className={classes.patientStateValue}>
                    {" "}
                    Amoxisilin 500g
                  </span>
                </p>

                <p className={classes.doctorNoteStaticText}>
                  Recommendation:{" "}
                  <span className={classes.patientStateValue}>
                    {" "}
                    patient need to be on medecin Urgently. Need some C vitamins
                    too. patient need to be on medecin Urgently. Need some C
                    vitamins too. patient need to be on medecin Urgently. Need
                    some C vitamins too. patient need to be on medecin Urgently.
                    Need some C vitamins too. 500g
                  </span>
                </p>
                <p className={classes.doctorNoteDate}>Jan. 4th, 2014</p>
              </div>
              <Divider className={classes.dividerDoctorNote} />

              <div className={classes.doctorNoteContent}>
                <p className={classes.doctorNoteStaticText}>
                  Patient State:{" "}
                  <span className={classes.notTooUrgent}>Not Too Urgent</span>
                </p>
                <p className={classes.doctorNoteStaticText}>
                  Current Medication Taken:{" "}
                  <span className={classes.patientStateValue}>
                    {" "}
                    Amoxisilin 500g
                  </span>
                </p>

                <p className={classes.doctorNoteStaticText}>
                  Recommendation:{" "}
                  <span className={classes.patientStateValue}>
                    {" "}
                    patient need to be on medecin Urgently. Need some C vitamins
                    too. patient need to be on medecin Urgently. Need some C
                    vitamins too. patient need to be on medecin Urgently. Need
                    some C vitamins too. patient need to be on medecin Urgently.
                    Need some C vitamins too. 500g
                  </span>
                </p>
                <p className={classes.doctorNoteDate}>Jan. 4th, 2014</p>
              </div>
              <Divider className={classes.dividerDoctorNote} />

              <div className={classes.doctorNoteContent}>
                <p className={classes.doctorNoteStaticText}>
                  Patient State: <span className={classes.normal}> Normal</span>
                </p>
                <p className={classes.doctorNoteStaticText}>
                  Current Medication Taken:{" "}
                  <span className={classes.patientStateValue}>
                    {" "}
                    Amoxisilin 500g
                  </span>
                </p>

                <p className={classes.doctorNoteStaticText}>
                  Recommendation:{" "}
                  <span className={classes.patientStateValue}>
                    {" "}
                    patient need to be on medecin Urgently. Need some C vitamins
                    too. patient need to be on medecin Urgently. Need some C
                    vitamins too. patient need to be on medecin Urgently. Need
                    some C vitamins too. patient need to be on medecin Urgently.
                    Need some C vitamins too. 500g
                  </span>
                </p>
                <p className={classes.doctorNoteDate}>Jan. 4th, 2014</p>
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
                <span className={classes.staticText}>Date Of Birth: </span>
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
FullPatientinfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullPatientinfo);
