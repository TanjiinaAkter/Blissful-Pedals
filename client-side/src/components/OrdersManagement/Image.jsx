import { Box } from "@mui/material";

const Image = ({ img }) => {
  return (
    <Box maxWidth="100px">
      <Box component="img" src={img} width="100%" />
    </Box>
  );
};
export default Image;
