import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { BsShuffle } from "react-icons/bs";
import SendIcon from "@material-ui/icons/Send";
import SubscriptionForm from "../SubscriptionForm/SubscriptionForm";

export default function HeroContent(props) {
  const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.secondary.main,
      // border: "1px solid #ddd"
      paddingTop: "12vh",
      paddingBottom: "12vh",
      ["@media (max-width:600px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "1.7rem",
        paddingTop: "9vh",
        paddingBottom: "9vh",
      },
    },
    heroContentSubtitle: {
      fontSize: "2rem",
      fontWeight: "normal",
      paddingTop: 10,
      ["@media (max-width:600px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "1.75rem",
      },
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    heroButton: {
      textTransform: "none",
      fontSize: 24,
      fontWeight: "normal",
      ["@media (max-width:600px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: 20,
      },
    },
    pStyle: {
      fontSize: "1.8rem",
      marginBottom: 30,
      textAlign: "center",
    },
    subTitle: {
      fontSize: "1.9rem",
      fontWeight: "bold",
      marginBottom: 0,
      marginTop: "15%",
      color: "#666",
      ["@media (max-width:600px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "1.6rem",
      },
    },
    customMenuWidth: {
      "& div": {
        width: "9vw",
      },
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12}>
        {/* <CssBaseline /> */}
        <div className={classes.heroContent}>
          {props.error ? (
            <React.Fragment>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="error"
              >
                <img
                  alt="Bored@Home? Find fun things to do!"
                  src="https://media1.giphy.com/media/upg0i1m4DLe5q/source.gif"
                  width="200px"
                  height="auto"
                />
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color="textSecondary"
                className={classes.heroContentSubtitle}
              >
                We're out of activities:( Maybe you can suggest some?
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
                Are you bored?
              </Typography>
              <Typography
                variant="h3"
                align="center"
                color="textSecondary"
                className={classes.heroContentSubtitle}
              >
                Let's find something fun to do!
              </Typography>
            </React.Fragment>
          )}

          <div className={classes.heroButtons}>
            <Grid
              container
              lg={4}
              md={6}
              xs={10}
              spacing={2}
              justify="center"
              align="center"
              style={{ margin: "auto" }}
              item
            >
              <Grid item xs={12}>
                {props.error ? (
                  <Button
                    variant="contained"
                    href="https://forms.gle/SktfRvJJB8hJ6u4FA"
                    color="primary"
                    size="medium"
                    target="_blank"
                    startIcon={<SendIcon />}
                    className={classes.heroButton}
                  >
                    Suggest an Activity
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    endIcon={<BsShuffle />}
                    onClick={() => {
                      props.startRouletteHandler();
                    }}
                    className={classes.heroButton}
                  >
                    Random fun activity
                  </Button>
                )}
              </Grid>
              {/* <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<ShareIcon />}
                  className={classes.heroButton}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  fullWidth
                  onClick={handleClick}
                >
                  Share this!
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  className={classes.customMenuWidth}
                >
                  <MenuItem onClick={handleClose}>WhatsApp</MenuItem>
                  <MenuItem onClick={handleClose}>Facebook</MenuItem>
                  <MenuItem onClick={handleClose}>Twitter</MenuItem>
                </Menu>
              </Grid> */}
            </Grid>
          </div>
        </div>
      </Grid>
      <Grid item xs={10} lg={4} md={4}>
        <Typography variant="h4" className={classes.subTitle} align="center">
          Get fun things to do via email
        </Typography>
        <SubscriptionForm />
      </Grid>
    </React.Fragment>
  );
}
