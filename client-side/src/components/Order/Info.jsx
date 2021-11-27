import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import useAuth from "../../hooks/useAuth";
export default function BasicTextFields({
  fullNameRef,
  addressRef,
  phoneRef,
  emailRef,
}) {
  const { user } = useAuth();
  return (
    <Box component="form">
      <TextField
        margin="dense"
        id="name"
        label="Full Name"
        variant="outlined"
        fullWidth
        inputRef={fullNameRef}
        value={user?.displayName || ""}
        disabled
      />
      <TextField
        margin="dense"
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        inputRef={emailRef}
        value={user?.email || ""}
        disabled
      />
      <TextField
        margin="dense"
        id="phone"
        label="Phone"
        variant="outlined"
        fullWidth
        inputRef={phoneRef}
      />
      <TextField
        margin="dense"
        id="address"
        label="Address"
        variant="outlined"
        fullWidth
        multiline
        rows={2}
        inputRef={addressRef}
      />
    </Box>
  );
}
