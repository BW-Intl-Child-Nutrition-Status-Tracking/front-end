import { LOGIN_LOADING, LOGIN_FETCH, LOGIN_FAILED } from "../actions";

const initiallstate = {
  user: sessionStorage.getItem("username"),
  data: [],
  isloading: false,
  error: null,
  token: sessionStorage.getItem("token")
};

export const rootReducer = (state = initiallstate, actions) => {
  switch (actions.type) {
    // Login Cases
    case LOGIN_LOADING:
      return {
        ...state,
        isloading: true,
        error: null
      };

    case LOGIN_FETCH:
      sessionStorage.setItem("token", actions.payload.token.payload);
      sessionStorage.setItem("username", actions.payload.user);

      return {
        ...state,
        user: actions.payload.user,
        token: sessionStorage.getItem("token"),
        isloading: false,
        error: null
      };
    case LOGIN_FAILED:
      return {
        data: [],
        isloading: false,
        error: "Invalid UserName or Password!"
      };
    default:
      return state;
  }
};
