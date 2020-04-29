import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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
      margin: theme.spacing(2, 0, 0),
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      borderWidth: 2,
      "&:hover": {
        borderWidth: 2,
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
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="mce-EMAIL"
        label="Email Address"
        name="EMAIL"
        autoComplete="email"
        style={{ marginBottom: 0, background: "#fff" }}
      />
      <Button
        type="submit"
        size="medium"
        variant="outlined"
        fullWidth
        color="primary"
        className={classes.submit}
        id="mc-embedded-subscribe"
      >
        YES PLEASE!
      </Button>
    </form>
  );
};

export default SubscriptionForm;
