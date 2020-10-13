import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Theme from "../util/theme";

// Component
import Row from "../components/Row";
import patientsDataRows from "../components/patientsDataRows";


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
    backgroundColor: Theme.palette.secondary.main,
    color: Theme.palette.primary.main,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
};

class urologHome extends Component {
  render() {
     const { classes } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell />
              <TableCell className={classes.tableHead}>
                Patient's Name
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                Age
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                Weight&nbsp;(p)
              </TableCell>
              <TableCell className={classes.tableHead} align="right">Issue</TableCell>
              <TableCell className={classes.tableHead} align="right">Appointment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientsDataRows.map((row) => (
              <Row key={row.patientName} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(styles)(urologHome);
