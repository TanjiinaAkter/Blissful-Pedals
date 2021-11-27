import {
  Avatar,
  Box,
  Button,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext, useRef, useState } from "react";
import appContext from "../../context/context";
import useAuth from "../../hooks/useAuth";

const ReviewBox = ({ bicycle }) => {
  const { user } = useAuth();
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { addReviewHandleSubmit } = useContext(appContext);
  const [ratings, setRatings] = useState(0);
  const descriptionRef = useRef(null);

  const handleChange = (e) => {
    setRatings(Number(e.target.value));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addReviewHandleSubmit({
      img: user?.photoURL,
      name: user?.displayName,
      description: descriptionRef.current.value,
      ratings,
      bicycle,
      uid: user?.uid,
    });
    descriptionRef.current.value = "";
    setRatings(0);
  };

  return (
    <Box display={isSM ? "block" : "flex"}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px="1rem"
        width="200px"
      >
        <Avatar sx={{ width: "50px", height: "50px" }} src={user?.photoURL} />
        <Typography py="0.25rem">{user?.displayName || "N/A"}</Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} width="100%">
        <TextField
          variant="outlined"
          multiline
          rows={6}
          fullWidth
          inputRef={descriptionRef}
          disabled={!user?.email}
        />
        <Box
          py="1rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="outlined"
            disabled={!user?.email}
            type="submit"
            fullWidth
            color="secondary"
          >
            Send Us
          </Button>
          <Rating
            size="large"
            disabled={!user?.email}
            value={ratings}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewBox;
