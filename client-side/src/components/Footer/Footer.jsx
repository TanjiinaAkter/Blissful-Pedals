import { Box, Grid, Typography } from "@mui/material";
import Container from "../Common/Container";
import Brand from "../Header/Brand";
import About from "./About";
import FooterBottom from "./FooterBottom";
import GetInTouch from "./GetInTouch";
import Locations from "./Locations";
import SocialLinks from "./SocialLinks";

const Footer = () => (
  <Box component="footer" bgcolor="var(--primary)">
    <Container>
      <Box py="2rem">
        <Grid container spacing={2}>
          <Grid item sm={3}>
            <Brand />
            <Typography variant="subtitle1" color="var(--white)">
              We have provided awesome bicycles for you, click on the "Find A
              Bicycles" button to get your desired cycle.
            </Typography>
            <SocialLinks />
          </Grid>

          <Grid item sm={3}>
            <Locations />
          </Grid>

          <Grid item sm={3}>
            <About />
          </Grid>
          <Grid item sm={3}>
            <GetInTouch />
          </Grid>
        </Grid>
      </Box>
      <FooterBottom />
    </Container>
  </Box>
);

export default Footer;
