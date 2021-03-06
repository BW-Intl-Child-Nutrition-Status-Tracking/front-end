import React from "react";
import { connect } from "react-redux";
import Child from "../pages/ChildView";

function Children(props) {
  console.log(props);
  const children = props.communities[props.match.params.id].childs;
  console.log(children);
  if (!children) return <h1>Loading</h1>;

  return (
    <div>
      <h2>Children</h2>
      {children.map(child => (
        <Child child={child} />
      ))}
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
