import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import appContext from "../../context/context";
import Container from "../Common/Container";

const Bicycle = () => {
  const {
    state: { orderBicycleQuantity, singleBicycle },
    handleChangeOrderQuantity,
    setAlertMessage,
  } = useContext(appContext);

  const increaseQty = () => {
    handleChangeOrderQuantity(orderBicycleQuantity + 1);
  };
  const decreaseQty = () => {
    if (orderBicycleQuantity === 1) {
      setAlertMessage("info", "At least one quantity of food for an order");
      return;
    }
    handleChangeOrderQuantity(orderBicycleQuantity - 1);
  };
  const getDesc = () => {
    if (singleBicycle?.description) {
      if (singleBicycle.description.length > 3) {
        return singleBicycle.description.slice(0, 100) + "...";
      } else {
        return singleBicycle.description;
      }
    }
  };
  return (
    <Container>
      <Box>
        <Grid container spacing={3}>
          <Grid item md={5}>
            <Box
              component="img"
              width="100%"
              height="auto"
              src={singleBicycle?.img}
            />
          </Grid>
          <Grid item md={7}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Box py="0.5rem">
                <Typography variant="subtitle1" color="text.secondary">
                  Model : {singleBicycle?.model || "N/A"}
                </Typography>
                <Typography variant="h4">
                  {singleBicycle?.name || "N/A"}
                </Typography>
              </Box>
              <Divider />

              <Typography variant="subtitle2" color="text.secondary">
                Product Code :
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="var(--primary)"
                  py="0.5rem"
                >
                  {" "}
                  {singleBicycle?._id || "N/A"}
                </Typography>
              </Typography>

              <Typography variant="h6" color="var(--primary)" py="0.5rem">
                Price :
                <Typography
                  component="span"
                  variant="h5"
                  color="var(--secondary)"
                  py="0.5rem"
                  align="right"
                >
                  {" "}
                  {singleBicycle?.price || "N/A"}
                  {"$"}
                </Typography>
              </Typography>

              <Typography variant="subtitle1" color="text.secondary">
                {getDesc()}
              </Typography>
              <Box
                border="1px solid var(--secondary)"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                color="var(--secondary)"
                my="1rem"
              >
                <IconButton color="inherit" onClick={increaseQty}>
                  <AddIcon />
                </IconButton>
                <Typography
                  component="span"
                  variant="h5"
                  color="var(--primary)"
                  py="0.5rem"
                  align="right"
                >
                  {orderBicycleQuantity}
                </Typography>
                <IconButton color="inherit" onClick={decreaseQty}>
                  <RemoveIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Bicycle;
