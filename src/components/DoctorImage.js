import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import doctorImage from "../images/profile.png";

//MUI stuff
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  paper: {
    paddingLeft: 20,
  },
  image: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
    },
    "& .doctor-image": {
      width: 150,
      height: 150,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "3%",
    },
  },
});

class DoctorImage extends Component {
  render() {
    const { classes } = this.props;

    let userPhoto = (
      <Paper classeName={classes.paper}>
        <div className={classes.image}>
          <div className="doctor-image">
            <img src={doctorImage} alt="doctor-portrait" className="doctor-image" />
          </div>
        </div>
      </Paper>
    );
    return userPhoto;
  }
}
// const mapStateToProps = (state) => ({
//   // user: state.user
// });

DoctorImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DoctorImage);
