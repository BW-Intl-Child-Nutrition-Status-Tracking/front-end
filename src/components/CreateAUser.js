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
  const onSubmit = event => {
    event.preventDefault();
    props.createUser(user, props.history);
    props.history.push(`/${props.username}/users`);
  };
  return (
    <div className="createUser">
      <form onSubmit={onSubmit} className="editeForm adduserform">
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
        <div className="addusersbtn">
          <button>Submit</button>
          <button
            onClick={event => {
              event.preventDefault();
              props.history.goBack();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    username: state.user,
    userAllInfo: state.userInfo
  };
};

export default connect(mapStatetoProps, { createUser })(CreateAUser);
