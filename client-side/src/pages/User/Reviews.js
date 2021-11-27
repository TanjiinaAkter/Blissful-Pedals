import { Box } from "@mui/material";
import Container from "../../components/Common/Container";
import Reviews from "../../components/Reviews/Reviews";
import useAuth from "../../hooks/useAuth";

function ReviewsPage() {
  const { user } = useAuth();

  return (
    <Box py="3rem">
      <Container>
        <Reviews title="My Reviews" id={user?.uid} />
      </Container>
    </Box>
  );
}
export default ReviewsPage;
