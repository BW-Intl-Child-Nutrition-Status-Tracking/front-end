import React, { useState } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions";

function CreateAUser(props) {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    country: "",
    usertype: false
  });
  const onChange = event => {
    if ([event.target.name] == "usertype") {
      console.log(event.target.value);
      if (event.target.value == "true")
        setUser({
          ...user,
          usertype: true
        });
      else
        setUser({
          ...user,
          usertype: false
        });
    } else {
      setUser({
        ...user,
        [event.target.name]: event.target.value
      });
    }
  };
  console.log(user);
  const onSubmit = event => {
    event.preventDefault();
    props.createUser(user, props.history);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstname">First Name: </label>
        <input name="firstname" id="firstname" onChange={onChange} />
        <label htmlFor="lastname">Last Name: </label>
        <input name="lastname" id="lastname" onChange={onChange} />
        <label htmlFor="username">UserName: </label>
        <input name="username" id="username" onChange={onChange} />
        <label htmlFor="email">Email : </label>
        <input name="email" id="email" onChange={onChange} />
        <label htmlFor="password">Password : </label>
        <input name="password" id="password" onChange={onChange} />
        <label htmlFor="Country">Country : </label>
        <input name="country" id="Country" onChange={onChange} />
        <label>User Type:</label>
        <select name="usertype" onChange={onChange}>
          <option value="true">Globel Admin</option>
          <option value="false">Country Admin</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default connect(state => state, { createUser })(CreateAUser);
