import { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AlertMessage from "../components/AlertMessage/AlertMessage";
import fourZeroFour from "../components/Common/404";
import Loader from "../components/Common/Loader";
import fqasPage from "../components/FQAS/FQAS";
import reviewsPage from "../components/Reviews/Reviews";
import appContext from "../context/context";
import aboutPage from "../pages/About";
import ManageAdminPage from "../pages/Admin/ManageAdmin";
import AdminProfile from "../pages/Admin/Profile";
import adminLogin from "../pages/AdminLogin";
import bicycleDetailPage from "../pages/BicycleDetail";
import bicyclesPage from "../pages/Bicycles";
import homePage from "../pages/Home";
import orderPage from "../pages/Order";
import orderManagementPage from "../pages/OrdersManagement";
import payPage from "../pages/Pay";
import userOrdersPage from "../pages/User/Orders";
import UserProfilePage from "../pages/User/Profile";
import UserReviewsPage from "../pages/User/Reviews";
import userLoginPage from "../pages/UserLogin";
import userSignupPage from "../pages/UserSignup";
import AdminPrivateRoute from "./AdminPrivateRoute";
import CommonPrivateRoute from "./CommonPrivateRoute";
import UserPrivateRoutes from "./UserPrivateRoutes";

const routes = [
  {
    component: adminLogin,
    path: "/admin/login",
  },
  {
    component: userLoginPage,
    path: "/user/login",
  },
  {
    component: userSignupPage,
    path: "/user/signup",
  },

  {
    component: aboutPage,
    path: "/about-us",
  },
  {
    component: bicycleDetailPage,
    path: "/bicycles/:id",
  },
  {
    component: bicyclesPage,
    path: "/bicycles",
  },
  {
    component: reviewsPage,
    path: "/reviews",
  },
  {
    component: fqasPage,
    path: "/fqas",
  },
  {
    component: homePage,
    path: "/",
  },
];

const userPrivateRoutes = [
  {
    Component: UserProfilePage,
    path: "/user/profile",
  },
  {
    Component: UserReviewsPage,
    path: "/user/reviews",
  },
  {
    Component: orderPage,
    path: "/order/:id",
  },
  {
    Component: userOrdersPage,
    path: "/user/orders",
  },
  {
    Component: payPage,
    path: "/user/pay",
  },
];

const commonPrivateRoutes = [
  {
    Component: orderManagementPage,
    path: "/all/orders",
  },
];

function Routes() {
  const { adminLoginVerify } = useContext(appContext);
  useEffect(() => {
    if (localStorage.getItem("admin-auth-token")) {
      adminLoginVerify();
    }
  }, []);
  return (
    <main>
      <AlertMessage />
      <Loader />
      <Switch>
        {routes.map(({ component, path }) => (
          <Route path={path} exact component={component} key={path} />
        ))}
        {userPrivateRoutes.map(({ Component, path }) => (
          <UserPrivateRoutes path={path} key={path}>
            <Component />
          </UserPrivateRoutes>
        ))}

        {commonPrivateRoutes.map(({ Component, path }) => (
          <CommonPrivateRoute path={path} key={path}>
            <Component />
          </CommonPrivateRoute>
        ))}

        <AdminPrivateRoute path="/admin/profile">
          <AdminProfile />
        </AdminPrivateRoute>
        <AdminPrivateRoute path="/admin/manage">
          <ManageAdminPage />
        </AdminPrivateRoute>
        <Route path="*" component={fourZeroFour} exact />
      </Switch>
    </main>
  );
}
export default Routes;
