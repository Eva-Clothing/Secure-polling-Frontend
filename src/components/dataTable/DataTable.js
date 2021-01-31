import React, { Component } from 'react'
import Header from "../header/Header"
import DrawerTag from "../Drawer"
import './DataTable.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchData } from "../../redux/actionCreators"
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, CardContent } from '@material-ui/core'
import Table from './Table'


const mapStateToProps = (state) => {
    return {
        pollData: state.data.pollData,
        isLoading: state.data.isLoading,
        err: state.data.err
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(fetchData())
})


  
class DataTable extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }
    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        
        if (this.props.isLoading) {
            return (
                <>
                    <div className="center">

                        <CircularProgress color="secondary" />
                    </div>


                </>
            )

        }
        else return (
            <>   <Header />
                <DrawerTag classes= {this.props.classes}/>
                <Card className="app_center">
                    <CardContent color="textSecondary">
                        <h2>Data of person casted the votes</h2>
                        <Table pollData={this.props.pollData ? this.props.pollData : []} />
                    </CardContent>

                </Card>
            </>
        )

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DataTable))
