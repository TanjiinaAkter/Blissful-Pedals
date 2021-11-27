import { Box, Divider, Typography } from "@mui/material";

const ListItem = ({ name, desc, isNoneDivider }) => (
  <>
    <Box py="0.5rem" display="flex" justifyContent="space-between">
      <Typography variant="subtitle1" color="text.secondary">
        {name}
      </Typography>
      <Typography variant="subtitle1" color="var(--primary)">
        {desc}
      </Typography>
    </Box>
    {!isNoneDivider && <Divider />}
  </>
);

export default ListItem;
