import { Menu as MenuIcon } from "@mui/icons-material";
import {
  Box,
  Divider,
  Grow,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Container from "../Common/Container";
import Brand from "./Brand";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";
function Header() {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <TopHeader />

      <Box
        bgcolor="var(--primary)"
        position="sticky"
        top="0"
        width="100%"
        zIndex="999"
      >
        <Container>
          <Box
            display={isSM ? "block" : "flex"}
            justifyContent="space-between"
            color="var(--white)"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Brand />
              {isSM && (
                <IconButton color="inherit" onClick={handleToggle}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
            <Divider />
            <Grow
              direction="down"
              in={isSM ? open : true}
              mountOnEnter
              unmountOnExit
            >
              <Box>
                <Navbar />
              </Box>
            </Grow>
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default Header;
