import { Login as LoginIcon } from "@mui/icons-material";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Container from "../components/Common/Container";
import appContext from "../context/context";
import useAuth from "../hooks/useAuth";

const AdminLogin = () => {
  const { user } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const location = useLocation();

  const { adminLoginHandleSubmit } = useContext(appContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await adminLoginHandleSubmit(
      emailRef.current.value,
      passwordRef.current.value,
      history,
      location
    );
  };
  useEffect(() => {
    if (user.email) {
      return history.push(location?.state?.from?.pathname || "/");
    }
    if (localStorage.getItem("admin-auth-token")) {
      history.push("/admin/profile");
    }
  }, [user]);
  return (
    <Container>
      <Box
        maxWidth="700px"
        m="auto"
        py="4rem"
        display="flex"
        flexDirection="row"
      >
        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={3}
          style={{ width: "100%" }}
        >
          <Box pt="1rem" px="1rem">
            <Typography variant="h4" color="var(--primary)">
              Admin Login
            </Typography>
          </Box>
          <Box p="1rem">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="dense"
              inputRef={emailRef}
            />

            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="dense"
              inputRef={passwordRef}
            />

            <Box width="100%" pt="1rem" color="var(--secondary)">
              <Button
                variant="outlined"
                startIcon={<LoginIcon />}
                color="inherit"
                fullWidth
                type="submit"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
export default AdminLogin;
