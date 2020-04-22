import React, { Component } from 'react';
import {
  withStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@material-ui/core';
import styles from './styles';

class TaskForm extends Component {
  render() {
    var { open, closeForm } = this.props;
    return (
      <Dialog
        open={open}
        onClose={closeForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new task</DialogTitle>
        <DialogContent>
          <TextField id="standard-basic" label="Task" />
          <TextField
            id="standard-multiline-flexible"
            label="Description"
            multiline
            rowsMax={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeForm} color="primary">
            Cancel
          </Button>
          <Button onClick={closeForm} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
