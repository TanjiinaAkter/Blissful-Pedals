import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Order from "../components/Order/Order";
import appContext from "../context/context";
function OrderPage() {
  const { fetchSingleBicycleById } = useContext(appContext);
  const location = useLocation();
  useEffect(() => {
    fetchSingleBicycleById(location?.pathname?.slice(7));
  }, []);
  return (
    <main>
      <Box py="2rem">
        <Order />
      </Box>
    </main>
  );
}
export default OrderPage;
