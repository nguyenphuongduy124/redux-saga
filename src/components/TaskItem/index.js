import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles.js';
import {
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Fab,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

class TaskItem extends Component {
  render() {
    var { task, status, classes } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab color="primary" aria-label="add" size="small">
            <Edit fontSize="small" />
          </Fab>
          <Fab color="secondary" aria-label="edit" size="small">
            <Delete fontSize="small" />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
