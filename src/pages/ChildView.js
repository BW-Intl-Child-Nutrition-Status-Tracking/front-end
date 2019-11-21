import React from "react";
import { connect } from "react-redux";
import childrenData from "../data/childrenData";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Page from "../components/Page";

export default function Child(props) {
  const { childID } = useParams();
  const child = childrenData.results[childID - 1];

  const useStyles = makeStyles({
    root: {
      width: "90%",
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
      flexDirection: "column"
    },
    input: {
      padding: "2%",
      margin: "2%"
    },
    button: {
      margin: "2%",
      width: "30%"
    }
  });

  const classes = useStyles();

  console.log(props);

  return (
    <Page>
      <Paper>
        <div className={classes.root}>
          <div className={classes.childName}>
            <h5 className={classes.headline}>CHILD'S NAME: </h5>
            <p>{child.name}</p>
          </div>
          <div>
            <h5>DATE OF BIRTH:</h5>
            <p>{child.birthdate}</p>
            <h5> GENDER :</h5>
            <p>{child.gender}</p>
            <h5>HEIGHT:</h5>
            <p>{child.height}</p>
            <h5>WEIGHT:</h5>
            <p>{child.weight}</p>
          </div>
          <div>
            <h5> Last Weigh In:</h5>
            <p>{child.screenDate}</p>
            <h5>PARENTS' NAMES:</h5>
            <p>{child.parentsNames}</p>
            <h5>PHONE NUMBER :</h5>
            <p>{child.phoneNumber}</p>
            <h5>Street Address :</h5>
            <p>{child.address}</p>
            <h5>COMMUNITY NAME :</h5>
            <p>{child.communityName}</p>
            <h5>ZIPCODE :</h5>
            <p>{child.zipcode}</p>
            <h5>COUNTRY</h5>
            <p>{child.country}</p>
          </div>
          <div>
            <h5>LOCATION OF SCREENING :</h5>
            <p>{child.screenCommunity}</p>
            <h5>COUNTRY OF SCREENING:</h5>
            <p>{child.screenCountry}</p>
          </div>
        </div>
      </Paper>
    </Page>
  );
}
