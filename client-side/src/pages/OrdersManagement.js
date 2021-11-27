import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import Container from "../components/Common/Container";
import OrdersManagement from "../components/OrdersManagement/OrdersManagement";
import appContext from "../context/context";

const OrderManagementPage = () => {
  const { fetchAllOrders } = useContext(appContext);
  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <Box py="5rem">
      <Container>
        <Typography variant="h4" align="center" pb="1rem">
          All Orders
        </Typography>
        <OrdersManagement />
      </Container>
    </Box>
  );
};

export default OrderManagementPage;
