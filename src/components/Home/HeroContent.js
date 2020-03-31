import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SendIcon from "@material-ui/icons/Send";
import ShareIcon from "@material-ui/icons/Share";
import CssBaseline from "@material-ui/core/CssBaseline";
import SubscriptionForm from "./SubscriptionForm";

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
    },
    pStyle: {
      fontSize: "2rem",
      marginBottom: 30,
      textAlign: "center"
    }
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <CssBaseline />
        <div
          className={classes.heroContent}
          style={{
            paddingTop: "15vh",
            paddingBottom: "15vh",
            marginBottom: "2rem"
          }}
        >
          {props.error ? (
            <React.Fragment>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="error"
              >
                <img src="https://media1.giphy.com/media/upg0i1m4DLe5q/source.gif" />
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
      <Grid item xs={10} lg={4} md={6} style={{ marginBottom: "2rem" }}>
        <Typography variant="h2" align="center">
          About this site
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.pStyle}>
          Bored@Home helps you find something fun to do while you're being a
          good human being and staying at home.
        </Typography>
        <Typography variant="h4" align="center" className={classes.pStyle}>
          How it works?
        </Typography>
        <Typography
          variant="body1"
          component="span"
          gutterBottom
          style={{ display: "flex", marginBottom: 10 }}
        >
          <ol
            style={{
              padding: "0 0 0 1em",
              marginTop: 0,
              fontSize: "1.35rem"
            }}
          >
            <li>No sign up or login required!</li>
            <li>
              Click on the 'Random fun activity' button to see a random thing to
              do.
            </li>
            <li>Like it? Save it! by clicking 'Save'</li>
            <li>Or click 'Skip' to see the next activity</li>
            <li>
              Saved acivities can be accessed by clicking 'Saved' (top right
              corner)
            </li>
            <li>
              Want to add your own activity?{" "}
              <Link href="https://forms.gle/SktfRvJJB8hJ6u4FA">
                click here!
              </Link>{" "}
              Activities can be as simple as a movie recommendation or your
              favorite Spotify plalist!
            </li>
          </ol>
        </Typography>
        {/* <Typography
          variant="body1"
          gutterBottom
          style={{ fontSize: "1.4rem", marginBottom: 10 }}
        >
          There is no sign up or login required, just click on the 'Random fun
          activity' button to see a random fun thing to do. If you like it, you
          can save it by clicking the 'Save' button or you can see the next
          acivity by clicking 'Skip'.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ fontSize: "1.4rem", marginBottom: 10 }}
        >
          Your saved acivities can be accessed by clicking on the 'Saved' button
          in the top right corner.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ fontSize: "1.4rem", marginBottom: 10 }}
        >
          You can suggest an activity to be added to our site by using{" "}
          <Link href="https://forms.gle/SktfRvJJB8hJ6u4FA">this form</Link>. An
          acitvity suggestion can be as simple as recommending a must watch
          movie or your favorite Spotify plalist.
        </Typography> */}
        <Typography variant="h4" gutterBottom align="center">
          Get updates when new features are added.
        </Typography>

        <SubscriptionForm />

        {/* <Typography
          variant="body1"
          gutterBottom
          style={{ fontSize: "1.4rem", marginBottom: 10 }}
        >
            {" "}
            Even though the general picture seems to look grim right now, we can
            choose to look at the good (how much ever little) is happening in
            our lives. For example:
          </Typography>
          <ul>
            <li>Our usual travel-to-work time is available to us to spend</li>
            <li>We have the family together</li>
            <li>
              There are no weekend plans so there is more time to work on your
              hobbies
            </li>
          </ul> */}
      </Grid>
    </React.Fragment>
  );
}
