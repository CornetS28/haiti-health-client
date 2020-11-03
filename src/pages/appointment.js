import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

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
                {" "}
                <h5 className={classes.gridTitle}>Doctor Profile</h5>
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

// <Grid sm={8} xs={12} className={classes.gridLeftWrapper}>
//           <h5 className={classes.gridHeader}>Set Up An Appointment +</h5>
//           <h6 className={classes.gridHeader}> About Urology Department</h6>
//           <Grid item sm={12} xs={12} className={classes.gridTextContent}>
//             <Grid item sm={8} xs={12} className={classes.aboutDepGrid}>
//               <h5 className={classes.gridSubTitleLeft}>General Information</h5>
//               <div className={classes.gridParaTitle}>Team:</div>
//               <div className={classes.gridPara}>
//                 dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d
//                 cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd dsd
//                 fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl
//                 fndslnsdlsd sndsdl hkjk dsfa f ejnv eads ds k vd s ad j sdnjn
//                 fds dfsjm cks d cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd
//                 dsd fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl
//                 fndslnsdlsd sndsdl hkjk
//               </div>
//               <div className={classes.gridParaTitle}>Equipment:</div>
//               <div className={classes.gridPara}>
//                 dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d
//                 cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd dsd
//                 fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl
//                 fndslnsdlsd sndsdl hkjk dsfa f ejnv eads ds k vd s ad j sdnjn
//                 fds dfsjm cks d cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd
//                 dsd fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl
//                 fndslnsdlsd sndsdl hkjk
//               </div>
//               <div className={classes.gridParaTitle}>Other:</div>
//               <div className={classes.gridPara}>
//                 dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d
//                 cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd dsd
//                 fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl
//                 fndslnsdlsd sndsdl hkjk
//               </div>
//               <div className={classes.gridParaTitle}>More:</div>
//               <div className={classes.gridPara}>
//                 dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d
//                 cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd dsd
//                 fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl
//                 fndslnsdlsd sndsdl hkjk
//               </div>
//             </Grid>
//             <Grid item sm={4} xs={12} className={classes.testimoialGrid}>
//               <Grid item sm={8} xs={4} className={classes.gridSubRightWrapper}>
//                 <h5 className={classes.gridSubTitleRight}>
//                   {" "}
//                   <p className={classes.emptySpace}> </p> Testimonials
//                 </h5>
//                 <Divider className={classes.dividerTestimonial} />
//                 <div className={classes.scrollableTestimials}>
//                   <h6 className={classes.testimialsText}>
//                     fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
//                     dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d vd
//                     j dv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk j
//                     dkdsssdfdsds sss
//                   </h6>
//                   <h6 className={classes.testimialsText}>
//                     fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
//                     dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d vd
//                     j dv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk j
//                     dkdsssdfdsds sss
//                   </h6>
//                   <h6 className={classes.testimialsText}>
//                     fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
//                     dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d vd
//                     j dv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk j
//                     dkdsssdfdsds sss
//                   </h6>
//                   <h6 className={classes.testimialsText}>
//                     fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
//                     dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d vd
//                     j dv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk j
//                     dkdsssdfdsds sss
//                   </h6>
//                   <h6 className={classes.testimialsText}>
//                     fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
//                     dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d vd
//                     j dv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk j
//                     dkdsssdfdsds sss
//                   </h6>{" "}
//                   <h6 className={classes.testimialsText}>
//                     fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
//                     dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d vd
//                     j dv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk j
//                     dkdsssdfdsds sss
//                   </h6>
//                   <h6 className={classes.testimialsText}>
//                     fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
//                     dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d vd
//                     j dv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk j
//                     dkdsssdfdsds sss
//                   </h6>{" "}
//                   <h6 className={classes.testimialsText}>
//                     fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
//                     dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d vd
//                     j dv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk j
//                     dkdsssdfdsds sss
//                   </h6>
//                   <h6 className={classes.testimialsText}>
//                     fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf
//                     dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d vd
//                     j dv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk j
//                     dkdsssdfdsds sss
//                   </h6>
//                 </div>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
