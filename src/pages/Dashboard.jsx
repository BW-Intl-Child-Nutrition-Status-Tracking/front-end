import { useEffect } from "react";
import DataTable from "../components/DataTable";

function CountryList() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("/api/countries").then(results => {
      setCountries(results);
    });
  }, []);

  // countries data looks like:
  //  [{ name: "Croatia"}, ..., {  name: "Kenya"}]

  return <DataTable columns={["name"]} data={countries} />;
}

function CommunityList(props) {
  const { countryID } = useParams();

  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    axios.get(`/api/country/${countryID}`).then(results => {
      setCommunities(results);
    });
  }, [countryID]);

  return (
    <h1>{countryID}</h1>
    <DataTable
      columns={
        [
          /* */
        ]
      }
      data={communities}
    />
  )
}

function ChildrenList(props) {
  const { communityID } = useParams();

  const [children, setChildren] = useState([]);

  useEffect(() => {
    axios.get(`/api/country/${countryID}/${communityID}`).then(results => {
      setChildren(results);
    });
  }, [countryID, communityID]);

  return (
    <h1>{communityID}</h1>
    <DataTable
      columns={
        [
          /* */
        ]
      }
      data={children}
    />
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
  );
}
