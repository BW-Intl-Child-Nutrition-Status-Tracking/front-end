import React from "react";
import { Route } from "react-router-dom";
import CreateACountry from "./components/CreateACountry";
import CreateACommunity from "./components/CreateACommunity";
import ChildRecordNewForm from "./components/ChildRecordNewForm";
import Dashboard from "./pages/Dashboard";
import ChildView from "./pages/ChildView";
import LandingPage from "./pages/LandingPage";

export default function App(props) {
  // console.log(sessionStorage.getItem("username"));
  // console.log(props);
  // sessionStorage.clear();
  // if (props.isloading)
  //   return (
  //     <div className="loading">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  return (
    <div>
      {/* <PrivateRoute path="/:username">
        <Route path="/:username" component={Menu} />
        <Route path="/:username" component={Dashboard} />
        <Route path="/:username/childRecord" component={ChildRecordNewForm} />
        <Route path="/:username/createAUser" component={CreateAUser} />
        <Route path="/createACountry" component={CreateACountry} />
        <Route path="/createacommunity" component={CreateACommunity} />
        <Route path="/:username/:community/:id/children" component={Children} />
        <Route path="/Communities" component={Communities} />
      </PrivateRoute> */}

      <Route exact path="/" component={LandingPage} />
      <Route path="/countries" component={Dashboard} />
      <Route exact path="/country/:countryID" component={Dashboard} />
      <Route
        exact
        path="/country/:countryID/community/:communityID"
        component={Dashboard}
      />
      <Route
        exact
        path="/country/:countryID/community/:communityID/child/:childID"
        component={ChildView}
      />
      <Route exact path="/add/childrecord" component={ChildRecordNewForm} />
      <Route exact path="/add/country" component={CreateACountry} />
      <Route exact path="/add/community" component={CreateACommunity} />

      {/* <ChildRecordNewForm /> */}
      {/* <DataTable /> */}
      {/* <CreateACountry />
      <CreateACommunity /> */}
    </div>
  );
}

// export default connect(state => state)(App);
