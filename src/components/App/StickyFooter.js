import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
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
      {/* {" "}
      {new Date().getFullYear()}
      {"."} */}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  footerContainer: {},
  footer: {
    padding: theme.spacing(3, 2),
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={3}
        >
          <Grid item xs={12} md={6} style={{ padding: "6px" }}>
            <Box
              component="span"
              display="flex"
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <Button
                color="inherit"
                href="https://forms.gle/SktfRvJJB8hJ6u4FA"
                size="medium"
                target="_blank"
                style={{
                  textTransform: "none",
                  fontSize: "1rem",
                  borderRadius: 5,
                }}
                variant="outlined"
              >
                Suggest Activity
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: "6px" }}>
            <Box
              component="span"
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Copyright />
            </Box>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
