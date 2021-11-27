import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import Bicycles from "../components/Bicycles/Bicycles";
import Title from "../components/Common/Title";
import appContext from "../context/context";

function BicyclesPage() {
  const { fetchBicyclesData } = useContext(appContext);
  useEffect(() => {
    fetchBicyclesData();
  }, []);
  return (
    <main>
      <Box py="2rem">
        <Title
          fTitle="Foods"
          lTitle="Menu"
          subTitle="Choose your desire foods"
        />
        <Bicycles />
      </Box>
    </main>
  );
}
export default BicyclesPage;
