import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Grid from "@material-ui/core/Grid";
import PublishIcon from "@material-ui/icons/Publish";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "../../assets/styles";
import Activity from "../Activity/Activity";
import Box from "@material-ui/core/Box";

export default function Home() {
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
