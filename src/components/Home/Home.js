import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../assets/styles";
import Activity from "../Activity/Activity";

import HeroContent from "./HeroContent";
import NoMoreContent from "./NoMoreContent";

export default function Home(props) {
  //From Props
  const { alreadySelectedIds, setAlreadySelectedIds } = props;
  const { savedActivities, setSavedActivities } = props;
  const { isRouletteStarted, setIsRouletteStarted } = props;
  const { activitiesData } = props;
  //Local State
  const [activity, setActivity] = useState({});
  const [noContent, setNoContent] = useState(false);

  useEffect(() => {
    localStorage.setItem("savedActivities", JSON.stringify(savedActivities));
  }, [savedActivities]);

  useEffect(() => {
    localStorage.setItem(
      "pickedActivities",
      JSON.stringify(alreadySelectedIds)
    );
  }, [alreadySelectedIds]);

  useEffect(() => {
    if (isRouletteStarted) {
      startRoulette();
    }
  }, []);
  const startRoulette = () => {
    if (
      alreadySelectedIds &&
      alreadySelectedIds.length >= activitiesData.length
    ) {
      setNoContent(true);
      return;
    }
    // if (alreadySelectedIds && alreadySelectedIds.length > 0) {
    //   setActivity(activitiesData[alreadySelectedIds.length - 1]);
    //   return;
    // }
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

  const dopeHandler = (savedActivity) => {
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
    <React.Fragment>
      <Grid
        container
        className={classes.grid}
        direction="row"
        justify="center"
        alignItems="baseline"
        xs={12}
        item
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
    </React.Fragment>
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
