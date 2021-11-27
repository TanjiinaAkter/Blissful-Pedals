import { ArrowRight as ArrowRightIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const FeatureItem = ({ name }) => (
  <Box display="flex" py="0.25rem">
    <Box mr="0.5rem" color="var(--secondary)">
      <ArrowRightIcon color="inherit" />
    </Box>
    <Typography variant="body1" color="var(--neutral)">
      {name}
    </Typography>
  </Box>
);

const Features = ({ features }) => {
  const featuresArr = features?.split("#");
  return (
    <Box py="1rem">
      {featuresArr?.map((item) => (
        <FeatureItem name={item} key={item} />
      ))}
    </Box>
  );
};
export default Features;
