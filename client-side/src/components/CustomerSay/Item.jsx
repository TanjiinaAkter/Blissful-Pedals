import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import SingleRatings from "../Common/SingleRatings";

function ImageAvatars({ name, src }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt={name} src={src} sx={{ width: 80, height: 80 }} />
    </Stack>
  );
}

const Item = ({ name, title, description, img, ratings }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <ImageAvatars src={img} name={name} />

      <Typography variant="h5" py="0.5rem" color="var(--secondary)">
        {title}
      </Typography>
      <Typography color="var(--white)">{description}</Typography>

      <SingleRatings ratings={ratings} />

      <Typography py="0.15rem" variant="h6" color="var(--neutral)">
        {name}
      </Typography>
    </Box>
  );
};
export default Item;
