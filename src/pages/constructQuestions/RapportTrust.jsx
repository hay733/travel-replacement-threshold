import React from 'react'
import { makeStyles, Typography, Button } from "@material-ui/core"
import { styled } from '@mui/material/styles';
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'   
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@mui/material/Divider';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

/**
 * constant that sets the styling for different types of text
 */
const useStyles = makeStyles(() => ({
    questionWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "30px",
        // textTransform: "lowercase",
        // margin: "25px",
        // textAlign: "center",
        color: "#1E2124",
    },
    answerWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "25px",
        // textTransform: "lowercase",
        // margin: "25px",
        // textAlign: "center",
        color: "#1E2124",
    },

    divWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "23px",
        // textTransform: "lowercase",
        // margin: "25px",
        // textAlign: "center",
        color: "#1E2124",
    },
    
    warningWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 500,
        fontSize: "20px",
        letterSpacing: 0,
        // textTransform: "lowercase",
        // margin: "25px",
        // textAlign: "center",
        color: "#1E2124",
    },
}));

/**
 * sets styling for the dividers
 */
const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  /**
   * sets the styling for the question boxes
   */
const themeStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      fontFamily: "Open Sans, sans-serif",
    },
    formControl: {
      margin: theme.spacing(3),
    },
    label: {
        fontFamily: "Open Sans, sans-serif",
        // fontWeight: 700,
        fontSize: "60px",
        // // textTransform: "lowercase",
        // // margin: "25px",
        // // textAlign: "center",
        // color: "#1E2124",
    }
}));


// function SetData(questions, ){
//     if (questions.state.share) 
//     return null;
// }

/**
 * @returns all the rendered questions and answers + dividers
 */
