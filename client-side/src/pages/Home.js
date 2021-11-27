import { Box, Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Bicycles from "../components/Bicycles/Bicycles";
import Title from "../components/Common/Title";
import CustomerSay from "../components/CustomerSay/CustomerSay";
import Fqas from "../components/FQAS/FQAS";
import Reviews from "../components/Reviews/Reviews";
import Slider from "../components/Slider/Slider";
import StaticInfo from "../components/StaticInfo/StaticInfo";
import WhyOurBicycle from "../components/WhyOurBicycle/WhyOurBicycle";
import appContext from "../context/context";
function Home() {
  const { fetchBicyclesData } = useContext(appContext);
  const history = useHistory();
  useEffect(() => {
    fetchBicyclesData();
  }, []);
  return (
    <main>
      <Slider />
      <Box py="4rem">
        <Title title="Why to Rent Our Bicycle?" />
        <WhyOurBicycle />
      </Box>
      <Box py="2rem">
        <Bicycles isNone limit={6} />
        <Box color="var(--secondary)" m="auto" maxWidth="400px" py="2rem">
          <Button
            onClick={() => history.push("/bicycles")}
            variant="outlined"
            color="inherit"
            size="large"
            fullWidth
          >
            See More Bicycles
          </Button>
        </Box>
      </Box>

      <Box py="2rem">
        <CustomerSay />
      </Box>
      <Box py="2rem">
        <StaticInfo />
      </Box>

      <Reviews />

      <Box py="2rem">
        <Fqas />
      </Box>
    </main>
  );
}
export default Home;
