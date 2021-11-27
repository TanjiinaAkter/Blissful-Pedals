import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { useHistory } from "react-router";
import appContext from "../../context/context";
import Container from "../Common/Container";
import ListItem from "../Common/ListItem";
import Ratings from "../Common/Ratings";
import ReviewBox from "../Reviews/ReviewBox";
import Features from "./Features";

const BicycleDetail = () => {
  const {
    state: {
      singleBicycle,
      admin: { isLoggedIn },
    },
  } = useContext(appContext);
  const history = useHistory();
  const handleClickOrder = () => {
    history.push(`/order/${singleBicycle._id}`);
  };
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Box>
        <Typography variant="h4">{singleBicycle?.name || "N/A"}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Model: 2017
        </Typography>
        <Divider />
        <Box
          component="img"
          width="100%"
          height="auto"
          src={singleBicycle?.img || "N/A"}
        />
        <Typography variant="h6" color="var(--primary)">
          Features
        </Typography>
        <Features features={singleBicycle?.features} />
        <Typography variant="h6" color="var(--primary)">
          Description
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {singleBicycle?.description || "N/A"}
        </Typography>

        <ListItem name="Price" desc={singleBicycle?.price + "$" || "N/A"} />
        <ListItem name="Status" desc={singleBicycle?.stockStatus || "N/A"} />
        <ListItem name="Product Code" desc={singleBicycle?._id || "N/A"} />

        <Typography variant="h6" color="var(--primary)">
          Ratings
        </Typography>
        <Box
          pb="0.5rem"
          display="flex"
          justifyContent={isSM ? "flex-start" : "flex-end"}
        >
          <Ratings ratings={singleBicycle?.ratings} />
        </Box>

        <Box color="var(--secondary)">
          <Button
            onClick={handleClickOrder}
            variant="outlined"
            mx="0.5rem"
            color="inherit"
            startIcon={<ArrowForwardIcon />}
            disabled={isLoggedIn}
          >
            Order Now
          </Button>
        </Box>
      </Box>
      <Typography
        py="1rem"
        color="var(--secondary)"
        variant="h4"
        align="center"
      >
        Write a review about this cycle
      </Typography>
      <ReviewBox bicycle={singleBicycle?._id} />
    </Container>
  );
};
export default BicycleDetail;
