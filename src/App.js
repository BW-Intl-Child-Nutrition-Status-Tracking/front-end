import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import LogInForm from "./components/LogInForm";
import Menu from "./components/Menu";
import ChildRecordNewForm from "./components/ChildRecordNewForm";
import DataTable from "./components/DataTable";
import CreateACountry from "./components/CreateACountry";

function App() {
  return (
    <div>
      <PrivateRoute>
        <Route path="/:id" component={Menu} />
        <Route path="/:id/childRecord" component={ChildRecordNewForm} />
      </PrivateRoute>
      <Route exact path="/" component={LogInForm} />

      <ChildRecordNewForm />
      <DataTable />
      <CreateACountry />
    </div>
  );
}

export default connect(state => state)(App);
