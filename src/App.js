import React from "react";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import LogInForm from "./components/LogInForm";
import Menu from "./components/Menu";
import ChildRecordNewForm from "./components/ChildRecordNewForm";
import DataTable from "./components/DataTable";
import CreateACountry from "./components/CreateACountry";
import CreateAUser from "./components/CreateAUser";
import Childs from "./components/Childs";

function App(props) {
  console.log(props);
  // sessionStorage.clear();
  if (props.isloading)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div>
      <PrivateRoute path="/:username">
        <Route path="/:username" component={Menu} />
        <Route path="/:username/childRecord" component={ChildRecordNewForm} />
        <Route path="/:username/createAUser" component={CreateAUser} />
        <Route path="/:username/createACountry" component={CreateACountry} />
        <Route path="/:username/:communitie/:id/childs" component={Childs} />
      </PrivateRoute>

      <Route exact path="/" component={LogInForm} />

      {/* <ChildRecordNewForm /> */}
      {/* <DataTable /> */}
      {/* <CreateACountry /> */}
    </div>
  );
}

export default connect(state => state)(App);
