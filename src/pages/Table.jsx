import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';             

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "#A2B6E7",
  },
  tableCell: {
    fontFamily: "Open Sans, sans-serif", 
    color: "#1E2124",
    fontWeight: 700,
    fontSize: 20,
  },
});

/**
 * allows us to input values into the table
 * @param {*} constructs the construct being evaluated 
 * @param {*} degree whether the construct is needed to be low/med/high 
 * @param {*} recommendation the type of meeting recommended based off of the degree and construct
 * @returns the data row generated from the categories
 */
function createData(constructs, degree, recommendation, description) {
  return { constructs, degree, recommendation, description };
}

const rows = [
  createData('Engagement', <ToggleButtons />, 'Virtual Reality (XR)', 'The degree of interaction needed for a task to be successful'),
  createData('Knowledge', <ToggleButtons />, 'Teleconference', 'What participants know about the meeting topic'),
  createData('Mental Workload', <ToggleButtons />, 'Face-to-Face or Teleconference'),
  createData('Performance', <ToggleButtons />, 'Virtual Reality (XR) or Face-to-Face', 'The ability for a person to successfully perform a task'),
  createData('Rapport', <ToggleButtons />, 'Virtual Reality (XR)', 'A relationship defined by a deep sense of empathy and community'),
  createData('Shared Situational Awareness', <ToggleButtons />, 'Virtual Reality (XR)', 'Multiple people having a common idea about what is happening'),
  createData('Trust', <ToggleButtons />, 'Teleconference', 'The belief that another person is honest and reliable'),
  createData('Usability', <ToggleButtons />, 'Teleconference or Virtual Reality (XR)', 'The ability of a process to be performed simply and effectively'),
];

function DataTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Data Categories</TableCell>
            <TableCell align="right" className={classes.tableCell}>Rate of Success</TableCell>
            <TableCell align="right" className={classes.tableCell}>Your Success Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className={classes.tableCell} description={row.description}>
                {row.constructs}
                <p id='construct' hidden>{row.description}</p>
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.rate}%</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.original}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default DataTable;