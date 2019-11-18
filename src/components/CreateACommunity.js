import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function CreateACommunity() {
  const useStyles = makeStyles({
    root: {
      width: "80%",
      overflowX: "auto",
      margin: "5%",
      display: "flex",
      flexDirection: "column"
    },
    form: {
      width: "65%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  });

  const classes = useStyles();

  const [community, setCommunity] = useState("");

  const handleChanges = event => {
    setCommunity({ ...community, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    handleChanges(community);
    setCommunity({ communityName: "" });
  };

  return (
    <Paper className={classes.root}>
      <h1>Create A Community</h1>
      <form className={classes.form} onSubmit={submitForm}>
        <TextField
          required
          label="Community Name"
          type="text"
          name="communityName"
          onChange={handleChanges}
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          Create Community
        </Button>
      </form>
    </Paper>
  );
}
