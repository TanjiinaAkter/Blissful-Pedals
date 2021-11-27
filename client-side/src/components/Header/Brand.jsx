import { Box, Typography } from "@mui/material";

function Brand() {
  return (
    <Box display="flex" py="0.5rem" alignItems="center">
      <Box width="70px">
        <Box component="img" src="/static/bicycle.png" width="100%" />
      </Box>
      <Typography variant="h5" color="var(--white)" ml="0.5rem">
        Blissful Pedals
      </Typography>
    </Box>
  );
}
export default Brand;
