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
  cardContentPara: {
    fontSize: 20
  },
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
    fontSize: 18
  },
  cardContentTitle: {
    fontWeight: 700
  },
  cardHeader: { paddingLeft: 22 },
  buttonGroup: { paddingLeft: 16, paddingRight: 16, paddingBottom: 16 },
  yayBtn: {
    color: "green",
    borderColor: "green",
    fontSize: 18
  },
  nayBtn: {
    color: "red",
    borderColor: "red",
    fontSize: 18
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "#fff"
  },
  title: {
    flex: 1
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
