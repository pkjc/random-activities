import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../assets/styles";
import Activity from "../Activity/Activity";
import Tabletop from "tabletop";
import HeroContent from "./HeroContent";
import NoMoreContent from "./NoMoreContent";

export default function Home(props) {
  const { alreadySelectedIds, setAlreadySelectedIds } = props;
  const { savedActivities, setSavedActivities } = props;
  const [activity, setActivity] = useState({});
  const [isRouletteStarted, setIsRouletteStarted] = useState(false);
  // const [counter, setCounter] = useState(0);
  const [activitiesData, setActivitiesData] = useState([]);
  const [noContent, setNoContent] = useState(false);

  function processFetchedData(dataFromSheet, tabletop) {
    setActivitiesData(dataFromSheet);
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
    init();
  }, []);

  useEffect(() => {
    localStorage.setItem("savedActivities", JSON.stringify(savedActivities));
  }, [savedActivities]);

  useEffect(() => {
    localStorage.setItem(
      "pickedActivities",
      JSON.stringify(alreadySelectedIds)
    );
  }, [alreadySelectedIds]);

  const startRoulette = () => {
    console.log("selecting random activity.");
    if (alreadySelectedIds.length >= activitiesData.length) {
      setNoContent(true);
      return;
    }
    let randomId = getRandomInt(0, activitiesData.length);
    while (alreadySelectedIds.includes(randomId)) {
      if (alreadySelectedIds.length >= activitiesData.length) {
        console.log("no more activities");
        setNoContent(true);
        return;
      }
      randomId = getRandomInt(0, activitiesData.length);
    }
    setActivity(activitiesData[randomId]);
    setAlreadySelectedIds([...alreadySelectedIds, randomId]);
    setIsRouletteStarted(true);
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
      alignItems="baseline"
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
