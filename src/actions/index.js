import axios from "axios";
import { axiosWithAuth } from "../components/axiosWithAuth";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_FETCH = "LOGIN_FETCH";
export const LOGIN_FAILED = "LOGIN_FAILED";

// User- Info
export const USER_INFO_LOADING = "USER_INFO_LOADING";
export const USER_INFO_FETCH = "USER_INFO_FETCH";
export const USER_INFO_FAILED = "USER_INFO_FAILED";

// One Country
export const COUNTRY_INFO_LOADING = "COUNTRIES_INFO_LOADING";
export const COUNTRY_INFO_FETCH = "COUNTRIES_INFO_LOADING";
export const COUNTRY_INFO_FAILED = "COUNTRIES_INFO_LOADING";

// Countries-Info
export const COUNTRIES_INFO_LOADING = "COUNTRIES_INFO_LOADING";
export const COUNTRIES_INFO_FETCH = "COUNTRIES_INFO_LOADING";
export const COUNTRIES_INFO_FAILED = "COUNTRIES_INFO_LOADING";

// Login Token
export const logInaction = (values, history) => dispatch => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post("http://localhost:5000/api/login", values)
    .then(respon =>
      dispatch({
        type: LOGIN_FETCH,
        payload: { token: respon.data, user: values.username }
      })
    )
    .catch(respon => dispatch({ type: LOGIN_FAILED }));
};

// Create New User Action
export const createUser = (newuser, history) => dispatch => {
  console.log(newuser, history);
  axios
    .post("http://localhost:5000/api/signup", newuser)
    .then(respo => console.log(respo))
    .catch(respon => dispatch({ type: USER_INFO_FAILED }));
};

// User Information Fetch
export const userInfo = user => dispatch => {
  console.log(user);
  const authAxios = axiosWithAuth();

  authAxios
    .get(`http://localhost:5000/api/userpage/${user}`)
    .then(respo => dispatch({ type: USER_INFO_FETCH, payload: respo.data }))
    .catch(respon => dispatch({ type: USER_INFO_FAILED }));
};

// Country Action Fetch
export const countryFetch = country => dispatch => {
  console.log(country);
  const authAxios = axiosWithAuth();

  // dispatch({ type: COUNTRY_INFO_LOADING });
  authAxios
    .get(`http://localhost:5000/api/countries/${country}`)
    .then(respo =>
      dispatch({ type: COUNTRY_INFO_FETCH, payload: respo.data.communities })
    )

    .catch(respon => dispatch({ type: COUNTRY_INFO_FAILED }));
};

// All Countries Action Fetch

export const countriesFetch = () => dispatch => {
  const authAxios = axiosWithAuth();

  dispatch({ type: COUNTRIES_INFO_LOADING });
  authAxios
    .get("http://localhost:5000/api/countries")
    .then(respo =>
      dispatch({ type: COUNTRIES_INFO_FETCH, payload: respo.data })
    )

    .catch(respon => dispatch({ type: COUNTRIES_INFO_FAILED }));
};
