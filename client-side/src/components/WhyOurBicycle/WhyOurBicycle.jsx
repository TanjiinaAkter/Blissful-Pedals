import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import StarIcon from "@mui/icons-material/Star";
import { Box, Grid } from "@mui/material";
import Container from "../Common/Container";
import Item from "./Item";
const iconStyle = { fontSize: "5rem", color: "var(--secondary)" };
const WhyOurBicycle = () => {
  return (
    <Box py="4rem">
      <Container>
        <Grid container spacing={3}>
          <Item
            icon={<DirectionsBikeIcon style={iconStyle} />}
            title="Many Types of Bikes"
            description="We can fit you with the perfect bike because we carry all sizes and
            of bikes."
          />
          <Item
            icon={<AccessTimeIcon style={iconStyle} />}
            title="Longest Opening Hours"
            description="Have all the time in the world? Rent for an entire day and explore New York City at your leisure."
          />
          <Item
            icon={<StarIcon style={iconStyle} />}
            title="Best Bikes in Town"
            description="Comfort. Safety. Our equipment is guaranteed to make your biking experience 100% stree-free."
          />
          <Item
            icon={<AttachMoneyIcon style={iconStyle} />}
            title="Rent Fully Insured"
            description="A simple bodily injury claim from a customer riding your bike can derail your business."
          />
        </Grid>
      </Container>
    </Box>
  );
};
export default WhyOurBicycle;
