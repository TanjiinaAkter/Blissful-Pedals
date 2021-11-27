import { Box, Typography } from "@mui/material";
import Container from "../components/Common/Container";
import Title from "../components/Common/Title";

const About = () => {
  return (
    <Container>
      <Box py="6rem">
        <Title title="About Us" />
        <Typography variant="subtitle1" pt="1rem" align="center">
          If you’re anything like us, you’re passionate about cycling. It’s the
          freedom of being on a bike, the burning feeling through your legs when
          you climb a steep hill, the feeling of accomplishment after a big ride
          and the competitiveness and camaraderie that makes the sport so
          enjoyable. And then, of course, there’s all the gear! You’re on a
          constant hunt for the newest and latest equipment. Equipment that will
          make your ride feel lighter, faster and perhaps even a little cooler.
          That’s what we love about cycling (just as much as having that latte
          at the end of a ride). Bicycles, wheels, components, saddles,
          handlebars - it’s never-ending and so much fun.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
