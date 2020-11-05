import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// Components
import ABoutDepartment from "../../components/AboutDepartment";
import DepartmentTestimonials from "../../components/DepartmentTestimonials";
import DoctorDetails from "../../components/DoctorDetails";
import ScheduleAnAppointment from "../../components/ScheduleAnAppointment";

//MUI
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const styles = (theme) => ({
  ...theme.palette.primary,
  ...theme.palette.secondary,

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
  testimoialGrid: {
    backgroundColor: theme.palette.primary.main,
    height: "95%",
  },
  dividerTestimonial: {
    margin: "-16px 10px 10px 5px",
    backgroundColor: theme.palette.secondary.lightest,
  },

  scrollableTestimials: {
    overflowY: "scroll",
    height: 500,
    marginLeft: 10,
    marginTop: 10,
  },
});

const generalInfo = [
  {
    team:
      "dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks cjkdsjdsndjsnj dsnkn sndkjnfksn wabfsjbfanfskfsd ds fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl fndslnsdlsd sndsdl hkjk dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd dsd fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl fndslnsdlsd sndsdl hkjk",
    equipment:
      "dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks cjkdsjdsndjsnj dsnkn sndkjnfksn wabfsjbfanfskfsd ds fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl fndslnsdlsd sndsdl hkjk dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d cjkdsjdsndjsnjdsnkn sndkjnfksn wabfsjbfanfskfsd dsd fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl fndslnsdlsd sndsdl hkjk",
    other:
      "dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks cjkdsjdsndjsnj dsnkn sndkjnfksn wabfsjbfanfskfsd ds fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl fndslnsdlsd sndsdl hkjk dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d",
    more:
      "dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks cjkdsjdsndjsnj dsnkn sndkjnfksn wabfsjbfanfskfsd ds fkdsfdksfksdf dsfnkdsnfsdnfsfnsfns fsf ksd fjdnfknasdfndsl fndslnsdlsd sndsdl hkjk dsfa f ejnv eads ds k vd s ad j sdnjn fds dfsjm cks d",
  },
];

const testimonials = [
  {
    testimony:
      "fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d yey shhg sdajskadnsd sdsk vd jdv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk jdkdsssdfdsds sss",
    author: "Amie Linda",
    date: "Feb. 14th, 2015",
  },
  {
    testimony:
      "fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d yey shhg sdajskadnsd sdsk vd jdv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk jdkdsssdfdsds sss",
    author: "Daniel Styles",
    date: "Apr. 14th, 2015",
  },
  {
    testimony:
      "fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d yey shhg sdajskadnsd sdsk vd jdv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk jdkdsssdfdsds sss",
    author: "Celeste Hill",
    date: "Nov. 14th, 2015",
  },
  {
    testimony:
      "fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d yey shhg sdajskadnsd sdsk vd jdv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk jdkdsssdfdsds sss",
    author: "Alicia Pens",
    date: "Apr. 14th, 2015",
  },
  {
    testimony:
      "fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d yey shhg sdajskadnsd sdsk vd jdv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk jdkdsssdfdsds sss",
    author: "Stephen Paul",
    date: "Apr. 14th, 2015",
  },
  {
    testimony:
      "fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d yey shhg sdajskadnsd sdsk vd jdv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk jdkdsssdfdsds sss",
    author: "Jhon Doe",
    date: "Apr. 24th, 2016",
  },
  {
    testimony:
      "fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d yey shhg sdajskadnsd sdsk vd jdv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk jdkdsssdfdsds sss",
    author: "Daniel Styles",
    date: "May. 28th, 2016",
  },
  {
    testimony:
      "fknfdkm vfd vdfvfdkmvlfmd vdfnfdlfmlmf dadfndskdsmdslmldsmfsd ds sd fsd cdsc sdsk sd fsdfsd sd d yey shhg sdajskadnsd sdsk vd jdv dc rf ds ds cdsc sdc dsckdsc sdc s dc sdkkbfdds sdk jdkdsssdfdsds sss",
    author: "Paul E. Styles",
    date: "Dec. 24th, 2016",
  },
];

class OphtalmologyAppointment extends Component {
  render() {
    const { classes } = this.props;
    let departmentTestimonials = (
      <Grid item sm={4} xs={12}>
        <Grid item sm={12} xs={12} className={classes.testimoialGrid}>
          <h5 className={classes.gridSubTitleRight}>Testimonials</h5>
          <Divider className={classes.dividerTestimonial} />
          <div className={classes.testi}>
            <div className={classes.scrollableTestimials}>
              {testimonials.map((testimony) => (
                <DepartmentTestimonials
                  testimony={testimony.testimony}
                  author={testimony.author}
                  date={testimony.date}
                />
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    );

    return (
      <>
        <ScheduleAnAppointment
          scheduleAppointmentBtn="Schedule An Appointment"
          departmentTitle="Ophtalmology"
          consonant="n"
          specialist="ophtalmologist"
        />
        <Grid container spacing={36}>
          <Grid container spacing={36}>
            <ABoutDepartment
              team={generalInfo[0].team}
              equipment={generalInfo[0].equipment}
              other={generalInfo[0].other}
              more={generalInfo[0].more}
            />
            {departmentTestimonials}
            <DoctorDetails
              firstname="James Brooks"
              lastname="Delly"
              title="Ophtalmologist Specialist"
              departmentName="Ophtalmology"
              currnetPosition="Director"
              interest="Eyes and Kidney"
              languages="French and Creole"
              university="MIT"
              degree="Doctorate"
              careerAndAccomplishements=" dbcd cdjds sdhdsbdbs dsdd dhjshdbwibeew edbdewbdebdewibdd
                    ejdhed. dedndaednej D ADBEDEKDEJKDKDNE DSSCDSC fvdzfd kks."
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

OphtalmologyAppointment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OphtalmologyAppointment);
