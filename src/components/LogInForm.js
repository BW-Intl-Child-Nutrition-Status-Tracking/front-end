import React, { useState } from "react";
import { connect } from "react-redux";
import { logInaction } from "../actions";
import { Link } from "react-router-dom";

function LogInForm(props) {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const onchange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const onLogin = event => {
    event.preventDefault();
    props.logInaction(values, props.history);
  };

  return (
    <div>
      <h3>Login Please</h3>
      {props.error ? <p>{props.error}</p> : null}
      <form onSubmit={onLogin}>
        <label htmlFor="username">UserName: </label>
        <input
          id="username"
          name="username"
          placeholder="username"
          onChange={onchange}
        />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          placeholder="password"
          onChange={onchange}
        />
        <button>LogIn</button>
        <p>
          forgot your password? <Link to="">reset Password</Link>
        </p>
      </form>
    </div>
  );
}

export default connect(state => state, { logInaction })(LogInForm);
