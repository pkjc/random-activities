import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "../../assets/styles";
import StickyFooter from "./StickyFooter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import SavedActivities from "../../components/SavedActivities/SavedActivities";
import Home from "../../components/Home/Home";
import Grid from "@material-ui/core/Grid";
import Tabletop from "tabletop";

const API_URL =
  "https://docs.google.com/spreadsheets/d/1S2MGuA1tKHHr4MWivcLw47q0gvF4iPv_hB1n_5xcPBA/";

export default function App() {
  const classes = useStyles();

  const [isRouletteStarted, setIsRouletteStarted] = useState(false);
  const [savedActivitiesData, setSavedActivitiesData] = React.useState(
    JSON.parse(localStorage.getItem("savedActivities")) || []
  );
  const [pickedActivitiesData, setPickedActivitiesData] = React.useState(
    JSON.parse(localStorage.getItem("pickedActivities")) || []
  );
  const [activitiesData, setActivitiesData] = React.useState([]);

  function appendRef(url) {
    if (url.includes("?")) {
      url = url + "&ref=boredathome.now.sh";
    } else if (url[url.length - 1] == "/") {
      url = url + "?ref=boredathome.now.sh";
    } else {
      url = url + "/?ref=boredathome.now.sh";
    }
    return url;
  }
  function fetchDataFromServer() {
    Tabletop.init({
      key: API_URL,
      callback: (dataFromSheet, tabletop) => {
        dataFromSheet.map((obj, ind) => {
          obj["id"] = ind;
          obj["url"] = appendRef(obj["url"]);
        });
        setActivitiesData(dataFromSheet);
      },
      simpleSheet: true,
    });
  }

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  return (
    <div className={classes.root}>
      <Router>
        <AppBar
          className={classes.appBar}
          color="primary"
          elevation={0}
          position="static"
        >
          <Toolbar>
            <Grid
              justify="space-between" // Add it here :)
              alignItems="center"
              container
              spacing={0}
            >
              <Grid item>
                <RouterLink
                  to="/"
                  variant="button"
                  className={classes.title}
                  style={{ textDecoration: "none" }}
                >
                  <Typography color="inherit" className={classes.title}>
                    Bored@Home
                  </Typography>
                </RouterLink>
              </Grid>
              <Grid item>
                {/* <Button
                  color="inherit"
                  variant="outlined"
                  className={classes.button}
                  href="https://forms.gle/SktfRvJJB8hJ6u4FA"
                  size="medium"
                  target="_blank"
                  style={{
                    textTransform: "none",
                    marginRight: 1,
                    fontSize: "1rem",
                  }}
                >
                  Suggest Activity
                </Button> */}
                <RouterLink to="/saved" style={{ textDecoration: "none" }}>
                  <Button
                    className={classes.button}
                    startIcon={<BookmarksIcon />}
                    style={{ color: "#7d4cdb" }}
                    size="medium"
                    color="secondary"
                    variant="contained"
                  >
                    {savedActivitiesData && savedActivitiesData.length} Saved
                  </Button>
                </RouterLink>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <Home
              savedActivities={savedActivitiesData}
              setSavedActivities={setSavedActivitiesData}
              alreadySelectedIds={pickedActivitiesData}
              setAlreadySelectedIds={setPickedActivitiesData}
              isRouletteStarted={isRouletteStarted}
              setIsRouletteStarted={setIsRouletteStarted}
              activitiesData={activitiesData}
            />
          </Route>
          <Route path="/saved">
            <SavedActivities
              savedActivities={savedActivitiesData}
              setSavedActivities={setSavedActivitiesData}
            />
          </Route>
        </Switch>
        {/* <Fab
          color="inherit"
          href="https://forms.gle/SktfRvJJB8hJ6u4FA"
          size="medium"
          target="_blank"
          style={{
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: 5,
          }}
          variant="extended"
          className={classes.fabMargin}
        >
          <SendIcon className={classes.extendedIcon} />
          Suggest Activity
        </Fab> */}
        {/* {isRouletteStarted && (
          <RouterLink to="/saved">
            <Fab
              size="medium"
              color="secondary"
              aria-label="add"
              className={classes.fabMargin}
              style={{
                color: "#7d4cdb",
                fontWeight: "bold",
                borderRadius: 5,
                textTransform: "none",
              }}
              variant="extended"
            >
              <BookmarksIcon className={classes.extendedIcon} />
              {savedActivitiesData && savedActivitiesData.length} Saved
            </Fab>
          </RouterLink>
        )} */}
      </Router>
      <StickyFooter />
    </div>
  );
}
