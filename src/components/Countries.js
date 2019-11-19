import React, { useEffect } from "react";
import { connect } from "react-redux";
import { countriesFetch } from "../actions";
function Countries(props) {
  useEffect(() => {
    props.countriesFetch();
  }, []);
  console.log(props);
  return (
    <div>
      <h2>Countries</h2>
    </div>
  );
}

export default connect(state => state, { countriesFetch })(Countries);
