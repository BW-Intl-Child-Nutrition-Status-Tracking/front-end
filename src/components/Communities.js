import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { countryFetch } from "../actions";

function Communities(props) {
  console.log(props);

  useEffect(() => {
    if (!props.userAllInfo.usertype) {
      props.countryFetch(props.userAllInfo.country);
      props.history.push(`/communities`);
    }
  }, []);

  if (!props.communities) return <h1>Loading</h1>;

  if (props.userAllInfo.usertype) {
    console.log(props.match.params.id);
    return (
      <div>
        <h2>Communities</h2>
        {props.countries[props.match.params.id].communities.map(
          (communitie, index) => (
            <Link
              to={`/${props.countries[props.match.params.id].country}/${
                props.match.params.id
              }/${communitie.communite}/${index}/Children`}
              key={communitie.communite}
            >
              <h4>{communitie.communite}</h4>
            </Link>
          )
        )}
      </div>
    );
  }
  return (
    <div>
      <h2>Communities</h2>
      {props.communities.map((communitie, index) => (
        <Link
          to={`/${props.userAllInfo.country}/${communitie.communite}/${index}/Children`}
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
    communities: state.data,
    countries: state.data
  };
};
export default connect(mapStatetoProps, { countryFetch })(Communities);
