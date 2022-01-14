import Header from './Header'
import DataTable from './Table'

import { makeStyles, withStyles, Button } from "@material-ui/core"
import React, { useEffect, useState } from 'react';
import QuestionBoxes from './QuestionBoxes';
import Modal from '@mui/material/Modal';
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import { ButtonGroup } from '@mui/material';

const useStyles = makeStyles(() => ({
    container: {
        // backgroundColor: "#545F66", // for testing/sizing
        marginLeft: 5,
        width: "99%",
        height: 570,
        display: "inline-block",
        marginTop: 100,
    },
    content_container: {
        // backgroundColor: "green",  // for testing/sizing
        // flex: "auto",
        margin: 1,
        // width: "49.8%",
        height: "99.8%",
        // display: "inline-block",
        // marginTop: 100,
        scrollbarColor: "blue",
    },
}));

const styles = theme => ({
    whyButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "20px",
        textTransform: "lowercase",
      //   marginLeft: "45%",
        color: "#FFFFEE",
        backgroundColor: "#1E2124",
        margin: "auto",
      },
      mainWords: {
          fontFamily: "Open Sans, sans-serif",
          fontWeight: 700,
          fontSize: "40px",
          margin: "25px",
          textAlign: "center",
          color: "#1E2124",
      },
});

function ResultsTable() {
    const { container, content_container } = useStyles();
    return(
        <div className={container}>
            {/* <div className={content_container} style={{ float: "left", width: "40%", overflowY: "scroll"}}>
                <QuestionBoxes />
            </div> */}
            <div className={content_container} /**style={{ float: "right", width: "59.5%" }}**/>
                <DataTable />
            </div>
        </div>
    );
}

class Results extends React.Component {
    state = {
        isActive: false,
        isOpen: false,
        title: null, 
        description: null
    };
    handleShow = () => {
        this.setState({isActive: true});
    };
    
    handleHide = () => {
        this.setState({isActive: false});
    };
    // state, handleshow and handlehide toggle resultstable, but dont need atm
    // state = {
    //     isActive: false
    // };
    
    // handleShow = () => {
    //     this.setState({isActive: true});
    //   };
    
    // handleHide = () => {
    //     this.setState({isActive: false});
    // };

    openModal = (e, data) => {
        console.log(e);
        this.title = e.target.innerText;
        var str = e.target.innerHTML;
        str.replace("=", '');
        this.description = str.replace(/<[^>]+>/g, '');
        // this.description = substring(e.targt.innerHTML.indexOf('<') + 1);
        this.setState({isOpen: true});
    }
    closeModal = () => {
        this.setState({isOpen: false});
    }
    render () {
        const { classes } = this.props;
        return (
            <>
                <div>
                    <Header />
                    <h1 className={classes.mainWords} style = {{marginTop: "15%"}}>A teleconferencing software is your best option</h1>
                    <br></br>
                    
                    {this.state.isActive ?(
                        // <div>
                        //     <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleHide} className={classes.whyButton}>
                        //         hide data
                        //     </Button></div>
                        //     <div>
                        //          <div className={classes.content_container} style={{ float: "left", width: "40%", overflowY: "scroll"}}>
                        //              <QuestionBoxes />
                        //          </div>
                                    <div className={classes.content_container} style={{ float: "right", width: "59.5%" }} onClick={this.openModal}>
                                        <DataTable/>
                                    </div>
                                // </div>
                            // </div>
                    ) : (
                        <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleShow} className={classes.whyButton}>
                            data
                        </Button></div>
                    )}
                    <Dialog open={this.state.isOpen} onClose={this.closeModal} maxWidth='md' fullWidth={true}>
                        <Typography margin='10%' align='center'>
                            <h2>{this.title}</h2>
                            <p>{this.description}</p>
                        </Typography>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Dialog>
                </div>
                <div style={{textAlign: "center"}}>
                    <ButtonGroup variant="outlined" aria-label="text button group">
                        <Button href="/about">more info</Button>
                        <Button>anonymously contribute my data</Button>
                    </ButtonGroup>
                </div>
          </>
// =======
//             <div>
//                 <Header />
//                 <h1 className={classes.mainWords} style = {{marginTop: "15%"}}>A teleconferencing software is your best option</h1>
//                 {/* <br></br> */}
                
//                 {/* {this.state.isActive ?(
//                     <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleHide} className={classes.whyButton}>
//                         hide data
//                     </Button></div>
//                 ) : (
//                     <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleShow} className={classes.whyButton}>
//                         data
//                     </Button></div>
//                 )}
//                 {this.state.isActive && <ResultsTable />} */}

//                 <ResultsTable />

//                 <br></br><br></br><br></br>
//                 {/* <div style={{textAlign: "center", marginBottom: "5%"}}>
//                     <a href='/about' classname={classes.mainWords} style={{color: "black", fontSize: 20, fontFamily: "Open Sans, sans-serif"}}>
//                         more info
//                     </a>
//                     <br></br>
//                     <a href='/about' classname={classes.mainWords} style={{color: "black", fontSize: 20, fontFamily: "Open Sans, sans-serif"}}>
//                         contribute my data anonymously
//                     </a>
//                 </div> */}
//                 <div style={{textAlign: "center"}}>
//                     <ButtonGroup variant="outlined" aria-label="text button group">
//                         <Button href="/about">more info</Button>
//                         <Button>anonymously contribute my data</Button>
//                     </ButtonGroup>
//                 </div>
//             </div>
// >>>>>>> master
        );
    }
}

export default withStyles(styles)(Results);