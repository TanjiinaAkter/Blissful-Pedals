import CheckIcon from "@mui/icons-material/Check";
import { Box, Button, Typography } from "@mui/material";
import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import appContext from "../../context/context";
import Container from "../Common/Container";
import ListItem from "../Common/ListItem";
import Bicycle from "./Bicycle";
import Info from "./Info";
const Order = () => {
  const {
    state: { orderBicycleQuantity, singleBicycle },
    handleSubmitOrderBicycle,
  } = useContext(appContext);
  const fullNameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const getValue = (x) => x.current.value;
  const clearValue = (x) => (x.current.value = "");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitOrderBicycle(
      {
        fullname: getValue(fullNameRef),
        address: getValue(addressRef),
        phone: getValue(phoneRef),
        email: getValue(emailRef),
        bicycle: singleBicycle._id,
        quantity: orderBicycleQuantity,
      },
      history
    );

    clearValue(addressRef);
    clearValue(phoneRef);
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit}>
        <Bicycle />
        <Typography variant="h5" color="var(--primary)" py="0.5rem">
          Your Detail
        </Typography>

        <Info
          fullNameRef={fullNameRef}
          addressRef={addressRef}
          phoneRef={phoneRef}
          emailRef={emailRef}
        />
        <Typography variant="h5" color="var(--primary)" py="0.5rem">
          Order Detail
        </Typography>

        <ListItem name="Quantity" desc={orderBicycleQuantity} />
        <ListItem
          name="Total Price"
          desc={singleBicycle?.price * orderBicycleQuantity + "$"}
        />
        <Box color="var(--secondary)">
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            mx="0.5rem"
            color="inherit"
            startIcon={<CheckIcon />}
          >
            Confirm Order To Pay
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default Order;
