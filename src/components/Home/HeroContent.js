import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SendIcon from "@material-ui/icons/Send";
import ShareIcon from "@material-ui/icons/Share";

export default function HeroContent(props) {
  const useStyles = makeStyles(theme => ({
    heroContent: {
      backgroundColor: theme.palette.secondary.main
      // border: "1px solid #ddd"
    },
    heroContentSubtitle: {
      fontSize: "2rem",
      fontWeight: "normal",
      paddingTop: 5,
      ["@media (max-width:600px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "1.7rem"
      }
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    },
    heroButton: {
      textTransform: "none",
      fontSize: 20,
      fontWeight: "normal"
    }
  }));
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      {/* <CssBaseline /> */}
      <div
        className={classes.heroContent}
        style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
      >
        {props.error ? (
          <React.Fragment>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="error"
            >
              Wow! You have done it all.
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="textSecondary"
              className={classes.heroContentSubtitle}
            >
              Now go take a nap while we gather more activities for you.
              <br />
              You can suggest activities too!
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
            >
              Bored at home?
            </Typography>
            <Typography
              variant="h3"
              align="center"
              color="textSecondary"
              className={classes.heroContentSubtitle}
            >
              Lets find something fun to do!
            </Typography>
          </React.Fragment>
        )}

        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              {props.error ? (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  target="_blank"
                  startIcon={<SendIcon />}
                  href=""
                  className={classes.heroButton}
                >
                  Suggest an Activity
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<ShuffleIcon />}
                  onClick={() => {
                    props.startRouletteHandler();
                  }}
                  className={classes.heroButton}
                >
                  Random fun activity
                </Button>
              )}
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<ShareIcon />}
                className={classes.heroButton}
              >
                Share this!
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
}
