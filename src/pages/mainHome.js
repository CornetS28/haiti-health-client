import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// Components
import Theme from "../util/theme";

//MUI
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  gridTitle: {
    fontSize: "30px",
    textAlign: "center",
  },
  gridContent: {
    height: "100px",
    width: "100%",
    paddingBottom: "1rem",
  },
  departmentBtn: {
    width: "100%",
    height: "100%",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  },
  departmentText: {
    margin: "auto",
    color: Theme.palette.primary.main,
  },
  departmentImage: {
    backgroundColor: "grey",
    width: "20%",
    height: "85px",
    marginRight: "-16px",
  },
  gridWrapperImage: {
    height: "calc(100vh - 104px)",
    marginLeft: "1rem",
  },
  hopitalImage: {
    backgroundColor: "grey",
    width: "100%",
    height: "100%",
  },
};

class mainHome extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={36}>
        <Grid item sm={8} xs={12} className={classes.gridWrapper}>
          <p className={classes.gridTitle}>Our Departments</p>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Urology</h1>
              <div className={classes.departmentImage}>image</div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Urology</h1>
              <div className={classes.departmentImage}>image</div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Urology</h1>
              <div className={classes.departmentImage}>image</div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Urology</h1>
              <div className={classes.departmentImage}>image</div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Urology</h1>
              <div className={classes.departmentImage}>image</div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Urology</h1>
              <div className={classes.departmentImage}>image</div>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} className={classes.gridContent}>
            <Button
              variant="contained"
              color={Theme.palette.primary.contrastText}
              className={classes.departmentBtn}
            >
              <h1 className={classes.departmentText}>Urology</h1>
              <div className={classes.departmentImage}>image</div>
            </Button>
          </Grid>
        </Grid>

        <Grid item sm={4} xs={12} className={classes.gridTitle}>
          <p className={classes.gridTitle}>Haiti's Health</p>
          <Grid item sm={12} xs={12} className={classes.gridWrapperImage}>
            <div className={classes.hopitalImage}></div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(mainHome);
