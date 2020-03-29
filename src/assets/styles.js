import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  card: {
    padding: 0,
    maxWidth: 700,
    marginTop: 30
  },
  cardContent: {
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 14,
    paddingTop: 22
  },
  cardContentPara: {},
  media: {
    height: 400,
    borderBottom: "1px solid #ddd"
    // // paddingTop: "51.25%",
    // backgroundSize: "708px auto !important"
  },
  avatar: {
    border: "1px solid #ddd",
    marginRight: 9,
    borderRadius: "50%",
    padding: "0px"
  },
  cardHeaderTitle: {
    fontSize: 17,
    fontStyle: "Italic",
    color: "#777"
  },
  cardContentTitle: {
    fontWeight: "bold",
    marginTop: 5
  },
  cardHeader: {
    paddingTop: "12px !important",
    paddingBottom: "12px !important"
  },
  buttonGroup: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0
  },
  yayBtn: {
    color: "#609860",
    borderColor: "#609860",
    textTransform: "Capitalize",
    fontSize: 16
  },
  nayBtn: {
    color: "#555",
    borderColor: "#aaa",
    textTransform: "Capitalize",
    fontSize: 16
  },
  visitBtn: {
    textTransform: "Capitalize",
    fontSize: 16
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "#fff"
  },
  title: {
    color: "#fff",
    textTransform: "Capitalize",
    fontWeight: "bold"
  },
  grid: {
    height: "100%",
    display: "flex"
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  homeAlert: {
    marginTop: 12,
    alignItems: "center",
    justify: "center"
  }
}));

export default useStyles;
