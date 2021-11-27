import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import * as React from "react";

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

function HoverRating({ rate, rated }) {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      py="0.25rem"
    >
      <Rating
        name="hover-feedback"
        value={rate}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />

      <Box sx={{ ml: 2 }}>
        {labels[rate]}({rated})
      </Box>
    </Box>
  );
}

export default function Ratings({ ratings }) {
  const rateNames = ["one", "two", "three", "four", "five"];
  return (
    <Box>
      {ratings &&
        rateNames.map((name, i) => (
          <HoverRating rate={i + 1} key={name} rated={ratings[name]} />
        ))}
    </Box>
  );
}
