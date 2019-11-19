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
  ({ name: "Jimmy", screenDate: "01 / 20 / 2019", weight: "25 kg" },
  { name: "Susan", screenDate: "09 / 25 / 2019", weight: "30 kg" },
  { name: "Tom", screenDate: "08 / 04 / 2019", weight: "20 kg" },
  { name: "Jordan", screenDate: "05 / 22 / 2019", weight: "30 kg" },
  { name: "Gabe", screenDate: "07 / 30 / 2019", weight: "24 kg" })
];

//still need to pull out column names and set to column

export default function DataTable(column, data) {
  const classes = useStyles();

  const countryColumns = ["name"];

  const countryRows = [
    { name: "Turkey" },
    { name: "Kenya" },
    { name: "Uzbekistan" },
    { name: "Macedonia" },
    { name: "Uruguay" }
  ];

  const columns = ["name", "screenDate", "weight"];

  const childData = [
    { name: "Jimmy", screenDate: "01 / 20 / 2019", weight: "25 kg" },
    { name: "Susan", screenDate: "09 / 25 / 2019", weight: "30 kg" },
    { name: "Tom", screenDate: "08 / 04 / 2019", weight: "20 kg" },
    { name: "Jordan", screenDate: "05 / 22 / 2019", weight: "30 kg" },
    { name: "Gabe", screenDate: "07 / 30 / 2019", weight: "24 kg" }
  ];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="data table">
        <TableHead>
          <TableRow>
            {column.map(column => (
              <TableCell>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow>
              {column.map(column => (
                <TableCell>{row[column]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

//ultimately, rows will be changed to {data} so this becomes dynamic.
//TableCells also must become dynamic- map function on column array?

// i need to column.map((c) => <TableCell>{c}<TableCell>) and i need to add another column.map that indexes into column to gain value of row, like r[c]
