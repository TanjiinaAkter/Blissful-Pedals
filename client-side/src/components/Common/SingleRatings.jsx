import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import * as React from "react";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function SingleRatings({ ratings, withoutTitle }) {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      py="0.25rem"
    >
      <Rating
        name="hover-feedback"
        value={ratings}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {!withoutTitle && <Box sx={{ ml: 2 }}>{labels[ratings]}</Box>}
    </Box>
  );
}
