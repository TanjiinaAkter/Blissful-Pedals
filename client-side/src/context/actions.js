import constant from "./constant";
const {
  APP_SET_ALERT_MESSAGE,
  APP_CLOSE_ALERT_MESSAGE,
  SET_LOADING_STATUS,
  SET_ADMIN_LOGGED_IN,
  FETCH_BICYCLES_DATA_SUCCESS,
  FETCH_SINGLE_BICYCLE_DATA_SUCCESS,
  ADD_BICYCLE_SUCCESS,
  UPDATE_BICYCLE_SUCCESS,
  DELETE_BICYCLE_SUCCESS,
  USER_CHANGE_BICYCLE_QUANTITY,
  USER_ORDER_CONFIRM_SUCCESS,
  FETCH_USER_ORDERS_SUCCESS,
  ORDER_DELETE_SUCCESS,
  FETCH_ALL_ORDERS_SUCCESS,
  CHANGE_ORDER_STATUS_SUCCESS,
  FETCH_REVIEWS_SUCCESS,
  ADD_REVIEW_SUCCESS,
  FETCH_ALL_ADMIN_SUCCESS,
  ADMIN_SIGNUP_SUCCESS,
  DELETE_ADMIN_SUCCESS,
} = constant;
const API_ROOT_URL = "https://blissfulpedals.herokuapp.com";
const main = (dispatch) => {
  const methods = {};

  // Take status to return the color for determination of status for visualization
  methods.getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "primary";
      case "rejected":
        return "error";
      case "delivered":
        return "green";
      default:
        return "text.secondary";
    }
  };
  // Set an alert message with the app to show anywhere
  methods.setAlertMessage = (status, message) => {
    dispatch({
      type: APP_SET_ALERT_MESSAGE,
      payload: {
        status,
        message,
      },
    });
  };
  // Close an alert message with the app to invisible anywhere
  methods.closeAlertMessage = () => {
    dispatch({
      type: APP_CLOSE_ALERT_MESSAGE,
    });
  };
  // To login admin
  methods.adminLoginHandleSubmit = async (
    email,
    password,
    history,
    location
  ) => {
    if (!email || !password) {
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "warning",
          message: "Please provide email and password to login",
        },
      });
      return;
    }
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.status === 200) {
        localStorage.setItem("admin-auth-token", data.token);
        history.push(location?.state?.from?.pathname || "/admin/profile");
        dispatch({
          type: SET_ADMIN_LOGGED_IN,
          payload: {
            isLoggedIn: data.isLoggedIn,
            ...data.admin,
          },
        });
      }
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: res.status === 200 ? "success" : "error",
          message: data.message,
        },
      });
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  // To verify admin auth token from the server to set authentication status with context
  methods.adminLoginVerify = async () => {
    try {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: true,
      });
      const res = await fetch(`${API_ROOT_URL}/api/admin/login/verify`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-admin-auth-token": localStorage.getItem("admin-auth-token"),
        },
      });
      const data = await res.json();
      if (res.status !== 200) {
        localStorage.removeItem("admin-auth-token");
        dispatch({
          type: SET_ADMIN_LOGGED_IN,
          payload: {
            isLoggedIn: false,
            name: null,
            email: null,
          },
        });
      } else {
        dispatch({
          type: SET_ADMIN_LOGGED_IN,
          payload: {
            isLoggedIn: data.isLoggedIn,
            ...data.admin,
          },
        });
      }
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  // To logout admin
  methods.adminLogout = (history) => {
    localStorage.removeItem("admin-auth-token");
    history.push("/admin/login");
    dispatch({
      type: SET_ADMIN_LOGGED_IN,
      payload: {
        isLoggedIn: false,
        name: null,
        email: null,
      },
    });
  };

  // Fetch bicycles Data
  methods.fetchBicyclesData = async () => {
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/bicycle/all`, {
        method: "GET",
      });
      const data = await res.json();
      if (res.status === 200) {
        dispatch({
          type: FETCH_BICYCLES_DATA_SUCCESS,
          payload: data.bicycles,
        });
      }
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  // Fetch Single bicycle
  methods.fetchSingleBicycleById = async (id, history) => {
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/bicycle/single/${id}`, {
        methods: "GET",
      });
      const data = await res.json();

      if (res.status === 200) {
        dispatch({
          type: FETCH_SINGLE_BICYCLE_DATA_SUCCESS,
          payload: data.bicycle,
        });
      } else {
        history.push("/");
      }
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  // Add bicycle by Admin
  methods.addBicycleHandleSubmit = async ({
    name,
    price,
    model,
    stockStatus,
    description,
    features,
    img,
  }) => {
    if (
      !name ||
      !price ||
      !model ||
      !stockStatus ||
      !description ||
      !features ||
      !img
    ) {
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "warning",
          message: "Please provide the all required fields to add a bicycle",
        },
      });
      return;
    }
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/bicycle/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-auth-token": localStorage.getItem("admin-auth-token"),
        },
        body: JSON.stringify({
          name,
          price,
          model,
          stockStatus,
          description,
          features,
          img,
        }),
      });
      const data = await res.json();
      if (res.status === 201) {
        dispatch({
          type: ADD_BICYCLE_SUCCESS,
          payload: data.bicycle,
        });
      }
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: res.status === 201 ? "success" : "error",
          message: data.message,
        },
      });
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  // Update bicycle by Admin
  methods.updateBicycleHandleSubmit = async ({
    name,
    price,
    model,
    stockStatus,
    description,
    features,
    img,
    _id,
  }) => {
    if (
      !name ||
      !price ||
      !model ||
      !stockStatus ||
      !description ||
      !features ||
      !img
    ) {
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "warning",
          message: "Please prov_e the all required fields to add a bicycle",
        },
      });
      return;
    }
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/bicycle/update/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-auth-token": localStorage.getItem("admin-auth-token"),
        },
        body: JSON.stringify({
          name,
          price,
          model,
          stockStatus,
          description,
          features,
          img,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        dispatch({
          type: UPDATE_BICYCLE_SUCCESS,
          payload: data.bicycle,
        });
      }
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: res.status === 200 ? "success" : "error",
          message: data.message,
        },
      });
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  // Delete bicycle by Admin
  methods.deleteBicycleHandleSubmit = async (id) => {
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/bicycle/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-auth-token": localStorage.getItem("admin-auth-token"),
        },
      });
      const data = await res.json();

      if (res.status === 200) {
        dispatch({
          type: DELETE_BICYCLE_SUCCESS,
          payload: id,
        });
      }
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: res.status === 200 ? "success" : "error",
          message: data.message,
        },
      });
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };

  // Change Order Quantity By User
  methods.handleChangeOrderQuantity = (qty) => {
    dispatch({
      type: USER_CHANGE_BICYCLE_QUANTITY,
      payload: qty,
    });
  };
  // bicycle Order By User
  methods.handleSubmitOrderBicycle = async (
    { fullname, address, phone, email, bicycle, quantity },
    history
  ) => {
    if (!fullname || !address || !phone || !email) {
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "warning",
          message:
            "Please provide all required fields to confirm the order of a bicycle",
        },
      });
      return;
    }
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/order/confirm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          address,
          phone,
          email,
          bicycle,
          quantity,
        }),
      });
      const data = await res.json();
      if (res.status === 201) {
        dispatch({
          type: USER_ORDER_CONFIRM_SUCCESS,
          payload: data.order,
        });
        history.push("/user/pay");
      }
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: res.status === 201 ? "success" : "error",
          message: data.message,
        },
      });
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  // Fetch user orders
  methods.fetchUserOrdersByEmail = async (email) => {
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(
        `${API_ROOT_URL}/api/order/user/all?email=${email}`,
        {
          methods: "GET",
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        dispatch({
          type: FETCH_USER_ORDERS_SUCCESS,
          payload: data.orders,
        });
      }
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  // Delete order
  methods.handleClickDeletOrder = async (id) => {
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/order/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.status === 200) {
        dispatch({
          type: ORDER_DELETE_SUCCESS,
          payload: data.id,
        });
      }
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: res.status === 200 ? "success" : "error",
          message: data.message,
        },
      });
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  // Fetch all orders
  methods.fetchAllOrders = async (email) => {
    try {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: true,
      });
      const res = await fetch(`${API_ROOT_URL}/api/order/all`, {
        method: "GET",
      });
      const data = await res.json();
      if (res.status === 200) {
        dispatch({
          type: FETCH_ALL_ORDERS_SUCCESS,
          payload: data.orders,
        });
      }
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  //Change the status of the order by the admin, the admin may be rejecting or pending or delivering the order
  methods.changeOrderStatus = async (id, status) => {
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/order/status/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-auth-token": localStorage.getItem("admin-auth-token"),
        },
        body: JSON.stringify({
          status,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        dispatch({
          type: CHANGE_ORDER_STATUS_SUCCESS,
          payload: { id, status },
        });
        dispatch({
          type: APP_SET_ALERT_MESSAGE,
          payload: {
            status: "success",
            message: data.message,
          },
        });
      }
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };

  // Fetch all reviews
  methods.fetchAllReviews = async (uid) => {
    try {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: true,
      });
      const reviewUrl = uid ? `/api/review?uid=${uid}` : "/api/review";
      const res = await fetch(`${API_ROOT_URL}${reviewUrl}`, {
        method: "GET",
      });
      const data = await res.json();
      if (res.status === 200) {
        dispatch({
          type: FETCH_REVIEWS_SUCCESS,
          payload: data.reviews,
        });
      }
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };

  // Add review by User
  methods.addReviewHandleSubmit = async ({
    name,
    description,
    ratings,
    bicycle,
    uid,
    img,
  }) => {
    if (!name || !description || !bicycle || !ratings || !uid) {
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "warning",
          message: "Please provide the all required fields to add a review",
        },
      });
      return;
    }
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/review/add/${uid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-auth-token": localStorage.getItem("user-auth-token"),
        },
        body: JSON.stringify({
          name,
          description,
          ratings,
          bicycle,
          img,
        }),
      });
      const data = await res.json();
      if (res.status === 201) {
        dispatch({
          type: ADD_REVIEW_SUCCESS,
          payload: data.review,
        });
      }
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: res.status === 201 ? "success" : "error",
          message: data.message,
        },
      });
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };

  // Fetch all admin
  methods.fetchAllAdmin = async () => {
    try {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: true,
      });

      const res = await fetch(`${API_ROOT_URL}/api/admin/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-admin-auth-token": localStorage.getItem("admin-auth-token"),
        },
      });
      const data = await res.json();
      if (res.status === 200) {
        dispatch({
          type: FETCH_ALL_ADMIN_SUCCESS,
          payload: data.admins,
        });
      }
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  // make admin by a Admin
  methods.signupAdminHandleSubmit = async ({
    name,
    email,
    password,
    confirmPassword,
  }) => {
    if (!name || !email || !password) {
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "warning",
          message: "Please provide the all required fields to make a admin",
        },
      });
      return;
    }
    if (password !== confirmPassword) {
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "warning",
          message: "Invalid confirm password",
        },
      });
      return;
    }
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/admin/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-auth-token": localStorage.getItem("admin-auth-token"),
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (res.status === 201) {
        dispatch({
          type: ADMIN_SIGNUP_SUCCESS,
          payload: data.admin,
        });
      }
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: res.status === 201 ? "success" : "error",
          message: data.message,
        },
      });
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };
  // Delete admin
  methods.deleteAdminHandleSubmit = async (id) => {
    dispatch({
      type: SET_LOADING_STATUS,
      payload: true,
    });
    try {
      const res = await fetch(`${API_ROOT_URL}/api/admin/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-auth-token": localStorage.getItem("admin-auth-token"),
        },
      });
      const data = await res.json();

      if (res.status === 200) {
        dispatch({
          type: DELETE_ADMIN_SUCCESS,
          payload: id,
        });
      }
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: res.status === 200 ? "success" : "error",
          message: data.message,
        },
      });
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
    } catch (e) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: false,
      });
      dispatch({
        type: APP_SET_ALERT_MESSAGE,
        payload: {
          status: "error",
          message: e.message,
        },
      });
    }
  };

  return methods;
};

export default main;
