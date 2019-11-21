import React from "react";
import { useParams } from "react-router-dom";
import DataTable from "../components/DataTable";
import Menu from "../components/Menu";
import countriesData from "../data/countriesData";
import communitiesData from "../data/communitiesData";
import childrenData from "../data/childrenData";
import Page from "../components/Page";

function CountryList(props) {
  // const [countries, setCountries] = useState([]);
  // useEffect(() => {
  //   setCountries(countriesData);
  // axios.get("/api/countries").then(results => {
  //   setCountries(results);
  // });
  // }, []);

  // countries data looks like:
  //  [{ name: "Croatia"}, ..., {  name: "Kenya"}]
  return (
    <Page>
      <h1>Welcome</h1>
      <DataTable columns={["name"]} data={countriesData} />
    </Page>
  );
}

function CommunityList(props) {
  // const { countryID } = useParams();

  // const [communities, setCommunities] = useState([]);

  // useEffect(() => {
  //   setCommunities(communitiesData);
  // axios.get(`/api/country/${countryID}`).then(results => {
  //   setCommunities(results);
  // });
  // }, [countryID]);

  return (
    <Page>
      <h1>List of communities</h1>
      <DataTable columns={["name"]} data={communitiesData} />
    </Page>
  );
}

function ChildrenList(props) {
  // const { communityID } = useParams();

  // const [children, setChildren] = useState([]);

  // useEffect(() => {
  //   setChildren(childrenData);
  // axios.get(`/api/country/${countryID}/${communityID}`).then(results => {
  //   setChildren(results);
  // });
  // }, [countryID, communityID]);

  return (
    <Page>
      <h1>List of children</h1>
      <DataTable
        columns={["name", "screenDate", "weight"]}
        data={childrenData}
      />
    </Page>
  );
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
    return <CommunityList {...props} />;
  }

  //this view is showing all children in a given community
  if (countryID && communityID) {
    return <ChildrenList {...props} />;
  }

  return (
    <div style={{ fontSize: 62, backgroundColor: "red" }}>
      Expected either countryID or communityID to be set, and they were not
    </div>
    //error message
  );
}
