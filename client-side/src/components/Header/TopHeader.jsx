import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Container from "../Common/Container";
import User from "./User";

function TopHeader() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Container>
        <Box
          display={isMD ? "flex" : "block"}
          alignItems="center"
          justifyContent="space-between"
        >
          {isMD && (
            <Box display="flex" flexWrap="wrap">
              <Typography variant="subtitle1" color="var(--black)" pr="1rem">
                Call :
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="text.secondary"
                  pr="1rem"
                >
                  {" "}
                  (24/7h) +3253468940
                </Typography>
              </Typography>

              <Typography variant="subtitle1" color="var(--black)">
                Email :{" "}
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="text.secondary"
                >
                  support@blissfulpedals.com
                </Typography>
              </Typography>
            </Box>
          )}

          <User />
        </Box>
      </Container>
      <Divider />
    </>
  );
}
export default TopHeader;
