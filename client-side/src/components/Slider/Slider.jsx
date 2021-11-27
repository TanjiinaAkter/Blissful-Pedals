import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import Container from "../Common/Container";
import Button from "./Button";
import styles from "./style.module.css";
const Slide = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const { user } = useAuth();
  return (
    <Box className={styles.slider}>
      <img
        src="/static/bicycle-banner.jpg"
        alt="website slideimage"
        className={styles.img}
      />
      <Box className={styles.textContent}>
        <Container>
          <Box
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box>
              <Box py={isMD ? "0.25rem" : "1rem"}>
                <Typography color="var(--white)" variant={isMD ? "h4" : "h2"}>
                  Welcome to
                </Typography>
                <Typography color="var(--white)" variant={isMD ? "h4" : "h1"}>
                  Blissful Pedals
                </Typography>
              </Box>

              <Typography
                color="var(--white)"
                variant={isMD ? "subtitle2" : "subtitle1"}
                pb={isMD ? "1rem" : "2rem"}
                maxWidth="600px"
              >
                We have provided awesome bicycles for you, click on the "Find A
                Bicycles" button to get your desired cycle.
              </Typography>

              <Box
                display="flex"
                flexDirection={isMD ? "column" : "row"}
                justifyContent="center"
                alignItems="center"
              >
                <Button isSecondary path="/bicycles">
                  Find A Bicycles
                </Button>
                <Box width="0.5rem" height="0.5rem" />
                {!user?.email && (
                  <Button path="/user/signup">Signup Now</Button>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
export default Slide;
