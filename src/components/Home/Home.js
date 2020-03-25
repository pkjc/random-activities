import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../assets/styles";
import Activity from "../Activity/Activity";
import data from "../../assets/data";

export default function Home() {
  const [activityId, setActivityId] = useState(0);
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let alreadySelectedIds = [];

  useEffect(() => {
    // 1. pull data from api
    // TODO

    //2. Set data in state variable
    setActivities(data);

    // 3. Select random item from data
    selectRandomActivity();

    // 4. Change loading to false
    setIsLoading(false);
  }, []);

  const selectRandomActivity = () => {
    let randomId = getRandomInt(0, activities.length);
    while (alreadySelectedIds.includes(randomId)) {
      randomId = getRandomInt(0, activities.length);
    }
    setActivityId(randomId);
    alreadySelectedIds.push(randomId);
  };

  const dopeHandler = () => {
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
      {!isLoading && (
        <Activity
          activity={activities[activityId]}
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
