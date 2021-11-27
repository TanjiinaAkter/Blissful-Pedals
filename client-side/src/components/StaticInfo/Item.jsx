import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Item = ({ title, description, icon }) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid item xs={6} md={3}>
      <Box display="flex" width="100%" alignItems="center">
        <Box pr="0.5rem">{icon}</Box>
        <Box>
          <Typography variant={isSM ? "h5" : "h4"} color="var(--primary)">
            {title}
          </Typography>
          <Typography
            variant={isSM ? "subtitle1" : "h6"}
            color="text.secondary"
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
export default Item;
