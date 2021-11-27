import { ArrowRight as ArrowRightIcon } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LinkItem = ({ name, path }) => (
  <Box display="flex" py="0.25rem">
    <Box mr="0.5rem" color="var(--secondary)">
      <ArrowRightIcon color="inherit" />
    </Box>
    <Link to={path} style={{ textDecoration: "none", color: "var(--white)" }}>
      {name}
    </Link>
  </Box>
);

const About = () => (
  <Box>
    <Typography color="var(--white)" variant="h5">
      About Blissful Pedals
    </Typography>
    <Box py="0.5rem">
      <Divider />
    </Box>

    <LinkItem name="About Us" path="/about-us" />
    <LinkItem name="Find a bicycle" path="/bicycles" />
    <LinkItem name="Bicycle Reviews" path="/reviews" />
    <LinkItem name="Login" path="/user/login" />
    <LinkItem name="Signup" path="/user/signup" />
    <LinkItem name="FQAS" path="/fqas" />
  </Box>
);

export default About;
