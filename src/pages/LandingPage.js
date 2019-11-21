import React from "react";
import { Router, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

function LandingPage() {
  const useStyles = makeStyles({
    parentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    root: {
      width: "70%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignSelf: "center"
    },

    headline: {
      margin: "2%",
      paddingTop: "2%",
      alignSelf: "center"
    },

    buttonDiv: {
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "3%"
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.parentContainer}>
      <Paper className={classes.root}>
        <h1 className={classes.headline}>Which User Are You?</h1>
        <div className={classes.buttonDiv}>
          <Link to={"/countries"}>
            <Button variant="contained">Global Admin Login</Button>
          </Link>
          <Link to={`/country/1`}>
            <Button variant="contained">Country Admin Login</Button>
          </Link>
        </div>
      </Paper>
    </div>
  );
}

export default LandingPage;
