import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { Button } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Made By "}
      <Link color="inherit" href="https://pankaj.co/">
        Pankaj
      </Link>
      {/* {" / "}
      Stay home, Stay safe!
      {"."} */}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid #ccc",
  },
  footerContainer: {},
  footer: {
    padding: theme.spacing(2, 0),

    position: "static",
    bottom: 0,
    width: "97%",
    zIndex: "9999",
    margin: "auto",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4}>
            <Box
              component="span"
              display="flex"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <Button
                color="inherit"
                href="https://forms.gle/SktfRvJJB8hJ6u4FA"
                size="small"
                target="_blank"
                style={{
                  textTransform: "none",
                  borderRadius: 5,
                }}
                variant="outlined"
              >
                Suggest Activity
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} md={4}>
            <Box
              component="span"
              display="flex"
              justifyContent={{ xs: "flex-end", md: "flex-start" }}
            >
              <Copyright />
            </Box>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
