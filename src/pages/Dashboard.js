import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataTable from "../components/DataTable";
import countriesData from "../data/countriesData";
import communitiesData from "../data/communitiesData";
import childrenData from "../data/childrenData";
import Page from "../components/Page";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { makeStyles } from "@material-ui/core/styles";

const mock = new MockAdapter(axios);

mock.onGet("/api/countries").reply(200, countriesData);

function CountryList(props) {
  const [data, setData] = useState({});

  const useStyles = makeStyles({
    styledH1: {
      margin: "5%"
    }
  });

  const classes = useStyles();

  useEffect(() => {
    axios.get("/api/countries").then(response => {
      setData(response.data);
    });
  }, []);

  // countries data looks like:
  //  [{ name: "Croatia"}, ..., {  name: "Kenya"}]
  if (data.results) {
    return (
      <Page>
        <h1 className={classes.styledH1}>Welcome</h1>
        <DataTable columns={data.columns} data={data} />
      </Page>
    );
  }
  return null;
}

mock.onGet("/api/communities").reply(200, communitiesData);

function CommunityList({ countryID }) {
  const [data, setData] = useState({});

  const useStyles = makeStyles({
    styledH1: {
      margin: "5%"
    }
  });

  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`/api/communities`, { params: { countryID: countryID } })
      .then(response => {
        setData(response.data);
      });
  }, [countryID]);

  if (data.results) {
    return (
      <Page>
        <h1 className={classes.styledH1}>List of communities</h1>
        <DataTable columns={data.columns} data={data} />
      </Page>
    );
  }
  return null;
}

mock.onGet("/api/children").reply(200, childrenData);

function ChildrenList({ communityID }) {
  const [data, setData] = useState({});

  const useStyles = makeStyles({
    styledH1: {
      margin: "5%"
    }
  });

  const classes = useStyles();

  useEffect(() => {
    axios
      .get("/api/children", { params: { communityID: communityID } })
      .then(response => {
        setData(response.data);
      });
  }, [communityID]);

  if (data.results) {
    return (
      <Page>
        <h1 className={classes.styledH1}>List of children</h1>
        <DataTable columns={data.columns} data={data} />
      </Page>
    );
  }
  return null;
}
/**
 * This view is triggered via the following urls:
 *   - /username                                           => renders list of countries
 *   - /username/country/:countryID                        => renders list of communities
 *   - /username/country/:countryID/community/:communityID => renders list of children
 */
export default function Dashboard(props) {
  const { countryID, communityID } = useParams();

  //this view is for global admins
  if (!countryID && !communityID) {
    return <CountryList {...props} />;
  }

  //this view is for country admins and global admins
  if (countryID && !communityID) {
    return <CommunityList {...props} countryID={countryID} />;
  }

  //this view is showing all children in a given community
  if (countryID && communityID) {
    return <ChildrenList {...props} communityID={communityID} />;
  }

  return (
    <div style={{ fontSize: 62, backgroundColor: "red" }}>
      Expected either countryID or communityID to be set, and they were not
    </div>
    //error message
  );
}
