import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

function MenuTwo() {
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
    <div>
      <Link to={"/add/childrecord"}>
        <Button>Add a New Child Record</Button>
      </Link>
      <Link to={"/add/country"}>
        <Button>Add a Country</Button>
      </Link>
      <Link to={"/add/community"}>
        <Button>Add a Community</Button>
      </Link>
    </div>
  );
}

export default MenuTwo;
