import React from "react";
import childrenData from "../data/childrenData";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Page from "../components/Page";
import LineChart from "../components/LineChart";

export default function Child(props) {
  const { childID } = useParams();
  const child = childrenData.results[childID - 1];

  const useStyles = makeStyles({
    container: {
      margin: "10%"
    },

    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    headline: {
      margin: "2%",
      paddingTop: "2%",
      fontSize: "2rem"
    },
    childName: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      borderBottom: "1px solid grey",
      textAlign: "center"
    },

    infoDiv: {
      display: "flex",
      justifyContent: "space-around"
    },

    info: {
      textAlign: "left",
      padding: "2%"
    },
    chartDiv: {
      alignSelf: "center",
      textAlign: "center"
    },
    button: {
      margin: "2%",
      width: "30%"
    }
  });

  const classes = useStyles();

  return (
    <Page>
      <Paper className={classes.container}>
        <div className={classes.root}>
          <div className={classes.childName}>
            <h5 className={classes.headline}>
              Child Record for: {child.name}{" "}
            </h5>
          </div>
          <div className={classes.infoDiv}>
            <div className={classes.info}>
              <h5>Date of Birth: {child.birthdate}</h5>
              <h5> Gender : {child.gender} </h5>
              <h5>Height(CM): {child.height}</h5>

              <h5>Weight (KG): {child.weight}</h5>

              <h5>
                Location of Screening: {child.screenCommunity},{" "}
                {child.screenCountry}{" "}
              </h5>

              <h5> Last Weigh In: {child.screenDate}</h5>
            </div>
            <div className={classes.info}>
              <h5>Parents' Names: {child.parentsNames}</h5>

              <h5>Phone Number: {child.phoneNumber}</h5>

              <h5>Street Address: {child.address}</h5>

              <h5>Community Name: {child.communityName}</h5>

              <h5>Zipcode: {child.zipcode}</h5>

              <h5>Country: {child.country}</h5>
            </div>
          </div>
        </div>
        <div className={classes.chartDiv}>
          <LineChart />
        </div>
      </Paper>
    </Page>
  );
}
