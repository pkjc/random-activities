import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
} from "react-share";

export default function SocialShareButtons() {
  const useStyles = makeStyles((theme) => ({
    shareBtn: {
      height: 40,
      marginLeft: 7,
    },
  }));
  const shareUrl = "https://boredaf.xyz";
  const title = "BoredAF? Find cool sites & fun things to do online.";
  const classes = useStyles();
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent={{ xs: "center" }}>
        <Typography>SHARE: </Typography>
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          hashtags={["boredaf", "boredathome", "boredatwork", "boredatschool"]}
          className={classes.shareBtn}
        >
          <FacebookIcon size={36} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className={classes.shareBtn}
          hashtags={["boredaf", "boredathome", "boredatwork", "boredatschool"]}
        >
          <TwitterIcon size={36} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          className={classes.shareBtn}
        >
          <WhatsappIcon size={36} round />
        </WhatsappShareButton>
        <RedditShareButton
          url={shareUrl}
          title={title}
          className={classes.shareBtn}
        >
          <RedditIcon size={36} round />
        </RedditShareButton>
      </Box>
    </>
  );
}
