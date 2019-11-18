import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import LogInForm from "./components/LogInForm";
import Menu from "./components/Menu";
import ChildRecordNewForm from "./components/ChildRecordNewForm";

function App() {
  return (
    <div>
      {/* <ChildRecordNewForm /> */}
      <Route exact path="/" component={LogInForm} />
      <Route path="/:id" component={Menu} />
    </div>
  );
}

export default connect(state => state)(App);
