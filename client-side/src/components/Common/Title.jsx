import { Typography } from "@mui/material";

function Title({ title }) {
  return (
    <Typography variant="h3" textAlign="center" color="var(--secondary)">
      {title}
    </Typography>
  );
}
export default Title;
