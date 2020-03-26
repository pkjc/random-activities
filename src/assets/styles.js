import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  card: {
    padding: 0
  },
  cardContent: {
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 14,
    paddingTop: 22
  },
  cardContentPara: {},
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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
    fontWeight: 700
  },
  cardHeader: {
    paddingTop: "12px !important",
    paddingBottom: "12px !important"
  },
  buttonGroup: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16
  },
  yayBtn: {
    color: "#609860",
    borderColor: "#609860",
    fontSize: 16,
    textTransform: "Capitalize"
  },
  nayBtn: {
    fontSize: 16,
    color: "#6f6d6d",
    textTransform: "Capitalize"
  },
  visitBtn: {
    fontSize: 16,
    textTransform: "Capitalize"
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "#fff"
  },
  title: {
    color: "#fff"
  },
  grid: {
    height: "100%",
    display: "flex"
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}));

export default useStyles;
