import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// a basic form
const SubscriptionForm = () => {
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
      fontSize: 20,
      marginTop: theme.spacing(1),
      fontWeight: "bold",
      paddingTop: ".4rem",
      paddingBottom: ".4rem",
      borderWidth: 2,
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
        <Grid item xs={12} md={8}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="mce-EMAIL"
            label="Email Address"
            name="EMAIL"
            autoComplete="email"
            fullWidth
            style={{ background: "#fff" }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            type="submit"
            size="medium"
            variant="outlined"
            color="primary"
            className={classes.submit}
            id="mc-embedded-subscribe"
            fullWidth
          >
            YES PLEASE!
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SubscriptionForm;
