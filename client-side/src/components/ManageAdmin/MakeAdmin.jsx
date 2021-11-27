import { Add as AddIcon } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import AddModal from "./MakeAdminModal";
const MakeAdmin = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Box p="0.5rem" width="100%" display="flex" justifyContent="flex-end">
      <Box color="var(--primary)" maxWidth="400px" width="100%">
        <Button
          startIcon={<AddIcon />}
          variant="outlined"
          color="inherit"
          size="large"
          fullWidth
          onClick={handleToggle}
        >
          Create Admin
        </Button>
      </Box>
      <AddModal open={open} handleToggle={handleToggle} />
    </Box>
  );
};

export default MakeAdmin;
