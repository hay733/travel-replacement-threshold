import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';      
import { Button, ButtonGroup } from '@material-ui/core';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { CallReceivedSharp } from '@material-ui/icons';
import { mobileStepperClasses } from '@mui/material';

class ResultsTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    "Construct": "Knowledge",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Mental Workload",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Usability",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Rapport",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Trust",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Engagement",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Copresence",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Shared Situational Awareness",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
            ]
        };
    }
 
    updateRecVR(i){
        let prevState = [...this.state.data];
        prevState[i].Recommendation = "Virtual Reality";
        this.setState({
            todos: prevState,
        });
    };

    updateRecF2F(i){
        let prevState = [...this.state.data];
        prevState[i].Recommendation = "Face-to-Face";
        this.setState({
            todos: prevState,
        });
    };

    updateRecTel(i){
        let prevState = [...this.state.data];
        prevState[i].Recommendation = "Teleconference";
        this.setState({
            todos: prevState,
        });
    };

    CalcAv() {
        var i, vr, f2f, tel;
        tel = vr = f2f = 0;
        let prevState = [...this.state.data];
        for (i = 0; i < 8; i++) {
            if (prevState[i].Recommendation == "Teleconference") tel++;
            if (prevState[i].Recommendation == "Face-to-Face") f2f++;
            if (prevState[i].Recommendation == "Virtual Reality") vr++;
        }
        if (tel >= vr && tel >= f2f) return "Teleconference";
        if (vr >= tel && vr >= f2f) return "Virtual Reality";
        return "Face-to-Face";
    }

    tableTable() {
        // const [alignment, setAlignment] = React.useState('high');

        // const handleAlignment = (event, newAlignment) => {
        //     setAlignment(newAlignment);
        // };
        const useStyles = makeStyles({
            tableCell: {
                fontFamily: "Open Sans, sans-serif", 
                color: "#1E2124",
                fontWeight: 700,
                fontSize: 19,
                borderColor: "#1E2124",
                borderBottomWidth: "1px",
              },
        });
        return this.state.data.map((data, index) => {
            const { Construct, Recommendation } = data
            return (
                    <TableBody>
                        <TableRow>
                            <TableCell align="middle" style={{fontFamily: "Open Sans, sans-serif", color: "#1E2124", backgroundColor: "#A2B6E7",
                                fontWeight: 700, fontSize: 19, borderColor: "#1E2124", borderBottomWidth: "1px"}}>{Construct}</TableCell>
                            <TableCell align="middle" style={{fontFamily: "Open Sans, sans-serif", color: "#1E2124", backgroundColor: "#A2B6E7",
                                fontWeight: 700, fontSize: 19, borderColor: "#1E2124", borderBottomWidth: "1px"}} key = {Recommendation}>
                                <ButtonGroup >
                                    <Button style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: "15px", color: "#FFFFEE", 
                                    backgroundColor: "#2E3338", textTransform: "lowercase"}} onClick={() => this.updateRecTel(index)}>low</Button>
                                    <Button style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: "15px", color: "#FFFFEE", 
                                    backgroundColor: "#2E3338", textTransform: "lowercase"}} onClick={() => this.updateRecVR(index)}>med</Button>
                                    <Button style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: "15px", color: "#FFFFEE", 
                                    backgroundColor: "#2E3338", textTransform: "lowercase"}} onClick={() => this.updateRecF2F(index)}>high</Button>
                                </ButtonGroup>
                            </TableCell>
                            <TableCell align="middle" style={{fontFamily: "Open Sans, sans-serif", color: "#1E2124", backgroundColor: "#A2B6E7",
                                fontWeight: 700, fontSize: 19, borderColor: "#1E2124", borderBottomWidth: "1px"}}>{Recommendation}</TableCell>
                        </TableRow>
                    </TableBody>
            )
        }) 
    }

    tableHeader() {
        return (
            <TableHead>
                <TableRow>              
                    <TableCell style={{fontFamily: "Open Sans, sans-serif", color: "white", backgroundColor: "#2E3338",
                        fontWeight: 710, fontSize: 23, borderColor: "#1E2124", borderBottomWidth: "1px"}}>Construct</TableCell>
                    <TableCell style={{fontFamily: "Open Sans, sans-serif", color: "white", backgroundColor: "#2E3338",
                        fontWeight: 710, fontSize: 23, borderColor: "#1E2124", borderBottomWidth: "1px"}}>Degree Required</TableCell>
                    <TableCell style={{fontFamily: "Open Sans, sans-serif", color: "white", backgroundColor: "#2E3338",
                        fontWeight: 710, fontSize: 23, borderColor: "#1E2124", borderBottomWidth: "1px"}}>Recommendation</TableCell>
                </TableRow>
            </TableHead>
        )
    }
  
    render() {
        return (
            <div >
                <TableContainer component={Paper}>
                    <Table id='data' aria-label="simple table">
                        {this.tableHeader()}
                        {this.tableTable()}
                        <TableRow>
                            <TableCell rowSpan={8} style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: 22, borderColor: "#1E2124",
                                borderBottomWidth: "1px", color: "white", backgroundColor: "#2E3338",}}/>
                            <TableCell colSpan={1} style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: 22, borderColor: "#1E2124",
                                borderBottomWidth: "1px", color: "white", backgroundColor: "#2E3338",}}>We Recommend:</TableCell>
                            <TableCell align="middle" style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: 22, borderColor: "#1E2124",
                                borderBottomWidth: "1px", color: "white", backgroundColor: "#2E3338",}}>{this.CalcAv()}</TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
                
            </div>
         )
    }
}

export default ResultsTable;
