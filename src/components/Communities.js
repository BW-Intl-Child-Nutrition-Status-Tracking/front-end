import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { countryFetch } from "../actions";

function Communities(props) {
  console.log(props);
  useEffect(() => {
    props.countryFetch(props.userAllInfo.country);
  }, []);
  if (!props.communities) return <h1>Loading</h1>;
  return (
    <div>
      <h2>Communities</h2>
      {props.communities.map((communitie, index) => (
        <Link
          to={`/${props.userinfo}/${communitie.communite}/${index}/childs`}
          key={communitie.communite}
        >
          <h4>{communitie.communite}</h4>
        </Link>
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
export default connect(mapStatetoProps, { countryFetch })(Communities);
