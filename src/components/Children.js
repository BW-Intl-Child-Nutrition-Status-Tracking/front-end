import React from "react";
import { connect } from "react-redux";

function Children(props) {
  console.log(props);
  const children = props.communities[props.match.params.id].children;
  console.log(children);
  if (!children) return <h1>Loading</h1>;

  return (
    <div>
      <h2>Children</h2>
    </div>
  );
}
const mapStatetoProps = state => {
  return {
    userinfo: state.user,
    userAllInfo: state.userInfo,
    communities: state.data
  };
};
export default connect(mapStatetoProps, {})(Children);