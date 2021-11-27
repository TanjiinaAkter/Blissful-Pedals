import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import BicycleDetail from "../components/Bicycles/Detail";
import appContext from "../context/context";

function BicycleDetailPage() {
  const { fetchSingleBicycleById } = useContext(appContext);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    fetchSingleBicycleById(id, history);
  }, []);

  return (
    <main>
      <Box py="2rem">
        <BicycleDetail />
      </Box>
    </main>
  );
}
export default BicycleDetailPage;
