import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#b27aff",
      main: "#7d4cdb",
      dark: "#481ea8",
      contrastText: "#fff"
    },
    secondary: {
      light: "#a6ffe2",
      main: "#6fffb0",
      dark: "#30cb80",
      contrastText: "#fff"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

theme.typography.h2 = {
  fontSize: "3rem",
  [theme.breakpoints.up("lg")]: {
    fontSize: "4rem"
  }
};
theme.typography.h4 = {
  fontSize: "1.5rem",
  lineHeight: "1.2",
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem"
  }
};
theme.typography.h5 = {
  fontSize: "1.05rem",
  lineHeight: "1.45",
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.1em"
  }
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {localStorage.clear()}
    <App />
  </ThemeProvider>,
  document.querySelector("#app")
);
