import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },

  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
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
        <Typography gutterBottom variant="h6" component="h2">
          {savedActivity.title}
        </Typography>
        <Typography>{savedActivity.description}</Typography>
      </CardContent>
      <CardActions>
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

export default function SavedActivities() {
  const classes = useStyles();

  const [savedActivities, setSavedActivities] = React.useState(
    JSON.parse(localStorage.getItem("savedActivities")) || []
  );

  console.log(savedActivities);

  useEffect(() => {
    // remove from localStorage
  }, [savedActivities]);

  const removeSavedActivity = savedActivityId => {
    // remove from state variable
    setSavedActivities([]);
  };
  const renderSavedActivity = savedActivity => {
    savedActivity = JSON.parse(savedActivity);
    return (
      <Grid item key={savedActivity.id} xs={12} sm={6} md={4}>
        <SavedActivity
          savedActivity={savedActivity}
          removeSavedActivity={removeSavedActivity}
        />
      </Grid>
    );
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {savedActivities.length < 1
            ? "No Saved Activities :("
            : savedActivities.map(savedActivity =>
                renderSavedActivity(savedActivity)
              )}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
