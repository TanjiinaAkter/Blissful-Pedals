import { Add as AddIcon, Cancel as CancelIcon } from "@mui/icons-material";
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

export default function AddModal({ open, handleToggle }) {
  const nameRef = useRef();
  const modelRef = useRef();
  const price = useRef();
  const statusRef = useRef();
  const imgRef = useRef();
  const featuresRef = useRef();
  const descriptionRef = useRef();
  const { addBicycleHandleSubmit } = useContext(appContext);

  const getValue = (x) => x.current.value;
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    handleToggle();

    await addBicycleHandleSubmit({
      name: getValue(nameRef),
      price: getValue(price),
      model: getValue(modelRef),
      stockStatus: getValue(statusRef),
      features: getValue(featuresRef),
      description: getValue(descriptionRef),
      img: getValue(imgRef),
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
          label="Bicycle Name"
          fullWidth
          variant="outlined"
          inputRef={nameRef}
        />
        <TextField
          margin="dense"
          id="model"
          label="Model"
          fullWidth
          variant="outlined"
          inputRef={modelRef}
        />
        <TextField
          margin="dense"
          id="price"
          label="Bicycle Price"
          fullWidth
          variant="outlined"
          inputRef={price}
        />
        <TextField
          margin="dense"
          id="status"
          label="Stock Status"
          fullWidth
          variant="outlined"
          inputRef={statusRef}
        />

        <TextField
          margin="dense"
          id="img"
          label="Bicycle Image URL"
          fullWidth
          variant="outlined"
          inputRef={imgRef}
        />
        <TextField
          margin="dense"
          id="features"
          label="Features"
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          inputRef={featuresRef}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          inputRef={descriptionRef}
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
          startIcon={<AddIcon />}
          color="secondary"
          variant="contained"
          type="submit"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
