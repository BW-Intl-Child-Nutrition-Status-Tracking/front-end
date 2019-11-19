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

function communityData(name) {
  return { name };
}

function childrenData(name, screenDate, weight) {
  return { name, screenDate, weight };
}

//test data

const rows = [
  countryData("Turkey"),
  countryData("Kenya"),
  countryData("Uzbekistan"),
  countryData("Macedonia"),
  countryData("Uruguay")
];

const commRows = [
  communityData("Abc"),
  communityData("Def"),
  communityData("Ghi"),
  communityData("Jkl"),
  communityData("Mno")
];

const childRows = [
  childrenData("Jimmy", "01 / 20 / 2019", "25 kg"),
  childrenData("Susan", "09 / 25 / 2019", "30 kg"),
  childrenData("Tom", "08 / 04 / 2019", "20 kg"),
  childrenData("Jordan", "05 / 22 / 2019", "30 kg"),
  childrenData("Gabe", "07 / 30 / 2019", "24 kg")
];

export default function DataTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="country table">
        <TableHead>
          <TableRow>
            <TableCell>Children</TableCell>
            <TableCell>Last Screening</TableCell>
            <TableCell>Last Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {childRows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.screenDate}</TableCell>
              <TableCell>{row.weight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

//ultimately, rows will be changed to {data} so this becomes dynamic.
//TableCells also must become dynamic- map function on column array?
