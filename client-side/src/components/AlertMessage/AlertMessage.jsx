import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import { forwardRef, useContext } from "react";
import appContext from "../../context/context";

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export default function AlertMessage() {
  const {
    state: {
      messageInfo: { isOpen, message, status },
    },
    closeAlertMessage,
  } = useContext(appContext);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={closeAlertMessage}
      >
        <Alert
          onClose={closeAlertMessage}
          severity={status || "success"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
