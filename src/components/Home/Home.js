import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../assets/styles";
import Activity from "../Activity/Activity";
import data from "../../assets/data";

export default function Home(props) {
  // localStorage.clear();
  const [activityId, setActivityId] = useState(0);
  // const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alreadySelectedIds, setAlreadySelectedIds] = useState([]);
  const [counter, setCounter] = useState(0);

  const { savedActivities, setSavedActivities } = props;

  useEffect(() => {
    // add to localStorage
    localStorage.setItem("savedActivities", JSON.stringify(savedActivities));
  }, [savedActivities]);

  useEffect(() => {
    // 1. pull data from api
    // TODO

    //2. Set data in state variable
    // setActivities(data);

    // 3. Select random item from data
    selectRandomActivity();
  }, []);

  const selectRandomActivity = () => {
    if (counter >= data.length) {
      console.log("no more activities");
      return;
    }
    let randomId = getRandomInt(0, data.length);
    setCounter(counter + 1);
    while (alreadySelectedIds.includes(randomId)) {
      if (counter >= data.length) {
        console.log("no more activities");
        return;
      }
      randomId = getRandomInt(0, data.length);
      setCounter(counter + 1);
    }
    setActivityId(randomId);
    setAlreadySelectedIds([...alreadySelectedIds, randomId]);
    setIsLoading(false);
  };

  const dopeHandler = savedActivity => {
    if (!savedActivities.includes(JSON.stringify(savedActivity)))
      setSavedActivities([...savedActivities, JSON.stringify(savedActivity)]);
    selectRandomActivity();
  };

  const nopeHandler = () => {
    selectRandomActivity();
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
      {!isLoading && counter <= data.length && (
        <Activity
          activity={data[activityId]}
          dopeHandler={dopeHandler}
          nopeHandler={nopeHandler}
        />
      )}
    </Grid>
  );
}

//Util
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
