import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// MUI Stuff
import Divider from "@material-ui/core/Divider";

const styles = (theme) => ({
  ...theme.palette.primary,
  doctorNoteContent: {
    marginLeft: 10,
    marginRight: 10,
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
  doctorNoteNameAndDate: {
    marginTop: "-2.9px",
    fontSize: 10,
  },
  doctorNoteDate: {
    fontStyle: "italic",
    color: theme.palette.primary.main,
    paddingLeft: "44%",
  },
  dividerDoctorNote: {
    margin: "-5px 10px 10px 5px",
  },
  doctorFullName: {
    color: theme.palette.secondary.main,
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

class DoctorNotes extends Component {
  render() {
    const {
      classes,
      patientState,
      currentMedicationTaken,
      recommendation,
      doctorNoteDate,
      doctorName,
    } = this.props;

    let patientStateColor = [];
    if (patientState === "Normal") {
      patientStateColor.push(classes.normal);
    } else if (patientState === "Not Too Urgent") {
      patientStateColor.push(classes.notTooUrgent);
    } else if (patientState === "Urgent") {
      patientStateColor.push(classes.urgent);
    } else {
      patientStateColor.push(classes.extremeUrgent);
    }
    return (
      <div className={classes.doctorNoteContent}>
        <p className={classes.doctorNoteStaticText}>
          Patient State:{" "}
          <span className={patientStateColor}> {patientState}</span>
        </p>
        <p className={classes.doctorNoteStaticText}>
          Current Medication Taken:{" "}
          <span className={classes.patientStateValue}>
            {currentMedicationTaken}
          </span>
        </p>

        <p className={classes.doctorNoteStaticText}>
          Recommendation:{" "}
          <span className={classes.patientStateValue}>{recommendation}</span>
        </p>
        <div className={classes.doctorNoteNameAndDate}>
          {" "}
          <p className={classes.doctorNoteDate}>
            {" "}
            by <span className={classes.doctorFullName}>{doctorName}, </span>
            {doctorNoteDate}
          </p>
        </div>
        <Divider className={classes.dividerDoctorNote} />
      </div>
    );
  }
}
DoctorNotes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DoctorNotes);
