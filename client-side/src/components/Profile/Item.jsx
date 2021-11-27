import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
function Item({ name, icon, path, handleClick }) {
  const history = useHistory();
  const handleClickChangeRoute = () => history.push(path);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        bgcolor="var(--primary)"
        boxShadow={2}
        borderRadius="0.5rem"
        overflow="hidden"
      >
        <CardActionArea onClick={handleClick || handleClickChangeRoute}>
          <Box p="1rem">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box color="var(--secondary)" fontSize="3rem">
                {icon}
              </Box>
              <Typography variant="h5" color="var(--white)">
                {name}
              </Typography>
            </Box>
          </Box>
        </CardActionArea>
      </Box>
    </Grid>
  );
}
export default Item;
