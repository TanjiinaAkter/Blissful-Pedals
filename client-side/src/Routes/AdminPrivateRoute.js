import { Redirect, Route } from "react-router-dom";

const AdminPrivateRoute = ({ children, rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      localStorage.getItem("admin-auth-token") ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/admin/login",
            state: {
              from: location,
            },
          }}
        />
      )
    }
  />
);

export default AdminPrivateRoute;
