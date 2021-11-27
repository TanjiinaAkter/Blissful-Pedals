import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import appContext from "../../context/context";
import useAuth from "../../hooks/useAuth";

export default function BasicMenu({ handleClose, anchorEl, open }) {
  const {
    state: {
      admin: { isLoggedIn },
    },
    adminLogout,
  } = useContext(appContext);
  const history = useHistory();

  const { user, logout } = useAuth();

  const handleClickLogout = () => {
    if (user.email) {
      logout(history);
    }
    if (isLoggedIn) {
      adminLogout(history);
    }
  };
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem
        onClick={() =>
          history.push(isLoggedIn ? "/admin/profile" : "/user/profile")
        }
        divider
      >
        Profile
      </MenuItem>

      {!isLoggedIn && (
        <MenuItem onClick={() => history.push("/user/orders")} divider>
          My Orders
        </MenuItem>
      )}

      {isLoggedIn && (
        <MenuItem onClick={() => history.push("/bicycles")} divider>
          Manage Product
        </MenuItem>
      )}

      {isLoggedIn && (
        <MenuItem onClick={() => history.push("/admin/manage")} divider>
          Manage Admin
        </MenuItem>
      )}

      <MenuItem onClick={() => history.push("/all/orders")} divider>
        {isLoggedIn ? "Manage Orders" : "All Orders"}
      </MenuItem>
      {!isLoggedIn && (
        <MenuItem onClick={() => history.push("/user/pay")} divider>
          Pay
        </MenuItem>
      )}
      {!isLoggedIn && (
        <MenuItem onClick={() => history.push("/user/reviews")} divider>
          Reviews
        </MenuItem>
      )}
      <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
    </Menu>
  );
}
