import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button } from "@mui/material";

const AuthButton = ({ isLoggedIn, handleClick, isAdmin }) => {
  const btnName = isAdmin ? "Admin Login" : "User Login";
  return (
    <Box color="text.secondary">
      <Button
        onClick={handleClick}
        size="large"
        startIcon={isLoggedIn ? <LoginIcon /> : <LogoutIcon />}
        color="inherit"
      >
        {isLoggedIn ? "Logout" : btnName}
      </Button>
    </Box>
  );
};

export default AuthButton;
