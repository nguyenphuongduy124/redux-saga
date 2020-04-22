import React, { Component } from 'react';
import { Button, Grid, withStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constants';
import styles from './styles';

const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Material ui Book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play game',
    description: 'Getting over it',
    status: 2,
  },
  {
    id: 3,
    title: 'Go mark',
    description: 'Supermarket',
    status: 1,
  },
];

class Taskboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const tasksFiltered = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList
              tasks={tasksFiltered}
              status={status}
              key={status.value}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  renderForm() {
    let xhtml = null;
    const { open } = this.state;
    xhtml = <TaskForm open={open} closeForm={this.handleClose} />;
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <Add /> Thêm mới công việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Taskboard);
