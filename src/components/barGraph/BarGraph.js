import { Card, CardContent } from '@material-ui/core';
import Axios from 'axios';
import Header from "../header/Header"
import DrawerTag from "../Drawer"
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Bar } from 'react-chartjs-2'
import { fetchChart } from '../../redux/actionCreators';
import './BarGraph.css'

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
    title: {
        display: false,
        title: 'Poll for person Liking covid',
        fontSize: 30
    },
    legend: {
        display: true,
        position: 'top'
    }
}


const mapStateToProps = (state) => {
    return {
        chartData: state.bar.chartData,
        isLoading: state.bar.isLoading,
        err: state.bar.err
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchChart: () => dispatch(fetchChart())
})


class BarGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    componentDidMount() {
        this.props.fetchChart()
        
    }
    

    render() {
        
        if (this.props.isLoading) {
            return (<>
                <div className="center">

                    <CircularProgress color="secondary" />
                </div>


            </>)
        }
        const barGraph = {
            labels: ['Yes', 'No', 'total'],
            datasets: [{
                label: 'Voting Result',
                data: [this.props.chartData[0].count, this.props.chartData[1].count, this.props.chartData[0].count + this.props.chartData[1].count],
                backgroundColor: [
                    'rgba(51,255,0,0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(51,255,0,1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        }

        return (
            <>
                <Header />
                <DrawerTag classes= {this.props.classes}/>
                <Card className="barStyle">
                    <CardContent className="header">
                        <h1>Result for the polls </h1>
                    </CardContent>
                    <Bar height="600px" width="800px" data={barGraph} options={options} />
                </Card>
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BarGraph))
