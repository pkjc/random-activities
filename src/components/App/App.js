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
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import NewHome from "../Home/NewHome";

// const API_URL = "https://docs.google.com/spreadsheets/d/1S2MGuA1tKHHr4MWivcLw47q0gvF4iPv_hB1n_5xcPBA/";

function appendRef(url) {
  if (url.includes("?")) {
    url = url + "&ref=boredathome.now.sh";
  } else {
    url = url + "?ref=boredathome.now.sh";
  }
  return url;
}

export default function App() {
  const classes = useStyles();
  const [isRouletteStarted, setIsRouletteStarted] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [savedActivitiesData, setSavedActivitiesData] = React.useState(
    JSON.parse(localStorage.getItem("savedActivities")) || []
  );
  const [pickedActivitiesData, setPickedActivitiesData] = React.useState(
    JSON.parse(localStorage.getItem("pickedActivities")) || []
  );

  // const [activitiesData, setActivitiesData] = React.useState([]);

  // function fetchDataFromServer() {
  //   Tabletop.init({
  //     key: API_URL,
  //     callback: (dataFromSheet, tabletop) => {
  //       dataFromSheet.map((obj, ind) => {
  //         obj["id"] = ind;
  //         obj["url"] = appendRef(obj["url"]);
  //       });
  //       setActivitiesData(dataFromSheet);
  //       setIsDataLoading(false);
  //     },
  //     simpleSheet: true,
  //   });
  // }

  // function fetchDataFromServer2() {
  //   fetch("/api/activities")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setActivitiesData(data);
  //       setIsDataLoading(false);
  //     });
  // }

  // useEffect(() => {
  //   fetchDataFromServer2();
  // }, []);

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route exact path="/">
            {isDataLoading ? (
              <Box
                display="flex"
                style={{ minHeight: "87vh" }}
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress />
              </Box>
            ) : (
              // <Home
              //   savedActivities={savedActivitiesData}
              //   setSavedActivities={setSavedActivitiesData}
              //   alreadySelectedIds={pickedActivitiesData}
              //   setAlreadySelectedIds={setPickedActivitiesData}
              //   isRouletteStarted={isRouletteStarted}
              //   setIsRouletteStarted={setIsRouletteStarted}
              //   activitiesData={activitiesData}
              // />
              <NewHome
                savedActivities={savedActivitiesData}
                setSavedActivities={setSavedActivitiesData}
                isRouletteStarted={isRouletteStarted}
                setIsRouletteStarted={setIsRouletteStarted}
              />
            )}
          </Route>
          <Route path="/saved">
            <SavedActivities
              savedActivities={savedActivitiesData}
              setSavedActivities={setSavedActivitiesData}
            />
          </Route>
        </Switch>
      </Router>
      {/* <StickyFooter /> */}
    </div>
  );
}
