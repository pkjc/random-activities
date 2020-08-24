import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { FiBookmark } from "react-icons/fi";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../assets/styles";
import Link from "@material-ui/core/Link";
import loading from "../../assets/images/loading.gif";
import SubscriptionFormActivity from "../SubscriptionForm/SubscriptionFormActivity";
import { BsShuffle } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";

export default function Activity(props) {
  const classes = useStyles();
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [activity, setActivity] = React.useState({});
  let retryCount = 3;

  const handleImageLoaded = () => {
    setIsImgLoaded(true);
  };

  function fetchDataFromServer() {
    fetch("/api/activities")
      .then((response) => {
        if (response.status === 500 && retryCount > 0) {
          console.log("Retrying...");
          fetchDataFromServer();
          retryCount--;
        } else {
          return response.json();
        }
      })
      .then((actvty) => {
        console.log(actvty);
        if (actvty) {
          setImage(actvty);
          setActivity(actvty);
          setIsDataLoading(false);
        }
      });
  }

  const setImage = (act) => {
    if (act["og:image"]) {
      act["image"] = act["og:image"];
    } else if (act["image"]) {
      // do nothing
    } else {
      act["image"] =
        "https://webshot.deam.io/" +
        act.url +
        "?width=1280&height=720&delay=100&";
    }
    if (act["image"].charAt(0) === "/") {
      act["image"] = act.source + act["image"];
    }
    console.log("after updating image: ", act);
  };

  const nopeHandler = () => {
    setIsDataLoading(true);
    fetchDataFromServer();
  };

  useEffect(() => {
    setIsDataLoading(true);
    fetchDataFromServer();
  }, []);

  useEffect(() => {
    setIsImgLoaded(false);
  }, [activity.image]);

  const imageStyle = !isImgLoaded
    ? { display: "none" }
    : { objectFit: "contain" };

  if (isDataLoading) {
    return (
      <Box
        display="flex"
        style={{ minHeight: "87vh" }}
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      spacing={0}
    >
      <Grid item xs={11}>
        <Card className={classes.card}>
          {activity.image && !isImgLoaded && (
            <CardMedia
              component="img"
              className={classes.media}
              src={loading}
              title={activity.title}
            />
          )}
          <CardMedia
            key={activity.image}
            component={activity.mediaType === "video" ? "iframe" : "img"}
            className={classes.media}
            src={activity.image}
            onLoad={handleImageLoaded}
            title={activity.title}
            style={imageStyle}
          />
          <CardContent className={classes.cardContent}>
            {/* <Typography className={classes.cardHeaderTitle}>
            {activity.category}
          </Typography> */}

            {/* <Typography
              variant="overline"
              className={classes.cardContentPara}
              color="textSecondary"
            >
              Source: {activity["source"]}
              {activity["og:title"] ? activity["og:title"] : activity["title"]} 
            </Typography> */}
            <Chip
              variant="outlined"
              size="small"
              className={classes.cardContentPara}
              label={"Source: " + activity["source"]}
            />
            <Link href={activity.url} target="_blank" rel="noreferrer">
              <Typography
                className={classes.cardContentTitle}
                gutterBottom
                variant="h4"
                component="h1"
              >
                {activity["og:description"]
                  ? activity["og:description"]
                  : activity["description"]}
                {!activity["og:description"] && !activity["description"]
                  ? activity["title"]
                  : ""}
              </Typography>
            </Link>
          </CardContent>
          <CardActions>
            <ButtonGroup
              className={classes.buttonGroup}
              fullWidth
              size="medium"
              aria-label="outlined primary button group"
            >
              <Button
                startIcon={<FiBookmark />}
                className={classes.yayBtn}
                onClick={() => {
                  props.dopeHandler(activity);
                }}
              >
                Save
              </Button>
              <Button
                color="primary"
                startIcon={<FiExternalLink />}
                className={classes.visitBtn}
                href={activity.url}
                target="_blank"
                rel="noreferrer"
              >
                {activity.category ? activity.category : "Visit"}
              </Button>
              <Button
                endIcon={<BsShuffle />}
                disableRipple
                className={classes.nayBtn}
                onClick={nopeHandler}
              >
                Next
              </Button>
            </ButtonGroup>
          </CardActions>
          {/* <Typography
            variant="body1"
            color="textSecondary"
            style={{
              textAlign: "center",
              padding: "0 10% 1.5% 10%",
              fontSize: ".85rem",
            }}
          >
            Click 'Save' or 'Next' to see next activity
          </Typography> */}
        </Card>
      </Grid>
      <Grid
        item
        xs={11}
        className={classes.activitySubscriptionForm}
        style={{ padding: 15, marginTop: 30 }}
      >
        <Typography variant="h4" className={classes.subscriptionTitle}>
          Get more fun things to do via email
        </Typography>
        <SubscriptionFormActivity />
      </Grid>
    </Grid>
  );
}
