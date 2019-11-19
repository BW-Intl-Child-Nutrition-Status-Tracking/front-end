import React from "react";
import { connect } from "react-redux";
import Child from "./Child";

function Children(props) {
  console.log(props);
  const children = props.communities[props.match.params.id].childs;
  console.log(children);
  if (!children) return <h1>Loading</h1>;

  return (
    <div>
<<<<<<< HEAD:src/components/Childs.js
      <h2>Childs</h2>
      {childs.map(child => (
        <Child child={child} key={child.id} />
      ))}
=======
      <h2>Children</h2>
>>>>>>> 576f00291b1c6e05095f1a97750c5ac1b12286a0:src/components/Children.js
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
