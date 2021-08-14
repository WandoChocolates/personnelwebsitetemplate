import React from "react";
import "./LandingPage.css";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

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
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      width: '100%',
    },
    height: '100%',
  },
  blogsArea: {
    flexGrow: 1,
    marginBottom: '16px',
  },
  projectsArea: {
    height: '1805px',
    alignContent: 'flex-end',
  },
  cardGrid: {
    paddingTop: '491px',
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export default function LandingPage() {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

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
      <div className="rectangle-8" ></div>

      <div className="section" >
        <div className={classes.paper}>
          <Paper className={classes.blogsArea} elevation={0} >
            <div className={classes.heroContent}>
            </div>
            {/* Blogs unit */}
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={3}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Paper>
          <Paper className={classes.projectsArea} elevation={0}>
            <ImageList
              sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Paper>
        </div>
      </div>

      <div className="rectangle-22" >
        CONTACT ME
      </div>
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