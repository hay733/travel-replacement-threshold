import Header from './Header'
import DataTable from './Table'

import { makeStyles, withStyles, Button } from "@material-ui/core"
import React from 'react'
import QuestionBoxes from './QuestionBoxes';

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
            <div className={content_container} style={{ float: "left", width: "40%" }}>
                <QuestionBoxes />
            </div>
            <div className={content_container} style={{float: "right", width: "59.5%" }}>
                <DataTable />
            </div>
        </div>
    );
}

class Results extends React.Component {
    state = {
        isActive: false
    };
    
    handleShow = () => {
        this.setState({isActive: true});
      };
    
      handleHide = () => {
        this.setState({isActive: false});
      };

    render () {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <h1 className={classes.mainWords} style = {{marginTop: "15%"}}>Zoom is your best option</h1>
                <br></br>
                {/* <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleHide} className={classes.whyButton}>
                    why?
                </Button></div> */}
                
                
                {this.state.isActive ?(
                    <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleHide} className={classes.whyButton}>
                        why?
                    </Button></div>
                ) : (
                    <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleShow} className={classes.whyButton}>
                        why?
                    </Button></div>
                )}
                {this.state.isActive && <ResultsTable />}
            </div>
        );
    }
}

export default withStyles(styles)(Results);