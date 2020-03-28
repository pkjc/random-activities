import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../assets/styles";
import Activity from "../Activity/Activity";
// import data from "../../assets/data";
import Tabletop from "tabletop";
import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";
import HeroContent from "./HeroContent";

export default function NoMoreContent() {
  return <HeroContent error={true} />;
}
