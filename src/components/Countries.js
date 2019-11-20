import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { countriesFetch } from "../actions";
function Countries(props) {
  console.log(props);
  useEffect(() => {
    props.countriesFetch(props.history, props.username);
    console.log(props.username);

    // if (!props.country || props.countries.length == 0)
    props.history.push(`/${props.username}`);
  }, []);

  if (!props.countries || props.countries.length == 0)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div className="countries">
      {props.countries.map((country, index) => (
        <Link className="country" to={`/addmincommunities/${index}`}>
          {country.country}
        </Link>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    username: state.user,
    countries: state.data
  };
};

export default connect(mapStateToProps, { countriesFetch })(Countries);
