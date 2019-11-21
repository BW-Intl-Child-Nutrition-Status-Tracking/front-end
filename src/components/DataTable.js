import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "65%",
    overflowX: "auto",
    margin: "5%"
  },
  table: {
    minWidth: 650
  },
  linkText: {
    textDecoration: "none",
    color: "black"
  }
});

function makeLink({ countryID, communityID }, targetID) {
  if (countryID === undefined) {
    return `/country/${targetID}`;
  }

  if (countryID && communityID === undefined) {
    return `/country/${countryID}/community/${targetID}`;
  }

  if (countryID && communityID) {
    return `/country/${countryID}/community/${communityID}/child/${targetID}`;
  }
}

export default function DataTable({ columns, data }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="data table">
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.results.map(row => (
            <TableRow>
              {columns.map(column => (
                <TableCell>
                  <Link
                    className={classes.linkText}
                    to={makeLink(data, row.id)}
                  >
                    {row[column]}
                  </Link>
                </TableCell>
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
