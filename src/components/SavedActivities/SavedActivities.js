import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
    height: "100%",
    ["@media (max-width:600px)"]: {
      height: "100%",
    },
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9,
    borderBottom: "1px solid #ddd",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function SavedActivity(props) {
  const classes = useStyles();

  const savedActivity = props.savedActivity;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={savedActivity.image}
        title={savedActivity.title}
      />
      <CardContent className={classes.cardContent}>
        <Link href={savedActivity.url}>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            style={{
              lineHeight: 1.25,
              fontSize: "1.35rem",
              fontWeight: "bold",
            }}
          >
            {savedActivity.title}
          </Typography>
        </Link>
        <Typography>{savedActivity.description}</Typography>
      </CardContent>
      <CardActions>
        <Link href={savedActivity.url}>
          <Button size="medium" color="primary">
            Check it out
          </Button>
        </Link>
        <Button
          size="medium"
          color="primary"
          onClick={() => {
            props.removeSavedActivity(savedActivity.id);
          }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default function SavedActivities(props) {
  const classes = useStyles();

  const { savedActivities, setSavedActivities } = props;

  useEffect(() => {
    localStorage.setItem("savedActivities", JSON.stringify(savedActivities));
  }, [savedActivities]);

  const removeSavedActivity = (savedActivityId) => {
    savedActivities.filter(function (savedActivity) {
      savedActivity = JSON.parse(savedActivity);
      return savedActivity.id !== savedActivityId;
    });

    // remove from state variable
    setSavedActivities(
      savedActivities.filter(function (savedActivity) {
        savedActivity = JSON.parse(savedActivity);
        return savedActivity.id !== savedActivityId;
      })
    );
  };
  const renderSavedActivity = (savedActivity) => {
    savedActivity = JSON.parse(savedActivity);
    return (
      <Grid item key={savedActivity.id} xs={12} md={6} lg={4}>
        <SavedActivity
          savedActivity={savedActivity}
          removeSavedActivity={removeSavedActivity}
        />
      </Grid>
    );
  };

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Grid
        container
        className={classes.cardGrid}
        justify="flex-start"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          {savedActivities.length < 1 ? (
            <Typography
              variant="h4"
              align="center"
              justify="center"
              color="textSecondary"
              component="p"
            >
              No Saved Activities.{" "}
              <RouterLink style={{ textAlign: "center" }} to="/">
                Go save some!
              </RouterLink>
            </Typography>
          ) : (
            <Typography
              variant="h4"
              align="center"
              justify="center"
              color="textSecondary"
              component="p"
            >
              <RouterLink
                style={{ textDecoration: "none", textAlign: "center" }}
                to="/"
              >
                {"\u2190"} Back
              </RouterLink>
            </Typography>
          )}
        </Grid>
        <br />
        <Grid container item xs={11} md={8} spacing={3}>
          {savedActivities &&
            savedActivities.length > 0 &&
            savedActivities.map((savedActivity) =>
              renderSavedActivity(savedActivity)
            )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
