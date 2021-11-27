import { Home as HomeIcon } from "@mui/icons-material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LogoutIcon from "@mui/icons-material/Logout";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from "../../components/Common/Container";
import Item from "../../components/Profile/Item";
import Profile from "../../components/Profile/Profile";
import appContext from "../../context/context";
const iconStyle = { color: "inherit", fontSize: "inherit" };
function UserProfilePage() {
  const history = useHistory();
  const {
    adminLogout
  } = useContext(appContext);
  return (
    <Box py="4rem">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Profile />
          </Grid>
          <Grid item md={8}>
            <Typography variant="h3" pb="1rem" color="text.secondary">
              Welcome Back!
            </Typography>
            <Divider />
            <br />
            <br />
            <Grid container spacing={2}>
              <Item
                name="Home"
                icon={<HomeIcon style={iconStyle} />}
                path="/"
              />
              <Item
                name="Manage Bicycle"
                icon={<DirectionsBikeIcon style={iconStyle} />}
                path="/bicycles"
              />

              <Item
                name="Manage Orders"
                icon={<FormatListBulletedIcon style={iconStyle} />}
                path="/all/orders"
              />
              <Item
                name="Manage Admin"
                icon={<AdminPanelSettingsIcon style={iconStyle} />}
                path="/admin/manage"
              />
              <Item
                name="All Reviews"
                icon={<ReviewsIcon style={iconStyle} />}
                path="/reviews"
              />
              <Item
                name="Logout"
                handleClick={() => adminLogout(history)}
                icon={<LogoutIcon style={iconStyle} />}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default UserProfilePage;
