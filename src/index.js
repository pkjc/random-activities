import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { AppContextProvider } from "./components/App/AppContext";
import IFrameApp from "./components/App/IFrameApp";

const appCtx = { rouletteStarted: false };

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "sans-serif",
      "monospace"
    ].join(","),
  },
  // palette: {
  //   primary: {
  //     light: "#b27aff",
  //     main: "#7d4cdb",
  //     dark: "#481ea8",
  //     contrastText: "#fff"
  //   },
  //   secondary: {
  //     light: "#a6ffe2",
  //     main: "#6fffb0",
  //     dark: "#30cb80",
  //     contrastText: "#fff"
  //   }
  // },
  palette: {
    primary: {
      light: "#b27aff",
      main: "#7d4cdb",
      dark: "#481ea8",
      contrastText: "#fff",
    },
    secondary: {
      light: "#a6ffe2",
      main: "#6fffb0",
      dark: "#30cb80",
      contrastText: "#fff",
    },
  },
});

theme.typography.h2 = {
  fontSize: "3rem",
  [theme.breakpoints.up("lg")]: {
    fontSize: "4rem",
  },
};
theme.typography.h4 = {
  fontSize: "1.5rem",
  lineHeight: "1.2",
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
};
theme.typography.h5 = {
  fontSize: "1.05rem",
  lineHeight: "1.45",
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.1em",
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppContextProvider value={appCtx}>
      {/* {localStorage.clear()} */}
      <App />
    </AppContextProvider>
  </ThemeProvider>,
  document.querySelector("#app")
);
