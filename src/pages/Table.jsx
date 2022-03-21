import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';      

import ToggleButtons from './ToggleButtons'  
import Results from './Results';

/**
 * sets the css styles for the different components
 */
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "#A2B6E7",
  },
  headerCell: {
    fontFamily: "Open Sans, sans-serif", 
    color: "white",
    backgroundColor: "#2E3338",
    fontWeight: 710,
    fontSize: 23,
    borderColor: "#1E2124",
    borderBottomWidth: "1px",
  },
  tableCell: {
    fontFamily: "Open Sans, sans-serif", 
    color: "#1E2124",
    fontWeight: 700,
    fontSize: 19,
    borderColor: "#1E2124",
    borderBottomWidth: "1px",
  },

});

/**
 * allows us to input values into the table
 * @param {*} constructs the construct being evaluated 
 * @param {*} degree whether the construct is needed to be low/med/high 
 * @param {*} recommendation the type of meeting recommended based off of the degree and construct
 * @returns the data row generated from the categories
 */
function createData(constructs, degree, recommendation, definition, description) {
  return { constructs, degree, recommendation, definition, description };
}

/**
 * 
 * @param {*} items 
 * @returns 
 */
function averageResults(items) {
  
  return result;
}

/**
 * creates the table data as constant values
 */
const rows = [
  createData('Engagement', <ToggleButtons />, 'Virtual Reality (XR)', 'The degree of interaction needed for a task to be successful', 'Engagement Description'),
  createData('Knowledge', <ToggleButtons />, 'Teleconference', 'What participants know about the meeting topic', 'Knowledge Description'),
  createData('Mental Workload', <ToggleButtons />, 'Face-to-Face or Teleconference', 'The effort or cost incurred by the human operator to perform the task using the provided tools', 'Mental Workload Description'),
  createData('Performance', <ToggleButtons />, 'Virtual Reality (XR) or Face-to-Face', 'The ability for a person to successfully perform a task', 'Performance Description'),
  createData('Rapport', <ToggleButtons />, 'Virtual Reality (XR)', 'A relationship defined by a deep sense of empathy and community', 'Rapport Description'),
  createData('Shared Situational Awareness', <ToggleButtons />, 'Virtual Reality (XR)', 'Multiple people having a common idea about what is happening', 'SSA Description'),
  createData('Trust', <ToggleButtons />, 'Teleconference', 'The belief that another person is honest and reliable', 'Trust Description'),
  createData('Usability', <ToggleButtons />, 'Teleconference or Virtual Reality (XR)', 'The ability of a process to be performed simply and effectively', 'Usability Description'),
];

//determine the most often used answer
const avResult = averageResults(rows);

/**
 * @returns remders the rows and columns for all the data
 */
function DataTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headerCell}>Constructs</TableCell>
            <TableCell align="right" className={classes.headerCell}>Degree Required</TableCell>
            <TableCell align="right" className={classes.headerCell}>Recommendation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className={classes.tableCell} description={row.definition}>
                {row.constructs}
                <br></br>
                <br></br>
                {row.definition}
                <p hidden='true' class='description'>{row.description}</p>
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.degree}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.recommendation}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={8} className={classes.tableCell}/>
            <TableCell colSpan={1} className={classes.tableCell}>Recommendation</TableCell>
            <TableCell align="right">{avResult}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default DataTable;