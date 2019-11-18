import { useEffect } from "react";

function CountryList() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("/api/countries").then(results => {
      setCountries(results);
    });
  }, []);

  // countries data looks like:
  //  [{ region: "EU", name: "Croatia"}, ..., { "region": "Africa", name: "Kenya"}]

  return <DataTable columns={["region", "name"]} rows={countries} />;
}

function CommunityList(props) {
  const { countryID } = useParams();

  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    axios.get(`/api/country/${countryID}`).then(/* handle this */);
  }, [countryID]);

  return (
    <DataTable
      columns={
        [
          /* */
        ]
      }
      data={communities}
    />
  );
}

function ChildrenList() {}
/**
 * This view is triggered via the following urls:
 *   - /dashboard                                           => renders list of countries
 *   - /dashboard/country/:countryID                        => renders list of communities
 *   - /dashboard/country/:countryID/community/:communityID => renders list of children
 */
export default function Dashboard(props) {
  const { countryID, communityID } = useParams();

  if (!countryID && !communityID) {
    return <CountryList {...props} />;
  }

  if (countryID && !communityID) {
    return <CommunityList {...props} />;
  }

  if (countryID && communityID) {
    return <ChildrenList {...props} />;
  }

  return (
    <div style={{ fontSize: 62, backgroundColor: "red" }}>
      Expected either countryID or communityID to be set, and they were not
    </div>
  );
}
