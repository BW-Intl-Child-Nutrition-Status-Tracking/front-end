import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
// import ChildRecordNewForm from "./components/ChildRecordNewForm";
import DataTable from "./components/DataTable";
import CreateACountry from "./components/CreateACountry";
// import Dashboard from "./pages/Dashboard";
// import LogIn from "./pages/LogIn";

function App() {
  return (
    <div>
      <PrivateRoute>
        {/* <Route path="/:username" component={Dashboard} /> */}
        {/* <Route path="/:username/childRecord" component={ChildRecordNewForm} /> */}
      </PrivateRoute>
      {/* <Route exact path="/" component={LogIn} /> */}

      {/* <ChildRecordNewForm /> */}
      <DataTable />
      <CreateACountry />
    </div>
  );
}

export default connect(state => state)(App);
