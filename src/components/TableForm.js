import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Theme from "../util/theme";

// MUI Stuff
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = {
  tableHead: {
    backgroundColor: Theme.palette.secondary.lighter,
    color: Theme.palette.primary.main,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  departmentName: {
    textAlign: "center",
   textTransform: 'uppercase'
  },
};

class TableForm extends Component {
  render() {
    const {
      classes,
      fullName,
      age,
      weight,
      issue,
      appointment,
      departmentName,
      listOfPatients,
    } = this.props;
    return (
      <TableContainer component={Paper}>
        <div className={classes.departmentName}>
          <h2>{departmentName}</h2>
        </div>

        <Table aria-label="collapsible table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell />
              <TableCell className={classes.tableHead}>{fullName}</TableCell>
              <TableCell className={classes.tableHead} align="right">
                {age}
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                {weight}&nbsp;(g)
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                {issue}
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                {appointment}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listOfPatients}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}

TableForm.propTypes = {
  row: PropTypes.shape({
    classes: PropTypes.object.isRequired,
    fullName: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    issue: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    appointment: PropTypes.string.isRequired,
    departmentName: PropTypes.string.isRequired,
    listOfPatients: PropTypes.array.isRequired, // Will be changed
  }).isRequired,
};

export default withStyles(styles)(TableForm);
