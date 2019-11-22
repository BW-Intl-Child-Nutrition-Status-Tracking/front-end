import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Child from "../pages/ChildView";

function Children(props) {
  console.log(props);
  let children = props.communities[props.match.params.id].childs;
  console.log(props.match.country, props.match.community);
  if (!children) return <h1>Loading</h1>;

  return (
    <div className="childrens">
      <h2>Children</h2>
      <div className="childsbtn">
        <button
          onClick={event => {
            event.preventDefault();
            props.history.goBack();
          }}
        >
          Back
        </button>

        <Link
          to={`/${props.match.params.country}/${props.match.params.community}/childRecord`}
        >
          add Child
        </Link>
      </div>
      <div className="allchilds" id="allch">
        {children.map(child => (
          <Child child={child} />
        ))}
      </div>
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
