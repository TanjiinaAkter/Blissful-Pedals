import {
  Avatar,
  Box,
  CardActionArea,
  Divider,
  Grid,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useHistory } from "react-router-dom";
const Image = ({ img }) => {
  return (
    <Box maxWidth="100px">
      <Box component="img" src={img} width="100%" />
    </Box>
  );
};

const Review = ({ review, borderNone }) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const history = useHistory();
  return (
    <CardActionArea
      onClick={() => history.push(`/bicycles/${review?.bicycle?._id}`)}
    >
      <Box py="0.5rem">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9} md={10}>
            <Box height="100%" display="flex" alignItems="center">
              <Image img={review?.bicycle?.img} />

              <Box px="1rem">
                <Typography variant="h6">
                  {review?.bicycle?.name || ""}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {review?.description || "N/A"}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Box
              display="flex"
              flexDirection={isSM ? "row" : "column"}
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Box
                display="flex"
                flexDirection={isSM ? "row" : "column"}
                alignItems="center"
              >
                <Avatar src={review?.img} />
                <Typography px="0.5rem" variant="h6">
                  {review?.name || ""}
                </Typography>
              </Box>
              <Rating value={review?.ratings || 0} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {!borderNone && <Divider />}
    </CardActionArea>
  );
};

export default Review;
