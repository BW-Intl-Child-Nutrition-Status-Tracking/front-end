import React, { useEffect } from "react";
import { connect } from "react-redux";
import { countriesFetch } from "../actions";
function Countries(props) {
  console.log(props);
  useEffect(() => {
    props.countriesFetch();
  }, []);
  return (
    <div>
      <h2>Countries</h2>
    </div>
  );
}

export default connect(state => state, { countriesFetch })(Countries);
