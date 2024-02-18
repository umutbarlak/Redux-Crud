const initialState = {
  isAdmin: false,
  userInfo: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state;
    case "DELETE_TODO":
      return state;
    case "SET_TODO":
      return state;

    default:
      return state;
  }
};

export default userReducer;
