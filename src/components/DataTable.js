import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "65%",
    overflowX: "auto",
    margin: "5%"
  },
  table: {
    minWidth: 650
  }
});

function countryData(name) {
  return { name };
}

const rows = [
  countryData("Turkey"),
  countryData("Kenya"),
  countryData("Uzbekistan"),
  countryData("Macedonia"),
  countryData("Uruguay")
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="country table">
        <TableHead>
          <TableRow>
            <TableCell>Country Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
