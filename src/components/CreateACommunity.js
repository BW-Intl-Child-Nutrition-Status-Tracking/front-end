import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createCountry } from "../actions";

const CreateACountry = props => {
  const [country, setCountry] = useState({
    country: ""
  });

  const onChange = event => {
    setCountry({ country: event.target.value });
  };
  console.log(country);
  onsubmit = event => {
    event.preventDefault();
    props.createCountry(country);
    props.history.push(`/${props.username}`);
    setCountry({
      country: ""
    });
  };
  return (
    <div>
      <form className="editeForm addcountryfrom">
        <label htmlFor="countryname">Country name:</label>
        <input
          placeholder="country name"
          name="countryname"
          onChange={onChange}
        />
        <div className="formbtn">
          {" "}
          <button>Submit</button>
          <button
            onClick={event => {
              event.preventDefault();
              props.history.goBack();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    username: state.user,
    userAllInfo: state.userInfo
  };
};

export default connect(mapStatetoProps, { createCountry })(CreateACountry);
