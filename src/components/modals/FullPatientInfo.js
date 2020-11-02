import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// Components
import UserImage from "../../components/UserImage";
import DoctorNotes from "../DoctorNotes"

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

const notes = [
  {
    patientState: "Extreme Urgent",
    doctorNoteDate: "Dec 31, 2012",
    doctorName: "ALicia Hope",
    recommendation: "Ampicilin 500mg",
    currentMedicationTaken:
      "patient need to be on medecin Urgently. Need some C vitamins too. patient need to be on medecin Urgently. Need some C vitamins too. patient need to be on medecin Urgently Need some C vitamins too. patient need to be on medecin Urgently. Need some C vitamins too. 500g",
  },
  {
    patientState: "Urgent",
    doctorNoteDate: "Jan 31, 2012",
    doctorName: "Dany Kenson",
    recommendation: "Amoxcisilin 500mg",
    currentMedicationTaken:
      "patient need to be on medecin Urgently. Need some C vitamins too. patient need to be on medecin Urgently. Need some C vitamins too. patient need to be on medecin Urgently Need some C vitamins too. patient need to be on medecin Urgently. Need some C vitamins too. 500g",
  },
  {
    patientState: "Not Too Urgent",
    doctorNoteDate: "Feb 11, 2012",
    doctorName: "Certil Remy",
    recommendation: "Dolostop",
    currentMedicationTaken:
      "patient need to be on medecin Urgently. Need some C vitamins too. patient need to be on medecin Urgently. Need some C vitamins too. patient need to be on medecin Urgently Need some C vitamins too. patient need to be on medecin Urgently. Need some C vitamins too. 500g",
  },
  {
    patientState: "Normal",
    doctorNoteDate: "Mar 31, 2012",
    doctorName: "Dany Kenson",
    recommendation: "Ampicilin 500mg",
    currentMedicationTaken:
      "patient need to be on medecin Urgently. Need some C vitamins too. patient need to be on medecin Urgently. Need some C vitamins too. patient need to be on medecin Urgently Need some C vitamins too. patient need to be on medecin Urgently. Need some C vitamins too. 500g",
  },
];

class FullPatientinfo extends Component {
  render() {
    const {
      classes
    } = this.props;
    let doctorNotes = notes.map((doctorNote) => (
      <DoctorNotes
        patientState={doctorNote.patientState}
        currentMedicationTaken={doctorNote.currentMedicationTaken}
        recommendation={doctorNote.recommendation}
        doctorName={doctorNote.doctorName}
        doctorNoteDate={doctorNote.doctorNoteDate}
      />
    ));
  
    return (
      <Grid container spacing={4}>
        <div className={classes.topInfo}>
          <div className={classes.userImg}>
            <UserImage />
          </div>
          <div className={classes.doctorNoteWrapper}>
            <h4 className={classes.doctorNoteTitle}>Latest Doctor Note:</h4>
            <Divider className={classes.divider} />
            <div className={classes.scrollableContent}>{doctorNotes}</div>
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
