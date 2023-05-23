import * as actions from "../actions/types";

export const authDefaultState = {
  isLogedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      localStorage.setItem("isLogedIn", true);
      return { ...state, isLogedIn: true };
    case actions.LOGOUT:
      localStorage.setItem("isLogedIn", false);
      return { ...state, isLogedIn: false };
    default:
      return state;
  }
};