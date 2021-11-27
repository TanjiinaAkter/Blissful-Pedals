import {
  Avatar,
  Box,
  Divider,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Review = ({ review }) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box display={isSM ? "block" : "flex"} py="1rem">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar sx={{ width: "70px", height: "70px" }} src={review?.img} />
          <Typography>{review?.name || ""}</Typography>
          <Rating value={review?.ratings || 0} />
        </Box>
        <Box
          pl={isSM ? "0rem" : "3rem"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign={isSM ? "center" : "left"}
        >
          <Typography variant="body1" color="text.secondary">
            {review?.description || "N/A"}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default Review;
