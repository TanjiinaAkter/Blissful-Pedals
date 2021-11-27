import { Box, useMediaQuery, useTheme } from "@mui/material";

const Container = ({ children }) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      height="100%"
      maxWidth={isSM ? "100%" : "1300px"}
      margin="auto"
      px={isSM ? "1rem" : "2rem"}
    >
      {children}
    </Box>
  );
};
export default Container;
