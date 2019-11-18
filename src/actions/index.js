import axios from "axios";
import { axiosWithAuth } from "../components/axiosWithAuth";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_FETCH = "LOGIN_FETCH";
export const LOGIN_FAILED = "LOGIN_FAILED";

// Login Token
export const logInaction = (values, history) => dispatch => {
  // dispatch({ type: LOGIN_LOADING });
  // axios
  //   .post("http://localhost:5000/api/login", values)
  //   .then(respon =>
  //     dispatch({
  //       type: LOGIN_FETCH,
  //       payload: { token: respon.data, user: values.username }
  //     })
  //   )
  //   .catch(respon => dispatch({ type: LOGIN_FAILED }));

  history.push(`/${values.username}`);
};
