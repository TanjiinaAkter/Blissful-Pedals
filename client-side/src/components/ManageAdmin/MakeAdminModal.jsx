import { Cancel as CancelIcon, Check as CheckIcon } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
} from "@mui/material";
import { useContext, useRef } from "react";
import appContext from "../../context/context";

export default function MakeAdminModal({ open, handleToggle }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { signupAdminHandleSubmit } = useContext(appContext);

  const getValue = (x) => x.current.value;
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    handleToggle();

    await signupAdminHandleSubmit({
      name: getValue(nameRef),
      email: getValue(emailRef),
      password: getValue(passwordRef),
      confirmPassword: getValue(confirmPasswordRef),
    });
  };
  return (
    <Dialog
      component="form"
      onSubmit={handleSubmitForm}
      open={open}
      onClose={handleToggle}
    >
      <DialogTitle> Add Bicycle</DialogTitle>
      <Divider />
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          variant="outlined"
          inputRef={nameRef}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          fullWidth
          variant="outlined"
          inputRef={emailRef}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          fullWidth
          variant="outlined"
          inputRef={passwordRef}
        />
        <TextField
          margin="dense"
          id="confirmPassword"
          label="Confirm Password"
          fullWidth
          variant="outlined"
          inputRef={confirmPasswordRef}
        />
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button
          startIcon={<CancelIcon />}
          variant="outlined"
          color="error"
          onClick={handleToggle}
        >
          Cancel
        </Button>
        <Button
          startIcon={<CheckIcon />}
          color="success"
          variant="contained"
          type="submit"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
