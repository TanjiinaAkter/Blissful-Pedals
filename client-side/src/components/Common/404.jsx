import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import Container from "./Container";

const FourZeroFour = () => {
  const history = useHistory();

  return (
    <Container>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py="7rem"
      >
        <Typography variant="h1" color="text.secondary">
          Sorry!
        </Typography>
        <Typography variant="h3" color="var(--primary)" pb="1rem">
          404 Page Not Found!
        </Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => history.push("/")}
        >
          Back To Home
        </Button>
      </Box>
    </Container>
  );
};
export default FourZeroFour;
