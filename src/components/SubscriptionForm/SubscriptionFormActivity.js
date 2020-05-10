import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// a basic form
const SubscriptionFormActivity = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      textAlign: "center",
      fontSize: 16,
      marginTop: theme.spacing(1),
      fontWeight: "bold",
      paddingTop: ".25rem",
      paddingBottom: ".25rem",
      borderWidth: 1,
      "&:hover": {
        borderWidth: 2,
      },
      ["@media (max-width:600px)"]: {
        // eslint-disable-line no-useless-computed-key
        marginTop: 0,
      },
    },
  }));
  const classes = useStyles();

  return (
    <form
      className={classes.form}
      action="https://now.us7.list-manage.com/subscribe/post?u=4b4ce6b23515c9681af69c32e&amp;id=e562fe3571"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <Grid container justify="space-between" alignItems="center" spacing={2}>
        <Grid item xs={12} md={9}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="mce-EMAIL"
            label="Email Address"
            name="EMAIL"
            autoComplete="email"
            fullWidth
            size="small"
            className={classes.emailField}
            style={{ background: "#fff" }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            type="submit"
            size="small"
            variant="outlined"
            color="primary"
            className={classes.submit}
            id="mc-embedded-subscribe"
            fullWidth
          >
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SubscriptionFormActivity;
