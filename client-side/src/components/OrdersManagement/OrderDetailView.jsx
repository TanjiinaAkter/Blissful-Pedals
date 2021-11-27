import {
  Cancel as CancelIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import appContext from "../../context/context";
import ListItem from "../Common/ListItem";

export default function OrderDetailView({ open, handleToggle, order }) {
  const history = useHistory();
  const { getStatusColor } = useContext(appContext);
  return (
    <Dialog open={open} onClose={handleToggle}>
      <DialogTitle>Order Detail</DialogTitle>
      <Divider />
      <DialogContent>
        <Box
          component="img"
          width="100%"
          height="350px"
          src={order?.bicycle?.img}
        />

        <Typography variant="h4" py="0.5rem">
          {order?.bicycle?.name || "N/A"}
        </Typography>
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
            {order?.bicycle?._id || "N/A"}
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
            {order?.bicycle?.price || "N/A"}
            {"$"}
          </Typography>
        </Typography>
        <Typography variant="h5">Your Info</Typography>
        <ListItem name="Name" desc={order?.fullname || "N/A"} />
        <ListItem name="Email" desc={order?.email || "N/A"} />
        <ListItem name="Phone" desc={order?.phone || "N/A"} />
        <ListItem name="Address" desc={order?.address || "N/A"} isNoneDivider />
        <Typography variant="h5">Order Info</Typography>
        <ListItem
          name="Status"
          desc={
            <Typography color={getStatusColor(order?.status)}>
              {order?.status || "N/A"}
            </Typography>
          }
        />
        <ListItem name="Quantity" desc={order?.quantity || "N/A"} />
        <ListItem
          name="Total Price"
          desc={order?.quantity * order?.bicycle?.price +"$"|| "N/A"}
          isNoneDivider
        />
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button
          startIcon={<VisibilityIcon />}
          color="primary"
          onClick={() => history.push(`/bicycles/${order?.bicycle?._id}`)}
        >
          View This Product On Website
        </Button>
        <Button
          startIcon={<CancelIcon />}
          variant="outlined"
          color="error"
          onClick={handleToggle}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
