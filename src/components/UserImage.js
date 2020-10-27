import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import userImage from "../images/profile.png";

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
    "& .user-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "3%",
    },
  },
});

class UserImage extends Component {
  render() {
    const { classes } = this.props;

    let userPhoto = (
      <Paper classeName={classes.paper}>
        <div className={classes.image}>
          <div className="user-image">
            <img src={userImage} alt="user-image" className="user-image" />
          </div>
        </div>
      </Paper>
    );
    return userPhoto;
  }
}
const mapStateToProps = (state) => ({
  // user: state.user
});

UserImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserImage);
