import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ThumbUpOutlined from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlined from "@material-ui/icons/ThumbDownOutlined";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../assets/styles";
import Link from "@material-ui/core/Link";
import CallMadeIcon from "@material-ui/icons/CallMade";

export default function Activity(props) {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      md={11}
      xs={11}
      lg={11}
      alignItems="center"
      justify="center"
    >
      <Card className={classes.card}>
        {/* <CardHeader
          className={classes.cardHeader}
          title={
            <Typography className={classes.cardHeaderTitle}>
              {props.activity.category}
            </Typography>
          }
        />
        <Divider /> */}
        {props.activity.image && (
          <CardMedia
            component={props.activity.mediaType === "video" ? "iframe" : "img"}
            className={classes.media}
            src={props.activity.image}
            title={props.activity.title}
          />
        )}
        <CardContent className={classes.cardContent}>
          {/* <Typography className={classes.cardHeaderTitle}>
            {props.activity.category}
          </Typography> */}
          <Link href={props.activity.url}>
            <Typography
              className={classes.cardContentTitle}
              gutterBottom
              variant="h4"
              component="h1"
            >
              {props.activity.title}
            </Typography>
          </Link>
          <Typography
            variant="h5"
            className={classes.cardContentPara}
            color="textSecondary"
            component="p"
          >
            {props.activity.description}{" "}
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
              startIcon={<ThumbUpOutlined />}
              className={classes.yayBtn}
              onClick={() => {
                props.dopeHandler(props.activity);
              }}
            >
              Save
            </Button>
            <Button
              color="primary"
              startIcon={<CallMadeIcon />}
              className={classes.visitBtn}
              href={props.activity.url}
              target="_blank"
            >
              {props.activity.category}
            </Button>
            <Button
              startIcon={<ThumbDownOutlined />}
              disableRipple
              className={classes.nayBtn}
              onClick={() => {
                props.nopeHandler();
              }}
            >
              Skip
            </Button>
          </ButtonGroup>
        </CardActions>
        <Typography
          variant="body1"
          color="textSecondary"
          style={{
            textAlign: "center",
            padding: "0 10% 1.5% 10%"
          }}
        >
          Click 'Save' or 'Skip' to see next.
        </Typography>
      </Card>
    </Grid>
  );
}
