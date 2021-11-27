import { Redirect, Route } from "react-router-dom";

const UserPrivateRoute = ({ children, rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      localStorage.getItem("user-auth-token") ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/user/login",
            state: {
              from: location,
            },
          }}
        />
      )
    }
  />
);

export default UserPrivateRoute;