function RapportTrustQuestions() {
    //text styles call
    const { questionWords, answerWords,divWords, warningWords } = useStyles();
    //questions style call
    const classes = themeStyles();
    //creates al the default values for the answers
    const [state, setState] = React.useState({
        q1a1: false, q1a2: false, q1a3: false, q1a4: false, // How well do you know the other person(s)? 
        q2a1: false, q2a2: false, q2a3: false, q2a4: false, // How much experience do you have working with this person(s) in the past? 
        q3a1: false, q3a2: false, q3a3: false, q3a4: false, // How would you describe previous interactions with this person(s)?  
        q4a1: false, q4a2: false, q4a3: false, q4a4: false, // How effective is your communication with others? 
        q5a1: false, q5a2: false, q5a3: false, // To what extent do you believe that the the other meeting participant(s) are competent when it comes to the subject of the meeting? 
        q6a1: false, q6a2: false, q6a3: false, // To what extent do you believe that the other meeting participant(s) are competent in general? 
        q7a1: false, q7a2: false, q7a3: false, // To what extent do you believe that the other meeting participant(s) are reliable?  
        q8a1: false, q8a2: false, q8a3: false, // To what extent do you believe that the other meeting participant(s) have your best interests at heart? 
        q9a1: false, q9a2: false, q9a3: false, // To what extent do you believe that the other meeting participant(s) would help you if you had work-related problems? 
        q10a1: false, q10a2: false, q10a3: false, // To what extent do you believe that the other meeting participant(s) would help you with life-related problems? 
        q11a1: false, q11a2: false, q11a3: false, // To what extent do you believe that the participant(s) will feel free to share ideas and concerns? 
        isOpen: false, title: null
    });
    //handles question box toggle changes
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    //sets the questions
    const { 
        q1a1, q1a2, q1a3, q1a4, // How well do you know the other person(s)? 
        q2a1, q2a2, q2a3, q2a4, // How much experience do you have working with this person(s) in the past? 
        q3a1, q3a2, q3a3, q3a4, // How would you describe previous interactions with this person(s)?  
        q4a1, q4a2, q4a3, q4a4, // How effective is your communication with others? 
        q5a1, q5a2, q5a3, // To what extent do you believe that the the other meeting participant(s) are competent when it comes to the subject of the meeting? 
        q6a1, q6a2, q6a3, // To what extent do you believe that the other meeting participant(s) are competent in general? 
        q7a1, q7a2, q7a3, // To what extent do you believe that the other meeting participant(s) are reliable? 
        q8a1, q8a2, q8a3, // To what extent do you believe that the other meeting participant(s) have your best interests at heart? 
        q9a1, q9a2, q9a3, // To what extent do you believe that the other meeting participant(s) would help you if you had work-related problems? 
        q10a1, q10a2, q10a3, // To what extent do you believe that the other meeting participant(s) would help you with life-related problems? 
        q11a1, q11a2, q11a3, // To what extent do you believe that the participant(s) will feel free to share ideas and concerns? 
    } = state;
    /**
     * Opens the popup of the corresponding table cell
     * NOTE: does not open popup when a "degree" button is clicked
     * @param {*} e 
     */
    const openModal = (e) => {
        state.title = e.target.outerText; 
        setState({isOpen: true});
    }
    /**
     * Closes the popup 
     */
    const closeModal = () => {
        setState({isOpen: false});
    }
    return(
        <Root>
        <div>

            <Divider textAlign="right" className={divWords}>rapport</Divider>
            {/* How well do you know the other person(s)?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How well do you know the other person(s)? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q1a1} onChange={handleChange} name="q1a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>not at all</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a2} onChange={handleChange} name="q1a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>a little</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a3} onChange={handleChange} name="q1a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>moderately</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a4} onChange={handleChange} name="q1a4" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>very well</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* How much experience do you have working with this person(s) in the past?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How much experience do you have working with this person(s) in the past?  </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q2a1} onChange={handleChange} name="q2a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>none</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q2a2} onChange={handleChange} name="q2a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>low experience</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q2a3} onChange={handleChange} name="q2a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>moderate experience</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q2a4} onChange={handleChange} name="q2a4" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>high experience</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* How would you describe previous interactions with this person(s)?   */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How would you describe previous interactions with this person(s)?  </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q3a1} onChange={handleChange} name="q3a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>no previous interactions</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q3a2} onChange={handleChange} name="q3a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>positively</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q3a3} onChange={handleChange} name="q3a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>neutral</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q3a4} onChange={handleChange} name="q3a4" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>negatively</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* How effective is your communication with others?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How effective is your communication with others? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q4a1} onChange={handleChange} name="q4a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>not effective at all</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q4a2} onChange={handleChange} name="q4a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>slightly effective</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q4a3} onChange={handleChange} name="q4a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>moderately effective</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q4a4} onChange={handleChange} name="q4a4" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>highly effective</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            
            <Divider textAlign="right" className={divWords} onClick={openModal}>trust</Divider>
            {/* To what extent do you believe that the the other meeting participant(s) are competent when it comes to the subject of the meeting?   */}
            <div className={classes.root}>
                <br></br><br></br><br></br><br></br><br></br>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the the other meeting participant(s) are competent when it comes to the subject of the meeting? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q5a1} onChange={handleChange} name="q5a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q5a2} onChange={handleChange} name="q5a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q5a3} onChange={handleChange} name="q5a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* To what extent do you believe that the other meeting participant(s) are competent in general?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the other meeting participant(s) are competent in general? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q6a1} onChange={handleChange} name="q6a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q6a2} onChange={handleChange} name="q6a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q6a3} onChange={handleChange} name="q6a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* To what extent do you believe that the other meeting participant(s) are reliable?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the other meeting participant(s) are reliable? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q7a1} onChange={handleChange} name="q7a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q7a2} onChange={handleChange} name="q7a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q7a3} onChange={handleChange} name="q7a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* To what extent do you believe that the other meeting participant(s) have your best interests at heart?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the other meeting participant(s) have your best interests at heart? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q8a1} onChange={handleChange} name="q8a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q8a2} onChange={handleChange} name="q8a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q8a3} onChange={handleChange} name="q8a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* To what extent do you believe that the other meeting participant(s) would help you if you had work-related problems?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the other meeting participant(s) would help you if you had work-related problems? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q9a1} onChange={handleChange} name="q9a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q9a2} onChange={handleChange} name="q9a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q9a3} onChange={handleChange} name="q9a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords} onClick={openModal}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* To what extent do you believe that the other meeting participant(s) would help you with life-related problems?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the other meeting participant(s) would help you with life-related problems? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q10a1} onChange={handleChange} name="q10a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q10a2} onChange={handleChange} name="q10a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q10a3} onChange={handleChange} name="q10a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* To what extent do you believe that the participant(s) will feel free to share ideas and concerns?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the participant(s) will feel free to share ideas and concerns? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q11a1} onChange={handleChange} name="q11a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q11a2} onChange={handleChange} name="q11a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q11a3} onChange={handleChange} name="q11a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
        </div>
        {/* generates the construct def popup */}
        <Dialog open={state.isOpen} onClose={closeModal} maxWidth='md' fullWidth={true}>
            <DialogTitle margin='10%' align='center'>{state.title}</DialogTitle>
            <DialogContent>
                <DialogContentText margin='10%' align='center'>
                </DialogContentText>
                </DialogContent>
                <Button onClick={closeModal}>Close</Button>
        </Dialog>
        </Root>
    );
}

export default RapportTrustQuestions;