import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../assets/styles";
import Activity from "../Activity/Activity";
// import data from "../../assets/data";
import Tabletop from "tabletop";
import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";
import HeroContent from "./HeroContent";
import NoMoreContent from "./NoMoreContent";

export default function Home(props) {
  const [activity, setActivity] = useState({});
  const [isRouletteStarted, setIsRouletteStarted] = useState(false);
  const [alreadySelectedIds, setAlreadySelectedIds] = useState([]);
  const [counter, setCounter] = useState(0);
  const { savedActivities, setSavedActivities } = props;
  const [activitiesData, setActivitiesData] = useState([]);
  const [noContent, setNoContent] = useState(false);

  function processFetchedData(dataFromSheet, tabletop) {
    setActivitiesData(dataFromSheet);
    // selectRandomActivity(dataFromSheet);
    // setIsLoading(false);
  }
  function init() {
    const publicSpreadsheetUrl =
      "https://docs.google.com/spreadsheets/d/1S2MGuA1tKHHr4MWivcLw47q0gvF4iPv_hB1n_5xcPBA/";
    Tabletop.init({
      key: publicSpreadsheetUrl,
      callback: processFetchedData,
      simpleSheet: true
    });
  }

  useEffect(() => {
    // const fetchData = async () => {
    //   await init();
    // };
    // fetchData();
    init();
  }, []);

  useEffect(() => {
    localStorage.setItem("savedActivities", JSON.stringify(savedActivities));
  }, [savedActivities]);

  const startRoulette = () => {
    console.log("selecting random activity.");
    if (counter >= activitiesData.length) {
      setNoContent(true);
      return;
    }
    let randomId = getRandomInt(0, activitiesData.length);
    setCounter(counter + 1);
    while (alreadySelectedIds.includes(randomId)) {
      if (counter >= activitiesData.length) {
        console.log("no more activities");
        setNoContent(true);
        return;
      }
      randomId = getRandomInt(0, activitiesData.length);
      setCounter(counter + 1);
    }
    setActivity(activitiesData[randomId]);
    setAlreadySelectedIds([...alreadySelectedIds, randomId]);
    setIsRouletteStarted(true);
  };

  const renderContent = () => {
    if (isEmpty(activity)) {
      <HeroContent selectRandomActivity={startRoulette} />;
    }
    if (activitiesData.length > 0 && counter >= activitiesData.length) {
      <NoMoreContent />;
    }
    if (activity && !isRouletteStarted) {
      <Activity
        activity={activity}
        dopeHandler={dopeHandler}
        nopeHandler={nopeHandler}
      />;
    }
  };
  const dopeHandler = savedActivity => {
    if (!savedActivities.includes(JSON.stringify(savedActivity))) {
      setSavedActivities([...savedActivities, JSON.stringify(savedActivity)]);
    }
    startRoulette();
  };

  const nopeHandler = () => {
    startRoulette();
  };

  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.grid}
      direction="row"
      justify="center"
      alignItems="center"
    >
      {noContent && <NoMoreContent />}

      {!isRouletteStarted && !noContent && (
        <HeroContent startRouletteHandler={startRoulette} />
      )}

      {isRouletteStarted && !noContent && (
        <Activity
          activity={activity}
          dopeHandler={dopeHandler}
          nopeHandler={nopeHandler}
        />
      )}
    </Grid>
  );
}

//Utils
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
