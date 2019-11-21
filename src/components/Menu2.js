import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

function Menu2() {
  const useStyles = makeStyles({
    menuDiv: {
      display: "flex",
      justifyContent: "space-around"
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.menuDiv}>
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

export default Menu2;
