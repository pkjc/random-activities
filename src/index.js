import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Lato",
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
theme.typography.h4 = {
  fontSize: "1.5rem",
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.8em"
  }
};
theme.typography.h5 = {
  fontSize: "1.2rem",
  lineHeight: "1.45",
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.35em"
  }
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.querySelector("#app")
);