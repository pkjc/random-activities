import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ThumbUpOutlined from "@material-ui/icons/ThumbUpOutlined";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
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
import { Link } from "@material-ui/core";

export default function App() {
  const classes = useStyles();

  const [savedActivitiesData, setSavedActivitiesData] = React.useState(
    JSON.parse(localStorage.getItem("savedActivities")) || []
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
                  <Typography
                    color="inherit"
                    style={{ textTransform: "Capitalize" }}
                  >
                    Bored@Home
                  </Typography>
                </RouterLink>
              </Grid>
              <Grid item>
                <Button
                  color="inherit"
                  className={classes.button}
                  href="https://forms.gle/SktfRvJJB8hJ6u4FA"
                  size="small"
                  style={{ borderBottom: "1px solid", borderRadius: 0 }}
                  target="_blank"
                >
                  Suggest Activity
                </Button>
              </Grid>
              <Grid item>
                <RouterLink to="/saved" style={{ textDecoration: "none" }}>
                  <Button
                    className={classes.button}
                    style={{ background: "#609860" }}
                    startIcon={<ThumbUpOutlined />}
                    size="medium"
                    color="primary"
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
