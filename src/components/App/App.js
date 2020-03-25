import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PublishIcon from "@material-ui/icons/Publish";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "../../assets/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SavedActivities from "../../components/SavedActivities/SavedActivities";
import Home from "../../components/Home/Home";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar className={classes.appBar} elevation={0} position="static">
          <Toolbar>
            <Grid
              justify="space-between" // Add it here :)
              alignItems="center"
              container
              spacing={0}
            >
              <Grid item>
                <Link href="/" variant="button" className={classes.title}>
                  <Typography
                    href="/saved"
                    color="initial"
                    style={{ textTransform: "Capitalize" }}
                  >
                    Bored@Home
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Button
                  color="inherit"
                  className={classes.button}
                  startIcon={<PublishIcon />}
                  size="small"
                  variant="outlined"
                >
                  Suggest Activity
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="inherit"
                  className={classes.button}
                  startIcon={<ThumbUpIcon />}
                  size="small"
                  href="/saved"
                >
                  Saved
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/saved" component={SavedActivities} />
        </Switch>
      </Router>
    </div>
  );
}
