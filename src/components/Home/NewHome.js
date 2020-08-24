import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../assets/styles";
import Activity from "../Activity/Activity";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import HeroContent from "./HeroContent";
import NoMoreContent from "./NoMoreContent";

function Alert(props) {
  return <MuiAlert elevation={1} variant="filled" {...props} />;
}

export default function NewHome(props) {
  //From Props
  const { savedActivities, setSavedActivities } = props;
  const { isRouletteStarted, setIsRouletteStarted } = props;
  //   const { activitiesData } = props;
  //Local State
  //   const [activity, setActivity] = useState({});
  //   const [noContent, setNoContent] = useState(false);
  const [isSaveSuccessful, setIsSaveSuccessful] = useState(false);

  useEffect(() => {
    localStorage.setItem("savedActivities", JSON.stringify(savedActivities));
  }, [savedActivities]);

  useEffect(() => {
    if (isRouletteStarted) {
      startRoulette();
    }
  }, [isRouletteStarted]);

  const startRoulette = () => {
    // setActivity(activitiesData);
    setIsRouletteStarted(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSaveSuccessful(false);
  };
  const dopeHandler = (savedActivity) => {
    if (!savedActivities.includes(JSON.stringify(savedActivity))) {
      setSavedActivities([...savedActivities, JSON.stringify(savedActivity)]);
      setIsSaveSuccessful(true);
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
        alignItems="flex-start"
        xs={12}
        item
      >
        {!isRouletteStarted && (
          <HeroContent startRouletteHandler={startRoulette} />
        )}

        {isRouletteStarted && (
          <Activity dopeHandler={dopeHandler} nopeHandler={nopeHandler} />
        )}
      </Grid>
      <Snackbar
        open={isSaveSuccessful}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Activity Saved!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

//Utils
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// function isEmpty(obj) {
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) return false;
//   }
//   return true;
// }
