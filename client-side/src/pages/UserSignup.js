import { LockOpen as LockOpenIcon } from "@mui/icons-material";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Container from "../components/Common/Container";
import appContext from "../context/context";
import useAuth from "../hooks/useAuth";

const SignUpPage = () => {
  const history = useHistory();
  const { setAlertMessage } = useContext(appContext);
  const { signupUsingEmailAndPassword, user } = useAuth();
  const location = useLocation();
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

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  useEffect(() => {
    if (localStorage.getItem("user-auth-token")) {
      history.push("/user/profile");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!getValue(nameRef) || !getValue(emailRef) || !getValue(passwordRef)) {
      return setAlertMessage("error", "Please provide the all required fields");
    }
    if (getValue(passwordRef) !== getValue(confirmPasswordRef)) {
      return setAlertMessage("error", "Invalid confirm password");
    }
    signupUsingEmailAndPassword(
      getValue(nameRef),
      getValue(emailRef),
      getValue(passwordRef),
      history,
      location
    );
  };
  return (
    <Container>
      <Box py="4rem" maxWidth="700px" m="auto">
        <Box
          height="100%"
          flexDirection="row"
          display="flex"
          alignItems="center"
        >
          <Paper elevation={3} style={{ width: "100%" }}>
            <Box pt="1rem" px="1rem">
              <Typography variant="h4" color="var(--primary)">
                SignUp
              </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} p="1rem">
              <TextField
                id="user-name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="dense"
                inputRef={nameRef}
              />
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
                inputRef={passwordRef}
              />
              <TextField
                id="user-confirm-password"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                margin="dense"
                inputRef={confirmPasswordRef}
              />

              <Box pt="1rem" maxWidth="300px" color="var(--secondary)">
                <Box display="flex" pb="0.25rem">
                  <Typography variant="subtitle2" color="var(--primary)">
                    Already have an account?
                    <Link
                      to="/user/login"
                      style={{
                        color: "var(--secondary)",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      {" "}
                      Login
                    </Link>
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<LockOpenIcon />}
                  color="inherit"
                  fullWidth
                  type="submit"
                >
                  Signup
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUpPage;
