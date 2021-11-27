import { Box, Typography } from "@mui/material";

const FooterBottom = () => {
  return (
    <Box
      py="0.5rem"
      display="flex"
      justifyContent="center"
      borderTop="1px solid var(--neutral)"
      alignItems="center"
      textAlign="center"
    >
      <Typography color="var(--white)" variant="h6">
        Developed By Tanjina Akter
      </Typography>
    </Box>
  );
};
export default FooterBottom;
