import { Box, Divider, Typography } from "@mui/material";

const Item = ({ title, description, number }) => (
  <Box py="0.25rem">
    <Typography variant="subtitle1" color="var(--white)">
      {title}
    </Typography>
    <Typography variant="body1" color="GrayText">
      {description}
    </Typography>
    <Typography variant="body1" color="GrayText">
      {number}
    </Typography>
  </Box>
);

const RelatedLinks = () => (
  <Box>
    <Typography color="var(--white)" variant="h5">
      Our Locations
    </Typography>
    <Box py="0.5rem">
      <Divider />
    </Box>

    <Item
      title="Big Pyramid Avenue"
      description="105 BellSouth Street, Madrid
"
      number={"+820-987-2365"}
    />
    <Item
      title="Enclave Tour Spot
"
      description="105 BellSouth Street, Madrid
"
      number={"+820-987-2365"}
    />
    <Item
      title="Lesiure Town Park
"
      description="105 BellSouth Street, Madrid
"
      number={"+820-987-2365"}
    />
  </Box>
);

export default RelatedLinks;
