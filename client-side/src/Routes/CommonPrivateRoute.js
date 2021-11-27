import { Redirect, Route } from "react-router-dom";

const CommonPrivateRoute = ({ children, rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      localStorage.getItem("user-auth-token") ||
      localStorage.getItem("admin-auth-token") ? (
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

export default CommonPrivateRoute;
