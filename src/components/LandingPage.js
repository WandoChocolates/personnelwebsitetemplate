import React from "react";
import "./LandingPage.css";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
      <div className="blog-area" ></div>
      <div className="projects-area" ></div>
      <div className="rectangle-7" ></div>
      <div className="contactme" ></div>
      <div className="footer">
          <Typography className={classes.title}>
            <CopyrightIcon />
            All Rights Reserved
          </Typography>
          <Typography className={classes.title}>
            VALAR DOHAERIS
          </Typography>
          <div className={classes.title}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon/>
          </div>
      </div>
    </div>
  );
}