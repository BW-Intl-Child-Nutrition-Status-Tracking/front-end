import React from "react";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import CreateACountry from "./components/CreateACountry";
import CreateAUser from "./components/CreateAUser";
import Children from "./components/Children";
// import Dashboard from "./pages/Dashboard";
import ChildRecordNewForm from "./components/ChildRecordNewForm";
import LogInForm from "./components/LogInForm";
import Communities from "./components/Communities";
// import DataTable from "./components/DataTable";
import Menu from "./components/Menu";
function App(props) {
  console.log(sessionStorage.getItem("username"));
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
        <Route path="/childRecord" component={ChildRecordNewForm} />
        <Route path="/:username/createAUser" component={CreateAUser} />
        <Route path="/:username/createACountry" component={CreateACountry} />
        <Route path="/:username/:community/:id/children" component={Children} />
        {/* <Route path="/Communities" component={Communities} /> */}
      </PrivateRoute>

      <Route exact path="/" component={LogInForm} />

      {/* <ChildRecordNewForm /> */}
      {/* <DataTable /> */}
      {/* <CreateACountry /> */}
    </div>
  );
}

export default connect(state => state)(App);
