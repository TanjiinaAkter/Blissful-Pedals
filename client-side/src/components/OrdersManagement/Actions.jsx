import {
  Cancel as CancelIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import appContext from "../../context/context";
import ConfirmAlert from "../Common/ConfirmAlert";
import OrderDetailView from "./OrderDetailView";

const Actions = ({ order }) => {
  const [open, setOpen] = useState(false);
  const [isViewOpen, setViewOpen] = useState(false);
  const history = useHistory();
  const {
    state: {
      admin: { isLoggedIn },
    },
    handleClickDeletOrder,
  } = useContext(appContext);
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleSubmit = () => {
    handleClickDeletOrder(order._id);
    setViewOpen(false);
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
      {!isLoggedIn && (
        <Button
          startIcon={<VisibilityIcon />}
          color="secondary"
          onClick={() => history.push(`/bicycles/${order?.bicycle?._id}`)}
        >
          View
        </Button>
      )}

      {isLoggedIn && (
        <>
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
        </>
      )}
    </Box>
  );
};
export default Actions;
