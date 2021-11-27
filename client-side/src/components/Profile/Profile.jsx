import { Box, Button, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import appContext from "../../context/context";
import useAuth from "../../hooks/useAuth";
import Container from "../Common/Container";
import ListItem from "../Common/ListItem";
import Title from "../Common/Title";
import Avatar from "./Avater";
function Profile() {
  const { user, logout } = useAuth();
  const {
    state: {
      admin: { isLoggedIn, name, email },
    },
    adminLogout,
  } = useContext(appContext);
  const history = useHistory();
  const handleLogout = () => {
    if (isLoggedIn) {
      adminLogout(history);
    } else {
      logout(history);
    }
  };
  return (
    <Container>
      <Title fTitle={isLoggedIn ? "Admin" : "User"} lTitle="Profile" />
      <Box pt="1rem" boxShadow={2} borderRadius="0.5rem">
        <Box textAlign="center">
          <Avatar
            name={isLoggedIn ? name : user.displayName}
            src={isLoggedIn ? "" : user.photoURL}
          />
          <Typography variant="h5">
            {isLoggedIn ? name : user.displayName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {isLoggedIn ? "Admin" : "User"}
          </Typography>
        </Box>
        <Divider />
        <Box p="1rem">
          <ListItem
            name="Display Name"
            desc={isLoggedIn ? name : user.displayName}
          />
          <ListItem name="Email" desc={isLoggedIn ? email : user.email} />
          <ListItem
            name="Profile Status"
            desc={
              isLoggedIn
                ? "Verified"
                : user.emailVerified
                ? "Verified"
                : "Unverified"
            }
          />
          <ListItem
            name="Phone No"
            desc={isLoggedIn ? "N/A" : user.phoneNumber || "N/A"}
          />
          <Box height="1rem" />

          <Button
            onClick={handleLogout}
            variant="outlined"
            color="error"
            fullWidth
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default Profile;
