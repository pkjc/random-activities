import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, minHeight: "100vh" },
  card: {
    padding: 0,
    maxWidth: 700,
    marginTop: 50,
    ["@media (max-width:600px)"]: {
      marginTop: 50,
    },
  },
  cardContent: {
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 14,
    paddingTop: 22,
  },
  cardContentPara: {},
  media: {
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
    marginTop: 5,
  },
  cardHeader: {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
  buttonGroup: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
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
  },
  grid: {
    height: "85.5%",
    display: "flex",
    ["@media (max-width:600px)"]: {
      height: "90%",
      paddingBottom: "25%",
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
}));

export default useStyles;
