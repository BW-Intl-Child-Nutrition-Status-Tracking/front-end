import React from "react";
import { connect } from "react-redux";
import Child from "./Child";

function Childs(props) {
  console.log(props);
  const childs = props.communities[props.match.params.id].childs;
  console.log(childs);
  if (!childs) return <h1>Loading</h1>;

  return (
    <div>
      <h2>Childs</h2>
      {childs.map(child => (
        <Child child={child} key={child.id} />
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
export default connect(mapStatetoProps, {})(Childs);
