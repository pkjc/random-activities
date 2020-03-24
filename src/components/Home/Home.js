import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../assets/styles";
import Activity from "../Activity/Activity";

export default function Home() {
  const [activityId, setActivityId] = useState(0);

  const selectRandomActivity = () => {};

  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.grid}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Activity />
    </Grid>
  );
}
