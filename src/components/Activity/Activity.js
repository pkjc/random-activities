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

export default function Activity() {
  const classes = useStyles();
  return (
    <Grid container md={6} xs={10} lg={5} item>
      <Card className={classes.card}>
        <CardHeader
          classes={{ root: classes.cardHeader, avatar: classes.avatar }}
          title={
            <Typography
              color="textSecondary"
              className={classes.cardHeaderTitle}
            >
              #watching
            </Typography>
          }
        />
        <Divider />
        <CardMedia
          className={classes.media}
          image="https://i.picsum.photos/id/1/5616/3744.jpg"
          title="Paella dish"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.cardContentTitle}
            gutterBottom
            variant="h4"
            component="h1"
          >
            Watch Some Dcoumentaries on DocumentaryHeaven.com
          </Typography>
          <Typography
            variant="h5"
            className={classes.cardContentPara}
            color="textSecondary"
            component="p"
          >
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup
            className={classes.buttonGroup}
            fullWidth
            size="medium"
            aria-label="outlined primary button group"
          >
            <Button startIcon={<ThumbUpIcon />} className={classes.yayBtn}>
              Dope
            </Button>
            <Button startIcon={<ThumbDownIcon />} className={classes.nayBtn}>
              Nope
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  );
}
