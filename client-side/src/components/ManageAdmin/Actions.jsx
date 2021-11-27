import { Cancel as CancelIcon } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import appContext from "../../context/context";
import ConfirmAlert from "../Common/ConfirmAlert";

const Actions = ({ admin }) => {
  const [open, setOpen] = useState(false);

  const { deleteAdminHandleSubmit } = useContext(appContext);
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleSubmit = () => {
    deleteAdminHandleSubmit(admin._id);
  };

  return (
    <Box>
      <ConfirmAlert
        open={open}
        msg="admin"
        handleClose={handleToggle}
        handleSubmit={handleSubmit}
      />

      <IconButton color="error" onClick={handleToggle}>
        <CancelIcon />
      </IconButton>
    </Box>
  );
};
export default Actions;
