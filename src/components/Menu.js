import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userInfo } from "../actions";
import Communities from "./Communities";
import Countries from "./Countries";

function Menu(props) {
  useEffect(() => {
    props.userInfo(props.username);
    // props.history.push("/communities");
  }, []);

  const OnLogOut = () => {
    sessionStorage.clear();
    props.history.push("/");
  };

  if (!props.userAllInfo) return <p>Loading</p>;
  return (
    <div>
      <h2>Wellcome {props.userAllInfo.username}</h2>
      <button onClick={OnLogOut}>LogOut</button>
      {props.userAllInfo.usertype && (
        <div>
          <button
            onClick={() =>
              props.history.push(`/${props.userAllInfo.username}/createAUser`)
            }
          >
            Create User
          </button>
          <Link to={`/createACountry`}>Create Country</Link>
        </div>
      )}
      <button
        onClick={() => props.history.push(`/communities/createacommunity`)}
      >
        CreateACommunity
      </button>
      <Link to={`/childRecord`}>add Child</Link>
      {props.userAllInfo.usertype ? (
        <div>
          <Countries history={props.history} />
        </div>
      ) : (
        <Communities {...props} />
      )}
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    username: state.user,
    userAllInfo: state.userInfo
  };
};

export default connect(mapStatetoProps, { userInfo })(Menu);
