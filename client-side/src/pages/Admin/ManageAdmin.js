import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import Container from "../../components/Common/Container";
import ManageAdmin from "../../components/ManageAdmin/ManageAdmin";
import appContext from "../../context/context";

const ManageAdminPage = () => {
  const { fetchAllAdmin } = useContext(appContext);
  useEffect(() => {
    fetchAllAdmin();
  }, []);
  return (
    <Box py="5rem">
      <Container>
        <Typography variant="h4" align="center" pb="1rem">
          Manage Admin
        </Typography>
        <ManageAdmin />
      </Container>
    </Box>
  );
};

export default ManageAdminPage;
