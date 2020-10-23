import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// MUI Stuff
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


export class FullPatientInfoDialog extends Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    if (this.props.openDialog) {
      this.handleOpen();
    }
  }

  render() {
    return (
      <div>
        <Fragment>
          <Button variant="outlined" color="primary" onClick={this.handleOpen}>
            Open form dialog
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            fullWidth
            maxWidth="sm"
          >
            <DialogContent>
              <h1>Heyeyeyeye!!!</h1>
            </DialogContent>
          </Dialog>
        </Fragment>
      </div>
    );
  }
}

export default FullPatientInfoDialog;
