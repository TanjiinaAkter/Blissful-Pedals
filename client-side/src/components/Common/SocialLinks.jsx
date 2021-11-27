import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocialLinks = () => {
  return (
    <Box justifyContent="space-between" color="var(--black)">
      <IconButton
        size="large"
        color="inherit"
        href="https://facebook.com"
        target="_blank"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
        href="https://youtube.com"
        target="_blank"
      >
        <YouTubeIcon />
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
        href="https://twitter.com"
        target="_blank"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
        href="https://instagram.com"
        target="_blank"
      >
        <InstagramIcon />
      </IconButton>
    </Box>
  );
};
export default SocialLinks;
