import { Box, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from "react";
import appContext from "../../context/context";

export default function Loader() {
  const {
    state: { isLoading },
  } = useContext(appContext);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <Box textAlign="center">
          <CircularProgress color="inherit" />
          <Typography variant="h4" pt="2rem">
            Loading...
          </Typography>
          <Typography variant="h5" pt="1rem">
            It will take several times to complete the process
          </Typography>
        </Box>
      </Backdrop>
    </div>
  );
}
