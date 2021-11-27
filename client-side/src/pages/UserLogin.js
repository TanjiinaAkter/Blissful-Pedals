import { Google as GoogleIcon, Login as LoginIcon } from "@mui/icons-material";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Container from "../components/Common/Container";
import appContext from "../context/context";
import useAuth from "../hooks/useAuth";

const UserLogin = () => {
  const { signInUsingGoogle, user, loginUsingEmailAndPassword } = useAuth();
  const { setAlertMessage } = useContext(appContext);

  const history = useHistory();
  const location = useLocation();
  const emailRef = useRef();
  const passwordRef = useRef();

  const getValue = (x) => x.current.value;

  useEffect(() => {
    if (user.email) {
      history.push(location?.state?.from?.pathname || "/user/profile");
    } else {
      if (localStorage.getItem("admin-auth-token")) {
        history.push(location?.state?.from?.pathname || "/");
      }
    }
  }, [user, history]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = getValue(emailRef);
    const password = getValue(passwordRef);
    if (!email || !password) {
      return setAlertMessage("info", "Please provide email and password");
    }
    loginUsingEmailAndPassword(email, password, history, location);
  };
  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        maxWidth="700px"
        m="auto"
        p="1rem"
        my="4rem"
        boxShadow={2}
      >
        <Typography variant="h4" color="var(--primary)">
          Login
        </Typography>

        <Box p="1rem">
          <TextField
            id="user-email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="dense"
            inputRef={emailRef}
          />

          <TextField
            id="user-password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="dense"
            type="password"
            inputRef={passwordRef}
          />

          <Box pt="1rem" maxWidth="300px" color="var(--secondary)">
            <Box display="flex" pb="0.25rem">
              <Typography variant="subtitle2" color="var(--primary)">
                Dont't have an account?
                <Link
                  to="/user/signup"
                  style={{
                    color: "var(--secondary)",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  SignUp
                </Link>
              </Typography>
            </Box>
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
        <Box pt="1rem" pb="2rem">
          <Divider />
        </Box>
        <Button
          startIcon={<GoogleIcon />}
          variant="outlined"
          color="inherit"
          fullWidth
          onClick={() => signInUsingGoogle(history, location)}
        >
          Login with Google
        </Button>
      </Box>
    </Container>
  );
};

export default UserLogin;
