import React from "react";
import "./LandingPage.css";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    color: "black",
    minHeight: '59px',
  },
  title: {
    marginRight: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Typography className={classes.title}>
            ABOUT ME
          </Typography>
          <Typography className={classes.title}>
            BLOG
          </Typography>
          <Typography className={classes.title}>
            VALAR DOHAERIS
          </Typography>
          <Typography className={classes.title}>
            PROJECTS
          </Typography>
          <Typography className={classes.title}>
            CONTACT ME
          </Typography>
        </AppBar>
      </div>
      <div className="rectangle-2" ></div>
      <div className="rectangle-7" ></div>
      <div className="footer"></div>
    </div>
  );
}