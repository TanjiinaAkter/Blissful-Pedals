import constant from "./constant";

const {
  APP_SET_ALERT_MESSAGE,
  APP_CLOSE_ALERT_MESSAGE,
  SET_LOADING_STATUS,
  SET_ADMIN_LOGGED_IN,
  FETCH_BICYCLES_DATA_SUCCESS,
  FETCH_SINGLE_BICYCLE_DATA_SUCCESS,
  ADD_BICYCLE_SUCCESS,
  DELETE_BICYCLE_SUCCESS,
  UPDATE_BICYCLE_SUCCESS,
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

const reducer = (state, actions) => {
  switch (actions.type) {
    case APP_SET_ALERT_MESSAGE:
      state = {
        ...state,
        messageInfo: {
          isOpen: true,
          ...actions.payload,
        },
      };
      return state;
    case APP_CLOSE_ALERT_MESSAGE:
      state = {
        ...state,
        messageInfo: {
          isOpen: false,
          status: null,
          message: null,
        },
      };
      return state;
    case SET_LOADING_STATUS:
      state = {
        ...state,
        isLoading: actions.payload,
      };
      return state;
    case SET_ADMIN_LOGGED_IN:
      state = {
        ...state,
        admin: {
          ...state.admin,
          ...actions.payload,
        },
      };
      return state;
    case FETCH_BICYCLES_DATA_SUCCESS:
      state = {
        ...state,
        bicycles: [...actions.payload],
      };
      return state;
    case FETCH_SINGLE_BICYCLE_DATA_SUCCESS:
      state = {
        ...state,
        singleBicycle: actions.payload,
      };
      return state;
    case ADD_BICYCLE_SUCCESS:
      state = {
        ...state,
        bicycles: [...state.bicycles, { ...actions.payload }],
      };
      return state;

    case UPDATE_BICYCLE_SUCCESS:
      const updatedBicycles = state.bicycles.map((food) => {
        if (food._id === actions.payload._id) {
          return {
            ...food,
            ...actions.payload,
          };
        }
        return { ...food };
      });
      state = {
        ...state,
        bicycles: updatedBicycles,
      };
      return state;
    case DELETE_BICYCLE_SUCCESS:
      let filteredBicycles = state.bicycles.filter(
        (food) => food._id !== actions.payload
      );
      state = {
        ...state,
        bicycles: filteredBicycles,
      };
      return state;
    case USER_CHANGE_BICYCLE_QUANTITY:
      state = {
        ...state,
        orderBicycleQuantity: actions.payload,
      };
      return state;
    case USER_ORDER_CONFIRM_SUCCESS:
      state = {
        ...state,
        userOrders: [...state.userOrders, { ...actions.payload }],
        orderBicycleQuantity: 1,
      };
      return state;
    case FETCH_USER_ORDERS_SUCCESS:
      state = {
        ...state,
        userOrders: [...actions.payload],
      };
      return state;
    case ORDER_DELETE_SUCCESS:
      let filteredOrders = state.userOrders.filter(
        (order) => order._id !== actions.payload
      );
      let orders = state.orders.filter(
        (order) => order._id !== actions.payload
      );
      state = {
        ...state,
        userOrders: filteredOrders,
        orders,
      };
      return state;
    case FETCH_ALL_ORDERS_SUCCESS:
      state = {
        ...state,
        orders: [...actions.payload],
      };
      return state;
    case CHANGE_ORDER_STATUS_SUCCESS:
      const updatedOrders = state.orders.map((order) => {
        if (order._id === actions.payload.id) {
          return {
            ...order,
            status: actions.payload.status,
          };
        }
        return { ...order };
      });

      state = {
        ...state,
        orders: updatedOrders,
      };
      return state;
    case FETCH_REVIEWS_SUCCESS:
      state = {
        ...state,
        reviews: [...actions.payload],
      };
      return state;
    case ADD_REVIEW_SUCCESS:
      state = {
        ...state,
        reviews: [...state.reviews, { ...actions.payload }],
      };
      return state;
    case FETCH_ALL_ADMIN_SUCCESS:
      state = {
        ...state,
        admins: actions.payload,
      };
      return state;
    case ADMIN_SIGNUP_SUCCESS:
      state = {
        ...state,
        admins: [
          ...state.admins,
          {
            ...actions.payload,
          },
        ],
      };
      return state;
    case DELETE_ADMIN_SUCCESS:
      const admins = state.admins.filter(
        (admin) => admin._id !== actions.payload
      );
      state = {
        ...state,
        admins,
      };
      return state;
    default:
      return state;
  }
};

export default reducer;
