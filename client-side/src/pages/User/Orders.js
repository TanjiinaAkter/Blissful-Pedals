import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import Container from "../../components/Common/Container";
import Orders from "../../components/User/Orders/Orders";
import appContext from "../../context/context";
import useAuth from "../../hooks/useAuth";
function UserOrdersPage() {
  const { fetchUserOrdersByEmail } = useContext(appContext);
  const { user } = useAuth();

  useEffect(() => {
    if (user.email) {
      fetchUserOrdersByEmail(user.email);
    }
  }, [user]);
  return (
    <Box py="3rem">
      <Container>
        <Typography variant="h4" align="center" pb="1rem">
          My Orders
        </Typography>
        <Orders />
      </Container>
    </Box>
  );
}
export default UserOrdersPage;
