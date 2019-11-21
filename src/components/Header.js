import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function Header(props) {
  const OnLogOut = () => {
    sessionStorage.clear();
    props.history.push("/");
  };

  const useStyles = makeStyles({
    root: {
      width: "90%",
      overflowX: "auto",
      margin: "5%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },

    headline: {
      margin: "2%",
      paddingTop: "2%",
      fontSize: "3rem"
    },

    subtitle: {
      margin: "2%",
      fontSize: "1.5rem"
    },

    button: {
      margin: "2%",
      width: "30%",
      padding: "2%",
      alignItem: "center"
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.headline}>MALO</h1>
        <h3 className={classes.subtitle}>
          International Child Nutrition Status Tracker
        </h3>
      </div>
      <div>
        <Button onClick={OnLogOut} variant="contained">
          LogOut
        </Button>
      </div>
    </div>
  );
}

export default Header;
