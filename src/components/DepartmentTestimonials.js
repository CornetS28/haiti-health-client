import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

//MUI
import Divider from "@material-ui/core/Divider";

const styles = (theme) => ({
  ...theme.palette.primary,
  ...theme.palette.secondary,

  testimialsText: {
    color: theme.palette.primary.contrastText,
    fontStyle: "italic",
    marginLeft: 10,
    marginRight: 10,
  },
  postTimeAndAuthor: {
    fontSize: 12,
    width: "95%",
    textAlign: "right",
    marginTop: -15,
    color: theme.palette.dark.main,
  },
  authorPost: {
    fontStyle: "italic",
    color: theme.palette.secondary.lighter,
  },
  dividerPost: {
    margin: "-5px 10px 10px 5px",
    backgroundColor: theme.palette.secondary.lighter,
  },
});

class DepartmentTestimonials extends Component {
  render() {
    const { classes, testimony, author, date } = this.props;
    return (
      <>
        <h6 className={classes.testimialsText}>{testimony}</h6>{" "}
        <p className={classes.postTimeAndAuthor}>
          by <span className={classes.authorPost}>{author}</span>, {date}
        </p>
        <Divider className={classes.dividerPost} />
      </>
    )
  }
};
DepartmentTestimonials.propTypes = {
  classes: PropTypes.object.isRequired,
  testimony: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default withStyles(styles)(DepartmentTestimonials);
