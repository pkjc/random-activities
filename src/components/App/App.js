import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ThumbUpOutlined from "@material-ui/icons/ThumbUpOutlined";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "../../assets/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";
import SavedActivities from "../../components/SavedActivities/SavedActivities";
import Home from "../../components/Home/Home";
import Grid from "@material-ui/core/Grid";

export default function App() {
  const classes = useStyles();

  const [savedActivitiesData, setSavedActivitiesData] = React.useState(
    JSON.parse(localStorage.getItem("savedActivities")) || []
  );

  const [pickedActivitiesData, setPickedActivitiesData] = React.useState(
    JSON.parse(localStorage.getItem("pickedActivities")) || []
  );

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
                <Button
                  color="inherit"
                  className={classes.button}
                  href="https://forms.gle/SktfRvJJB8hJ6u4FA"
                  size="medium"
                  target="_blank"
                  style={{
                    textTransform: "none",
                    marginRight: 18,
                    fontSize: "1rem"
                  }}
                >
                  Suggest Activity
                </Button>
                <RouterLink to="/saved" style={{ textDecoration: "none" }}>
                  <Button
                    className={classes.button}
                    startIcon={<ThumbUpOutlined />}
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
            />
          </Route>
          <Route path="/saved">
            <SavedActivities
              savedActivities={savedActivitiesData}
              setSavedActivities={setSavedActivitiesData}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
