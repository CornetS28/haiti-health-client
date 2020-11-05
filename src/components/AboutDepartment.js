import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

//MUI
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const styles = (theme) => ({
  ...theme.palette.primary,
  ...theme.palette.secondary,

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

  gridPara: {
    margin: "3px 15px 10px 15px",
  },
  dividerInfo: {
    margin: "-16px 10px 10px 5px",
    backgroundColor: theme.palette.primary.contrastText,
  },

  div: {
    width: "100%",
    height: "20%",
    marginBottom: -40,
  },
});



class AboutDepartment extends Component {
  render() {
     const { classes, team, equipment, other, more } = this.props;
    return (
      <Grid item sm={4} xs={12} className={classes.gridWrapper}>
        <Grid item sm={12} xs={12} className={classes.gridTextContent}>
          <div>
            <h5 className={classes.gridSubTitleLeft}>General Information</h5>
            <Divider className={classes.dividerInfo} />
            <div className={classes.scrollableInfo}>
              <div className={classes.gridParaTitle}>Team:</div>
              <div className={classes.gridPara}>{team}</div>
              <div className={classes.gridParaTitle}>Equipment:</div>
              <div className={classes.gridPara}>
                {equipment} 
              
              </div>
              <div className={classes.gridParaTitle}>Other:</div>
              <div className={classes.gridPara}>
               {other}
              </div>
              <div className={classes.gridParaTitle}>More:</div>
              <div className={classes.gridPara}>
                {more}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    )
  }
};

AboutDepartment.propTypes = {
  classes: PropTypes.object.isRequired,
  team: PropTypes.string.isRequired,
  equipment: PropTypes.string.isRequired,
  other: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
};

export default withStyles(styles)(AboutDepartment);
