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
    left: '3%',
    position: 'relative',

  }
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
              <div className={classes.singleInfo}>
                <p>L0: James Brooks Hill </p>
              </div>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>Last: James Brooks Hill </p>
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
              <p>FirstName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>LastName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
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
              <p>FirstName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>LastName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
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
              <p>FirstName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>LastName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
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
              <p>FirstName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>LastName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
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
              <p>FirstName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>LastName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
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
              <p>FirstName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>LastName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
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
              <p>FirstName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
              </p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="">
            <div className={classes.singleInfo}>
              <p>LastName: </p>
              <p>
                {" "}
                <span> James Brooks Hill</span>
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FullPatientinfo);
