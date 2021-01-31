import { Button, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField } from '@material-ui/core'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PollRoundedIcon from '@material-ui/icons/PollRounded';
import { Avatar } from '@material-ui/core';
import Header from "../header/Header"
import DrawerTag from "../Drawer"
import M from 'materialize-css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { makeVote, reset_form } from '../../redux/actionCreators';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const mapStateToProps = (state) => {
    return {
        voteSuccess: state.vote.voteSuccess,
        voteFail: state.vote.voteFail,
        err: state.vote.err
    }
}

const mapDispatchToProps = (dispatch) => ({
    makeVote: (FormData) => dispatch(makeVote(FormData)),
    reset_form: () => dispatch(reset_form())
})



class pollMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            name: "",
            casted_at: "",
            choice: "false"

        };
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    handleClick = () => {
        this.setState({ open: true })
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false })
    };

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })

    }
    submitForm = (e) => {
        e.preventDefault()
        const obj = {
            name: this.state.name,
            casted_at: this.state.casted_at,
            choice: this.state.choice
        }
        this.props.makeVote(obj)
        if (this.props.voteSuccess) {
            M.toast({ html: 'Vote has been caster successfully!!', classes: "#43a047 green darken-1" })
            this.handleClick();
        }
        else {
            M.toast({ html: 'You have already casted the vote', classes: "#c62828 red darken-3" })
        }
        this.setState({ name: "", casted_at: "", choice: false })
        setTimeout(() => {
            this.props.reset_form()
        }, 1000)

    }
    render() {
        const classes = makeStyles((theme) => ({
            root: {
                width: '100%',
                '& > * + *': {
                    marginTop: theme.spacing(2),
                },
            },
        }));
        const paperStyle = { padding: 20, height: '70vh', width: "30%", margin: '20px auto', borderRadius: '30px' }
        const textFieldCSS = { margin: '20px 0px' }
        return (
            <div>
                <Header />
                <DrawerTag classes={this.props.classes} />
                <Grid>
                    <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity="success">
                            This is a success message!
            </Alert>
                    </Snackbar>

                    <form onSubmit={this.submitForm} autoComplete="off">
                        <Paper elevation={10} style={paperStyle}>
                            <Grid align="center">
                                <Avatar style={{ backgroundColor: "#5cd235", height: "50px", width: "50px", }}><PollRoundedIcon style={{ height: "30px", width: "30px" }} /></Avatar>
                                <h2>POLL</h2>
                            </Grid>
                            <TextField
                                required
                                value={this.state.name}
                                name="name"
                                onChange={this.handleInput}
                                style={textFieldCSS}
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                placeholder="Enter Your Name"
                                fullWidth color="primary"
                            />

                            <TextField
                                required
                                style={textFieldCSS}
                                id="datetime-local"
                                name="casted_at"
                                value={this.state.date}
                                onChange={this.handleInput}
                                label="Date of Polling"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                            />
                            <FormControl style={{ display: 'flex', alignItems: "center" }}>
                                <FormLabel className="question" fullWidth component="legend" >Did You liked the LockDown during COVID-19🤔?</FormLabel>
                                <RadioGroup name="choice" value={this.state.choice} onChange={this.handleInput}>
                                    <FormControlLabel style={{ color: "green", fontWeight: 100 }} value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel style={{ color: "red" }} value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                                <Button fullWidth style={{ margin: "0px auto" }} type="submit" variant="outlined" color="primary">
                                    Cast Vote
            </Button>
                            </FormControl>
                        </Paper>
                    </form>
                </Grid>
            </div>


        )

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(pollMain))