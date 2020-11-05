import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// Components
import DoctorImage from "./DoctorImage";

//MUI
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";


const styles = (theme) => ({
  ...theme.palette.primary,
  ...theme.palette.secondary,

  gridRightWrapper: {
    backgroundColor: theme.palette.secondary.lightest,
    height: "95%",
    marginTop: 26,
  },

  gridSubTitleLeft: {
    textTransform: "uppercase",
    width: "100%",
    height: 20,
    paddingTop: 20,
    textAlign: "center",
    fontSize: 16,
    color: theme.palette.primary.main,
  },

  dividerInfo: {
    margin: "-16px 10px 10px 5px",
    backgroundColor: theme.palette.primary.contrastText,
  },

  dividerDoctorInfo: {
    margin: "-5px 10px 10px 5px",
    backgroundColor: theme.palette.primary.contrastText,
  },
  doctorPhoto: {
    height: 150,
    width: 150,
    marginLeft: 10,
  },
  doctorDetails: {
    marginLeft: 10,
    marginRight: 10,
    display: "flex",
    fontSize: 14,
  },
  rowRight: {
    marginLeft: "5%",
  },
  staticText: {
    fontWeight: "bold",
  },
  doctorProfileDetail: {
    color: theme.palette.primary.main,
  },
  rowRightLast: {
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
  },
});

class DortorDetails extends Component {
  render() {
    const {
      classes,
      firstname,
      lastname,
      title,
      currnetPosition,
      departmentName,
      interest,
      languages,
      university,
      degree,
      careerAndAccomplishements,
    } = this.props;
    return (
      <Grid item sm={4} xs={12}>
        <Grid item sm={12} xs={12} className={classes.gridRightWrapper}>
          <div>
            <h5 className={classes.gridSubTitleLeft}>
              {departmentName} Department Leader
            </h5>
            <Divider className={classes.dividerInfo} />
            <div className={classes.doctorPhoto}>
              <DoctorImage />
            </div>
            <Grid container>
              <Grid item sm={11} xs={11} className={classes.doctorDetails}>
                <Grid item sm={6} xs={6} className="">
                  <div className={classes.rowLeft}>
                    <p>
                      <span className={classes.staticText}>First Name: </span>
                      <span className={classes.doctorProfileDetail}>
                        {firstname}
                      </span>{" "}
                    </p>
                  </div>
                </Grid>

                <Grid item sm={6} xs={6} className="">
                  <div className={classes.rowRight}>
                    <p>
                      <span className={classes.staticText}>Last Name: </span>
    <span className={classes.doctorProfileDetail}>{lastname}</span>
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Divider className={classes.dividerDoctorInfo} />
            <Grid container>
              <Grid item sm={11} xs={11} className={classes.doctorDetails}>
                <Grid item sm={6} xs={6} className="">
                  <div className={classes.rowLeft}>
                    <p>
                      <span className={classes.staticText}>Title: </span>
                      <span className={classes.doctorProfileDetail}>
                        {title}
                      </span>{" "}
                    </p>
                  </div>
                </Grid>

                <Grid item sm={6} xs={6} className="">
                  <div className={classes.rowRight}>
                    <p>
                      <span className={classes.staticText}>
                        Current Postion:{" "}
                      </span>
                      <span className={classes.doctorProfileDetail}>
                        {currnetPosition}
                      </span>
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Divider className={classes.dividerDoctorInfo} />
            <Grid container>
              <Grid item sm={11} xs={11} className={classes.doctorDetails}>
                <Grid item sm={6} xs={6} className="">
                  <div className={classes.rowLeft}>
                    <p>
                      <span className={classes.staticText}>Interest: </span>
                      <span className={classes.doctorProfileDetail}>
                        {interest}
                      </span>{" "}
                    </p>
                  </div>
                </Grid>

                <Grid item sm={6} xs={6} className="">
                  <div className={classes.rowRight}>
                    <p>
                      <span className={classes.staticText}>Languages: </span>
                      <span className={classes.doctorProfileDetail}>
                        {languages}
                      </span>
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Divider className={classes.dividerDoctorInfo} />
            <Grid container>
              <Grid item sm={11} xs={11} className={classes.doctorDetails}>
                <Grid item sm={6} xs={6} className="">
                  <div className={classes.rowLeft}>
                    <p>
                      <span className={classes.staticText}>University: </span>
                      <span className={classes.doctorProfileDetail}>
                        {university}
                      </span>{" "}
                    </p>
                  </div>
                </Grid>

                <Grid item sm={6} xs={6} className="">
                  <div className={classes.rowRight}>
                    <p>
                      <span className={classes.staticText}>Degree: </span>
                      <span className={classes.doctorProfileDetail}>
                        {degree}
                      </span>
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Divider className={classes.dividerDoctorInfo} />
            <Grid item sm={12} xs={12} className="">
              <div className={classes.rowRightLast}>
                <p>
                  <span className={classes.staticText}>
                    Career & Accomplishments:{" "}
                  </span>
                  <span className={classes.doctorProfileDetail}>
                   {careerAndAccomplishements}
                  </span>
                </p>
              </div>
            </Grid>
            <Divider className={classes.dividerDoctorInfo} />
          </div>
        </Grid>
      </Grid>
    );
  }
};

DortorDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currnetPosition: PropTypes.string.isRequired,
  departmentName: PropTypes.string.isRequired,
  interest: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  careerAndAccomplishements: PropTypes.string.isRequired,
};


export default withStyles(styles)(DortorDetails);
