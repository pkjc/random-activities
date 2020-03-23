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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SavedActivities from "../../components/SavedActivities/SavedActivities";

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar className={classes.appBar} elevation={0} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              WTFtodo
            </Typography>
            <Box mr={1}>
              <Button
                color="inherit"
                className={classes.button}
                startIcon={<PublishIcon />}
                size="small"
                variant="outlined"
              >
                Suggest Activity
              </Button>
            </Box>
            <Button
              color="inherit"
              className={classes.button}
              startIcon={<ThumbUpIcon />}
              size="small"
            >
              Saved
            </Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/saved" component={SavedActivities} />
        </Switch>
      </Router>
    </div>
  );
}
