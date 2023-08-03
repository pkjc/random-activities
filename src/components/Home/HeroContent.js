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
      display: "grid",
      height: "100vh",
      justifyContent: "center",
      alignContent: "center",
      // border: "1px solid #ddd"
      // paddingTop: "12vh",
      // paddingBottom: "12vh",
      // ["@media (max-width:600px)"]: {
      //   // eslint-disable-line no-useless-computed-key
      //   fontSize: "1.7rem",
      //   paddingTop: "9vh",
      //   paddingBottom: "9vh",
      // },
    },
    ht:{
      fontSize: "12rem",
      letterSpacing: "-0.3rem",
      lineHeight: "96%",
      ["@media (max-width:600px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "6rem",
        letterSpacing: "0",
        lineHeight: "96%",
      },
    },
    heroContentSubtitle: {
      fontSize: "1.8rem",
      fontWeight: "normal",
      lineHeight: "1.5",
      paddingTop: 10,
      ["@media (max-width:600px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "1.75rem",
      },
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    },
    heroButton: {
      textTransform: "none",
      fontSize: 28,
      fontWeight: "normal",
      padding: "6px 20px 2px 20px",
      ["@media (max-width:600px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: 20,
      },
    },
    pStyle: {
      fontSize: "1.8rem",
      marginBottom: 30,
      textAlign: "left",
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
      <Grid item xs={10} sm={9}>
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
                color="primary"
                className={classes.ht}
              >
                Are you bored?
              </Typography>
              <Typography
                variant="h3"
                color="textSecondary"
                className={classes.heroContentSubtitle}
              >
                  - Drag the Bored! button to your bookmarks bar<br/>
                  - Click it when you're bored<br/>
                  - Visit a random interesting website
              </Typography>
            </React.Fragment>
          )}

          <div className={classes.heroButtons}>
            <Grid
              container
              spacing={2}
              item

            >
              <Grid item xs={4}>
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
                    fullWidth
                    color="primary"
                    size="large"
                    href="javascript:(function()%7Bwindow.open('https%3A%2F%2Fboredathome.vercel.app%2Fbookmarklet.html'%2C%20'_blank')%3B%7D)()%3B"
                    className={classes.heroButton}
                  >
                    Bored!
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
    </React.Fragment>
  );
}
