import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
export default function ImageAvatars({ name, src }) {
  return (
    <Box display="flex" justifyContent="center" pt="0.25rem" pb="0.75rem">
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ width: 120, height: 120 }} alt={name} src={src} />
      </Stack>
    </Box>
  );
}
