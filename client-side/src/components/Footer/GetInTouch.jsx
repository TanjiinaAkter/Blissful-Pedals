import {
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

const Item = ({ icon, description }) => (
  <Box py="0.5rem" display="flex" alignItems="center">
    <Box color="white" pr="0.5rem">
      {icon}
    </Box>
    <Typography variant="body1" color="GrayText">
      {description}
    </Typography>
  </Box>
);

const GetInTouch = () => (
  <Box>
    <Typography color="var(--white)" variant="h5">
      Get In Touch
    </Typography>
    <Box py="0.5rem">
      <Divider />
    </Box>
    <Item
      icon={<LocationOnIcon color="inherit" />}
      description="105 BellSouth Street, BR, United States"
    />
    <Item
      icon={<EmailIcon color="inherit" />}
      description="support@renroll.com
"
    />
    <Item icon={<PhoneIcon color="inherit" />} description="+1 755 302 8549" />
  </Box>
);

export default GetInTouch;
