import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import CustomedButton from '../util/CustomedButton'

//MUI
import Grid from "@material-ui/core/Grid";
// Icons
import AddIcon from '@material-ui/icons/Add';

const styles = (theme) => ({
  ...theme.palette.primary,
  ...theme.palette.secondary,
  gridHeader: {
    fontSize: "139%",
    textAlign: "center",
    marginTop: 120,
  },
  gridHeader2: {
    fontSize: "19px",
    textAlign: "center",
    marginTop: 20,
  },
  scheduleAppointmentWrapper: {
    width: "100%",
    height: "20%",
    marginBottom: -40,
  },
  addIcon: {
    fontSize: 34,
  },
  tipColor: {
    color: theme.palette.primary.main,
  },
});

class ScheduleAnAppointment extends Component {
  render() {
     const {
       classes,
       scheduleAppointmentBtn,
       departmentTitle,
       consonant,
       specialist,
     } = this.props;
    return (
      <Grid className={classes.scheduleAppointmentWrapper}>
        <div className={classes.textHeaderAndBtn}>
        <h5 className={classes.gridHeader}>
          {scheduleAppointmentBtn}
          <CustomedButton
            tip={"meet a" + `${consonant}` + ` ${specialist}`}
            tipClassName={classes.tipColor}
            onClick={() => alert("Add a form here")}
          >
            <AddIcon className={classes.addIcon} />
          </CustomedButton>
        </h5>
        </div>
        <h6 className={classes.gridHeader2}>
          About {departmentTitle} Department
        </h6>
      </Grid>
    );
  }
};

ScheduleAnAppointment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScheduleAnAppointment);
