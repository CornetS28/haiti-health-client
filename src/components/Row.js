import React from "react";
import PropTypes from "prop-types";
import Theme from "../util/theme";
import FullPatientInfoModal from './modals/FullPatientInfoDialog'

// MUI Stuff
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

  const useStyles = makeStyles((theme) => ({
    keyboardArrowDownIcon: {
      color: Theme.palette.primary.main,
    },
    patientFullname: {
      fontWeight: "bold",
    },
    patientInfo: {
      color: Theme.palette.secondary.contrastText,
    },
  }));

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [
    isOpenFullPatientInfoModal,
    setIsOpenFullPatientInfoModal,
  ] = React.useState(false);
  
 const handleFullPatientInfoModal = () => {
   setIsOpenFullPatientInfoModal(true);
 };

//  const handleClose = () => {
//    setOpen(false);
//  };

const classes = useStyles();
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowUpIcon className={classes.keyboardArrowUpIcon} />
            ) : (
              <KeyboardArrowDownIcon
                className={classes.keyboardArrowDownIcon}
              />
            )}
          </IconButton>
        </TableCell>
      
        <Button onClick={handleFullPatientInfoModal}>
          <TableCell
            className={classes.patientFullname}
            component="th"
            scope="row"
          >
            {row.patientName}
          </TableCell>
        </Button>

        <TableCell className={classes.patientInfo} align="right">
          {row.age}
        </TableCell>
        <TableCell className={classes.patientInfo} align="right">
          {row.weight}
        </TableCell>
        <TableCell className={classes.patientInfo} align="right">
          {row.issue}
        </TableCell>
        <TableCell className={classes.patientInfo} align="right">
          {row.appointment}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell className={classes.patientInfo} align="right">
                      Amount
                    </TableCell>
                    <TableCell className={classes.patientInfo} align="right">
                      Total price ($)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    age: PropTypes.number.isRequired,
    issue: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    patientName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    appointment: PropTypes.number.isRequired,
  }).isRequired,
};

export default Row;