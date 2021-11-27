import {
  Cancel as CancelIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import appContext from "../../../context/context";
import ConfirmAlert from "../../Common/ConfirmAlert";
import OrderDetailView from "./OrderDetailView";
const Actions = ({ order }) => {
  const [open, setOpen] = useState(false);
  const [isViewOpen, setViewOpen] = useState(false);
  const { handleClickDeletOrder } = useContext(appContext);
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleSubmit = () => {
    handleClickDeletOrder(order._id);
    setOpen(false);
  };
  const handleViewToggle = () => {
    setViewOpen(!isViewOpen);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100%"
      alignItems="center"
    >
      <OrderDetailView
        open={isViewOpen}
        handleToggle={handleViewToggle}
        order={order}
      />
      <ConfirmAlert
        open={open}
        msg="order"
        handleClose={handleToggle}
        handleSubmit={handleSubmit}
      />
      <IconButton color="secondary" onClick={handleViewToggle}>
        <VisibilityIcon />
      </IconButton>
      <IconButton color="error" onClick={handleToggle}>
        <CancelIcon />
      </IconButton>
    </Box>
  );
};
export default Actions;
