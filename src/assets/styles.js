import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, minHeight: "100vh" },
  card: {
    padding: 0,

    marginTop: 35,
    ["@media (max-width:600px)"]: {
      marginTop: 20,
    },
    ["@media (min-width:600px)"]: {
      width: 750,
    },
  },
  cardContent: {
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 14,
    paddingTop: 22,
  },
  cardContentPara: {
    fontSize: ".95rem",
    textTransform: "uppercase",
    color: "#21bb67 !important",
    letterSpacing: 1,
  },
  media: {
    objectFit: "contain",
    height: 380,
    // eslint-disable-line no-useless-computed-key
    ["@media (max-width:600px)"]: {
      height: 260,
    },
    borderBottom: "1px solid #ddd",
    // // paddingTop: "51.25%",
    // backgroundSize: "708px auto !important"
  },
  avatar: {
    border: "1px solid #ddd",
    marginRight: 9,
    borderRadius: "50%",
    padding: "0px",
  },
  cardHeaderTitle: {
    fontSize: 17,
    fontStyle: "Italic",
    color: "#777",
  },
  cardContentTitle: {
    fontWeight: "bold",
    marginTop: 7,
    marginBottom: 2,
    fontSize: "2rem",
    // textTransform: "capitalize",
    lineHeight: 1.2,
    ["@media (max-width:600px)"]: {
      fontSize: "1.75rem",
    },
  },
  cardHeader: {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
  buttonGroup: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 10,
  },
  yayBtn: {
    color: "#609860",
    borderColor: "#609860",
    textTransform: "Capitalize",
    fontSize: 16,
  },
  nayBtn: {
    color: "#555",
    borderColor: "#aaa",
    textTransform: "Capitalize",
    fontSize: 16,
  },
  visitBtn: {
    textTransform: "Capitalize",
    fontSize: 16,
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "#fff",
  },
  title: {
    color: theme.palette.secondary.main,
    textTransform: "Capitalize",
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
  grid: {
    height: "auto",
    paddingBottom: "2%",
    ["@media (max-width:600px)"]: {
      height: "auto",
      paddingBottom: "2%",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  homeAlert: {
    marginTop: 12,
    alignItems: "center",
    justify: "center",
  },
  fabMargin: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    fontWeight: "bold",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    fontSize: "1.35em",
    verticalAlign: "middle",
  },
  subscriptionTitle: {
    fontSize: "1.8rem",
    textAlign: "left",
    color: "#777",
    lineHeight: "1",
    marginTop: 10,
    marginLeft: 4,
    fontWeight: 400,
  },
  activitySubscriptionForm: {
    border: "1px solid #ddd",
    borderRadius: 5,
    background: "#fbfbfb",
    width: "100%",
    // eslint-disable-line no-useless-computed-key
    ["@media (min-width:600px)"]: {
      maxWidth: "750px !important",
    },
  },
}));

export default useStyles;
