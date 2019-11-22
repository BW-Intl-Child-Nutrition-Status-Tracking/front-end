import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions";
import ShowUser from "./ShowUser";

function AllUsers(props) {
  useEffect(() => {
    props.createUser();
  }, []);
  if (!props.allusers) return <p>Loading</p>;
  return (
    <div className="list-div">
      <div className="createUser">
        <button
          className="adduserbtn"
          onClick={() =>
            props.history.push(
              `/${props.userAllInfo.username}/users/createAUser`
            )
          }
        >
          Create New User
        </button>
      </div>
      <div className="usersList">
        {props.allusers.map((user, index) => (
          <ShowUser key={index} showuser={user} history={props.history} />
        ))}
      </div>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    username: state.user,
    userAllInfo: state.userInfo,
    allusers: state.allusers
  };
};

export default connect(mapStatetoProps, { createUser })(AllUsers);
