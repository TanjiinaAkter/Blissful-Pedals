import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton({ status, id, handleSubmit }) {
  const handleChange = (event, newAlignment) => {
    handleSubmit(id, newAlignment);
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={status}
        exclusive
        size="small"
        onChange={handleChange}
      >
        <ToggleButton value="rejected" color="error">
          Rejected
        </ToggleButton>
        <ToggleButton value="pending" color="primary">
          Pending
        </ToggleButton>
        <ToggleButton value="delivered" color="success">
          delivered
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
