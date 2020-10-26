import React from "react";
import PropTypes from "prop-types";
import { ResizableBox } from "react-resizable";

import Theme from "../util/theme";
import FullPatientInfoDialog from "./modals/FullPatientInfo";


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
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import theme from "../util/theme";

const useStyles = makeStyles((theme) => ({
  keyboardArrowDownIcon: {
    color: theme.palette.primary.main,
  },
  patientFullname: {
    fontWeight: "bold",
  },
  patientInfo: {
    color: Theme.palette.secondary.contrastText,
  },
  closeDialogue: {
    position: "relative",
    left: "90%",
    top: "5%",
    color: Theme.palette.primary.main,
  },
  resizable: {
    position: "relative",
    "& .react-resizable-handle": {
      position: "absolute",
      width: 20,
      height: 20,
      bottom: 0,
      right: 0,
      background:
        "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+')",
      backgroundPosition: "bottom right",
      padding: "0 3px 3px 0",
      backgroundPrepeat: "no-repeat",
      backgroundOrigin: "content-box",
      boxSizing: "border-box",
      cursor: "se-resize",
    },
  },
  dialogTitle: {
    color: theme.palette.primary.dark,
    textTransform: "uppercase",
    fontWeight: 900,
    padding: "auto!",
  },
}));

function Row(props) {
  const { row } = props;
  const [isOpenHistory, setIsOpenHistory] = React.useState(false);
  const [isOpenDialog, setIsOpenDialog] = React.useState(false);
 
  const hanleIsOpenDialog = () => {
    setIsOpenDialog(true);
  };

  const handleIsCloseDialog = () => {
    setIsOpenDialog(false);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setIsOpenHistory(!isOpenHistory)}
          >
            {isOpenHistory ? (
              <KeyboardArrowUpIcon className={classes.keyboardArrowUpIcon} />
            ) : (
              <KeyboardArrowDownIcon
                className={classes.keyboardArrowDownIcon}
              />
            )}
          </IconButton>
        </TableCell>

        <Button onClick={hanleIsOpenDialog}>
          <TableCell
            className={classes.patientFullname}
            component="th"
            scope="row"
          >
            {row.patientName}
          </TableCell>
        </Button>

        {isOpenDialog && (
          <Dialog
            open={isOpenDialog}
            onClose={handleIsCloseDialog}
            // fullWidth
            maxWidth={false}
            width="sm"
            aria-labelledby="form-dialog-title"
          >
            <ResizableBox
              height={550}
              width={650}
              className={classes.resizable}
            >
              <Button
                tip="Close"
                onClick={handleIsCloseDialog}
                className={classes.closeDialogue}
              >
                <CloseIcon />
              </Button>
              <DialogTitle className={classes.dialogTitle}>
                <h4>
                  Complete History ABout{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    John S. Delano
                  </span>
                </h4>
              </DialogTitle>
              <DialogContent>
                <FullPatientInfoDialog />
              </DialogContent>
            </ResizableBox>
          </Dialog>
        )}

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
          <Collapse in={isOpenHistory} timeout="auto" unmountOnExit>
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




// import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
// import Theme from "../util/theme";
// import FullPatientInfoModal from "./modals/FullPatientInfoDialog";

// import withStyles from "@material-ui/core/styles/withStyles";

// // MUI Stuff
// import Box from "@material-ui/core/Box";
// import Collapse from "@material-ui/core/Collapse";
// import IconButton from "@material-ui/core/IconButton";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Typography from "@material-ui/core/Typography";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import CloseIcon from "@material-ui/icons/Close";
// import TextField from "@material-ui/core/TextField";

// import Dialog from "@material-ui/core/Dialog";

// const styles = (theme) => ({
//   ...theme.palette.primary,
//   keyboardArrowDownIcon: {
//     color: Theme.palette.primary.main,
//   },
//   patientFullname: {
//     fontWeight: "bold",
//   },
//   patientInfo: {
//     color: Theme.palette.secondary.contrastText,
//   },
//   closeDialogue: {
//     position: "absolute",
//     left: "90%",
//     top: "10%",
//     color: Theme.palette.primary.main,
//   },
// });

// class Row extends Component {
//   state = {
//     open: false,
//     isOpenHistory: false,
//   };

//   handleOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   handleOpenHistory = () => {
//     this.setState({ isOpenHistory: true });
//   };

//   handleCloseHistory = () => {
//     this.setState({ isOpenHistory: false });
//   };

//   render() {
//     const { classes, row } = this.props;
//     return (
//       <React.Fragment>
//         <TableRow>
//           <TableCell>
//             <IconButton
//               aria-label="expand row"
//               size="small"
//               onClick={() => this.handleOpenHistory()}
//             >
//               {this.state.isOpenHistory ? (
//                 <KeyboardArrowUpIcon className={classes.keyboardArrowUpIcon} />
//               ) : (
//                 <KeyboardArrowDownIcon
//                   className={classes.keyboardArrowDownIcon}
//                 />
//               )}
//             </IconButton>
//           </TableCell>

//           <Button onClick={this.handleOpen} tip="More Detail on this Patient">
//             <TableCell
//               className={classes.patientFullname}
//               component="th"
//               scope="row"
//             >
//               {row.patientName}
//             </TableCell>
//           </Button>
//           <Dialog
//             open={this.state.open}
//             onClose={this.handleClose}
//             fullWidth
//             maxWidth="sm"
//           >
//             <Button
//               tip="Close"
//               onClick={this.handleClose}
//               className={classes.closeDialogue}
//             >
//               <CloseIcon />
//             </Button>
//             <DialogTitle>Complete Information ABout Jhon Doe</DialogTitle>
//             <DialogContent>
//               <form onSubmit={""}>
//                 <TextField
//                   name="body"
//                   type="text"
//                   label="Full Name"
//                   placeholder="Patient Full Name"
//                   onChange={""}
//                   fullWidth
//                   className={classes.patientFullname}
//                 ></TextField>
//               </form>
//             </DialogContent>
//           </Dialog>

//           <TableCell className={classes.patientInfo} align="right">
//             {row.age}
//           </TableCell>
//           <TableCell className={classes.patientInfo} align="right">
//             {row.weight}
//           </TableCell>
//           <TableCell className={classes.patientInfo} align="right">
//             {row.issue}
//           </TableCell>
//           <TableCell className={classes.patientInfo} align="right">
//             {row.appointment}
//           </TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//             <Collapse
//               in={this.state.isOpenHistory}
             
//               // hidden={!expanded}
//               timeout="auto"
//               unmountOnExit
//             >
//               <Box margin={1}>
//                 <Typography variant="h6" gutterBottom component="div">
//                   History
//                 </Typography>
//                 <Table size="small" aria-label="purchases">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Customer</TableCell>
//                       <TableCell className={classes.patientInfo} align="right">
//                         Amount
//                       </TableCell>
//                       <TableCell className={classes.patientInfo} align="right">
//                         Total price ($)
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {row.history.map((historyRow) => (
//                       <TableRow key={historyRow.date}>
//                         <TableCell component="th" scope="row">
//                           {historyRow.date}
//                         </TableCell>
//                         <TableCell>{historyRow.customerId}</TableCell>
//                         <TableCell align="right">{historyRow.amount}</TableCell>
//                         <TableCell align="right">
//                           {Math.round(historyRow.amount * row.price * 100) /
//                             100}
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </Box>
//             </Collapse>
//           </TableCell>
//         </TableRow>
//       </React.Fragment>
//     );
//   }
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     age: PropTypes.number.isRequired,
//     issue: PropTypes.number.isRequired,
//     weight: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     patientName: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     appointment: PropTypes.number.isRequired,
//   }).isRequired,
// };

// export default withStyles(styles)(Row);


