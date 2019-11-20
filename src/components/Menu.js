import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userInfo } from "../actions";
import Communities from "./Communities";
import Countries from "./Countries";

function Menu(props) {
  console.log(props);
  useEffect(() => {
    props.userInfo(props.username);
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
          <Link to={`/${props.userAllInfo.username}/createAUser`}>
            Create User
          </Link>
          <Link to={`/createACountry`}>Create Country</Link>
        </div>
      )}
      <Link to="createacommunity">CreateACommunity</Link>
      <Link to={`/childRecord`}>add Child</Link>
      {props.userAllInfo.usertype ? (
        <Countries />
      ) : (
        <Communities history={props.history} />
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
