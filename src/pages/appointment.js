import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// Components

import DoctorImage from "../components/DoctorImage";

//MUI
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Height } from "@material-ui/icons";

const styles = (theme) => ({
  ...theme.palette.primary,
  ...theme.palette.secondary,

  gridRightWrapper: {
    backgroundColor: theme.palette.secondary.lightest,
    height: "95%",
    marginTop: 26,
  },
  gridLeftWrapper: {
    height: "90vh",
  },
  gridHeader: {
    fontSize: "25px",
    textAlign: "center",
    marginTop: 120,
  },
  gridHeader2: {
    fontSize: "19px",
    textAlign: "center",
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
  scrollableInfo: {
    overflowY: "scroll",
    height: 500,
  },
  gridTextContent: {
    // margin: "auto 10px auto 10px",
    backgroundColor: theme.palette.secondary.lightest,
    fontSize: 14,
    color: theme.palette.secondary.main,
    height: "95%",
    marginTop: 25,
  },

  gridParaTitle: {
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginLeft: 15,
  },
  gridSubTitleRight: {
    textTransform: "uppercase",
    width: "100%",
    height: "5%",
    textAlign: "center",
    fontSize: 16,
    paddingTop: 18,
    marginBottom: 22,
    color: theme.palette.primary.contrastText,
  },
  gridPara: {
    margin: "3px 15px 10px 15px",
  },
  testimoialGrid: {
    backgroundColor: theme.palette.primary.main,
    height: "95%",
  },
  aboutDepGrid: {
    backgroundColor: theme.palette.secondary.lightest,
    fontSize: 14,
    color: theme.palette.secondary.main,
  },

  dividerTestimonial: {
    margin: "-16px 10px 10px 5px",
    backgroundColor: theme.palette.secondary.lightest,
  },
  dividerInfo: {
    margin: "-16px 10px 10px 5px",
    backgroundColor: theme.palette.primary.contrastText,
  },
  dividerPost: {
    margin: "-5px 10px 10px 5px",
    backgroundColor: theme.palette.secondary.lighter,
  },
  dividerDoctorInfo: {
    margin: "-5px 10px 10px 5px",
    backgroundColor: theme.palette.primary.contrastText,
  },
  scrollableTestimials: {
    overflowY: "scroll",
    height: 500,
    marginLeft: 10,
    marginTop: 10,
  },
  testimialsText: {
    color: theme.palette.primary.contrastText,
    fontStyle: "italic",
    marginLeft: 10,
    marginRight: 10,
  },
  div: {
    width: "100%",
    height: "20%",
    marginBottom: -40,
  },
  postTimeAndAuthor: {
    // backgroundColor: 'red',
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
  doctorPhoto: {
    height: 150,
    width: 150,
    marginLeft: 10,
  },
  doctorDetails: {
    marginLeft: 10,
    marginRight: 10,
    display: "flex",
    fontSize: 14
  },
  rowLeft: {
    // backgroundColor: "red"
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

class Appointment extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid className={classes.div}>
          <h5 className={classes.gridHeader}>Schedule An Appointment +</h5>
          <h6 className={classes.gridHeader2}>About Urology Department</h6>
        </Grid>
        <Grid container spacing={36}>
          <Grid container spacing={36}>
            <Grid item sm={4} xs={12} className={classes.gridWrapper}>
              <Grid item sm={12} xs={12} className={classes.gridTextContent}>
                <div>
                  <h5 className={classes.gridSubTitleLeft}>
                    General Information
                  </h5>
                  <Divider className={classes.dividerInfo} />
                  <div className={classes.scrollableInfo}>
                    <div className={classes.gridParaTitle}>Team:</div>{" "}
                    <div className={classes.gridPara}>
                      dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d
                      cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd dsd
                      fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl
                      fndslnsdlsd sndsdl hkjk dsfa f ejnv eads ds k vd s ad j
                      sdnjn fds dfsjm cks d cjkdsjdsndjsnjdsnkn sndkjnfksn
                      wabfsjbfanfskfsd dsd fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns
                      fsf ksd fjdnfknasdfndsl fndslnsdlsd sndsdl hkjk{" "}
                    </div>
                    <div className={classes.gridParaTitle}>Equipment:</div>{" "}
                    <div className={classes.gridPara}>
                      dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d
                      cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd dsd
                      fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl
                      fndslnsdlsd sndsdl hkjk dsfa f ejnv eads ds k vd s ad j
                      sdnjn fds dfsjm cks d cjkdsjdsndjsnjdsnkn sndkjnfksn
                      wabfsjbfanfskfsd dsd fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns
                      fsf ksd fjdnfknasdfndsl fndslnsdlsd sndsdl hkjk{" "}
                    </div>
                    <div className={classes.gridParaTitle}>Other:</div>{" "}
                    <div className={classes.gridPara}>
                      dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d
                      cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd dsd
                      fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl
                      fndslnsdlsd sndsdl hkjk{" "}
                    </div>
                    <div className={classes.gridParaTitle}>More:</div>{" "}
                    <div className={classes.gridPara}>
                      dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d
                      cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd dsd
                      fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl
                      fndslnsdlsd sndsdl hkjk{" "}
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>

            <Grid item sm={4} xs={12}>
              <Grid item sm={12} xs={12} className={classes.testimoialGrid}>
                <h5 className={classes.gridSubTitleRight}>Testimonials </h5>
                <Divider className={classes.dividerTestimonial} />{" "}
                <div className={classes.testi}>
                  <div className={classes.scrollableTestimials}>
                    {" "}
                    <h6 className={classes.testimialsText}>
                      fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
                      dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d
                      yey shhg sdajskadnsd sdsk vd j dv dc rf ds ds cdsc sdc
                      dsckdsc sdc s dc sdkkbfdds sdk j dkdsssdfdsds sss{" "}
                    </h6>{" "}
                    <p className={classes.postTimeAndAuthor}>
                      by{" "}
                      <span className={classes.authorPost}>Daniel Brower</span>,
                      on Feb 9th, 2012
                    </p>
                    <Divider className={classes.dividerPost} />
                    <h6 className={classes.testimialsText}>
                      fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
                      dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d
                      yey shhg sdajskadnsd sdsk vd j dv dc rf ds ds cdsc sdc
                      dsckdsc sdc s dc sdkkbfdds sdk j dkdsssdfdsds sss{" "}
                    </h6>{" "}
                    <p className={classes.postTimeAndAuthor}>
                      by{" "}
                      <span className={classes.authorPost}>Daniel Brower</span>,
                      on Feb 9th, 2012
                    </p>
                    <Divider className={classes.dividerPost} />
                    <h6 className={classes.testimialsText}>
                      fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
                      dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d
                      yey shhg sdajskadnsd sdsk vd j dv dc rf ds ds cdsc sdc
                      dsckdsc sdc s dc sdkkbfdds sdk j dkdsssdfdsds sss{" "}
                    </h6>{" "}
                    <p className={classes.postTimeAndAuthor}>
                      by{" "}
                      <span className={classes.authorPost}>Daniel Brower</span>,
                      on Feb 9th, 2012
                    </p>
                    <Divider className={classes.dividerPost} />
                    <h6 className={classes.testimialsText}>
                      fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
                      dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d
                      yey shhg sdajskadnsd sdsk vd j dv dc rf ds ds cdsc sdc
                      dsckdsc sdc s dc sdkkbfdds sdk j dkdsssdfdsds sss{" "}
                    </h6>{" "}
                    <p className={classes.postTimeAndAuthor}>
                      by{" "}
                      <span className={classes.authorPost}>Daniel Brower</span>,
                      on Feb 9th, 2012
                    </p>
                    <Divider className={classes.dividerPost} />
                    <h6 className={classes.testimialsText}>
                      fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
                      dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d
                      yey shhg sdajskadnsd sdsk vd j dv dc rf ds ds cdsc sdc
                      dsckdsc sdc s dc sdkkbfdds sdk j dkdsssdfdsds sss{" "}
                    </h6>{" "}
                    <p className={classes.postTimeAndAuthor}>
                      by{" "}
                      <span className={classes.authorPost}>Daniel Brower</span>,
                      on Feb 9th, 2012
                    </p>
                    <Divider className={classes.dividerPost} />
                    <h6 className={classes.testimialsText}>
                      fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
                      dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d
                      yey shhg sdajskadnsd sdsk vd j dv dc rf ds ds cdsc sdc
                      dsckdsc sdc s dc sdkkbfdds sdk j dkdsssdfdsds sss{" "}
                    </h6>{" "}
                    <p className={classes.postTimeAndAuthor}>
                      by{" "}
                      <span className={classes.authorPost}>Daniel Brower</span>,
                      on Feb 9th, 2012
                    </p>
                    <Divider className={classes.dividerPost} />
                  </div>
                </div>
              </Grid>
            </Grid>

            <Grid item sm={4} xs={12}>
              <Grid item sm={12} xs={12} className={classes.gridRightWrapper}>
                <div>
                  <h5 className={classes.gridSubTitleLeft}>
                    Urology Department Leader
                  </h5>
                  <Divider className={classes.dividerInfo} />
                  <div className={classes.doctorPhoto}>
                    <DoctorImage />
                  </div>
                  <Grid container>
                    <Grid
                      item
                      sm={11}
                      xs={11}
                      className={classes.doctorDetails}
                    >
                      <Grid item sm={6} xs={6} className="">
                        <div className={classes.rowLeft}>
                          <p>
                            <span className={classes.staticText}>
                              First Name:{" "}
                            </span>
                            <span className={classes.doctorProfileDetail}>
                              James Brooks
                            </span>{" "}
                          </p>
                        </div>
                      </Grid>

                      <Grid item sm={6} xs={6} className="">
                        <div className={classes.rowRight}>
                          <p>
                            <span className={classes.staticText}>
                              Last Name:{" "}
                            </span>
                            <span className={classes.doctorProfileDetail}>
                              Hills
                            </span>
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider className={classes.dividerDoctorInfo} />
                  <Grid container>
                    <Grid
                      item
                      sm={11}
                      xs={11}
                      className={classes.doctorDetails}
                    >
                      <Grid item sm={6} xs={6} className="">
                        <div className={classes.rowLeft}>
                          <p>
                            <span className={classes.staticText}>Title: </span>
                            <span className={classes.doctorProfileDetail}>
                              Urologist Specialist
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
                              Director
                            </span>
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider className={classes.dividerDoctorInfo} />
                  <Grid container>
                    <Grid
                      item
                      sm={11}
                      xs={11}
                      className={classes.doctorDetails}
                    >
                      <Grid item sm={6} xs={6} className="">
                        <div className={classes.rowLeft}>
                          <p>
                            <span className={classes.staticText}>
                              Interest:{" "}
                            </span>
                            <span className={classes.doctorProfileDetail}>
                              Eyes and Kidney
                            </span>{" "}
                          </p>
                        </div>
                      </Grid>

                      <Grid item sm={6} xs={6} className="">
                        <div className={classes.rowRight}>
                          <p>
                            <span className={classes.staticText}>
                              Languages:{" "}
                            </span>
                            <span className={classes.doctorProfileDetail}>
                              French and Creole
                            </span>
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider className={classes.dividerDoctorInfo} />
                  <Grid container>
                    <Grid
                      item
                      sm={11}
                      xs={11}
                      className={classes.doctorDetails}
                    >
                      <Grid item sm={6} xs={6} className="">
                        <div className={classes.rowLeft}>
                          <p>
                            <span className={classes.staticText}>
                              University:{" "}
                            </span>
                            <span className={classes.doctorProfileDetail}>
                              MIT
                            </span>{" "}
                          </p>
                        </div>
                      </Grid>

                      <Grid item sm={6} xs={6} className="">
                        <div className={classes.rowRight}>
                          <p>
                            <span className={classes.staticText}>Degree: </span>
                            <span className={classes.doctorProfileDetail}>
                              Doctorate
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
                        <span className={classes.staticText}>Carreer & Accomplishements: </span>
                        <span className={classes.doctorProfileDetail}>
                          dbcd cdjds sdhdsbdbs  dsdd dhjshdbwibeew edbdewbdebdewibdd ejdhed. dedndaednej D ADBEDEKDEJKDKDNE DSSCDSC fvdzfd//.
                        </span>
                      </p>
                    </div>
                  </Grid>
                  <Divider className={classes.dividerDoctorInfo} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

Appointment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Appointment);
