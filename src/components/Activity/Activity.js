import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../assets/styles";

export default function Activity(props) {
  const classes = useStyles();
  return (
    <Grid container md={6} xs={11} lg={5} item>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={
            <Typography color="textPrimary" className={classes.cardHeaderTitle}>
              {props.activity.category}
            </Typography>
          }
        />
        <Divider />
        <CardMedia
          className={classes.media}
          image={props.activity.image}
          title={props.activity.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.cardContentTitle}
            gutterBottom
            variant="h4"
            component="h1"
          >
            {props.activity.title}
          </Typography>
          <Typography
            variant="h5"
            className={classes.cardContentPara}
            color="textSecondary"
            component="p"
          >
            {props.activity.description}{" "}
            <span>
              <a href={props.activity.url}>Visit</a>
            </span>
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup
            className={classes.buttonGroup}
            fullWidth
            size="medium"
            aria-label="outlined primary button group"
          >
            <Button
              startIcon={<ThumbUpIcon />}
              className={classes.yayBtn}
              onClick={() => {
                props.dopeHandler();
              }}
            >
              Dope
            </Button>
            <Button
              startIcon={<ThumbDownIcon />}
              className={classes.nayBtn}
              onClick={() => {
                props.dopeHandler();
              }}
            >
              Nope
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  );
}
