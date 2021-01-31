import React, { Component } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { Line } from 'react-chartjs-2'
import './LineGraph.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchFalsePolls, fetchTruePolls } from '../../redux/actionCreators'


const mapStateToProps = (state) => {
    return {
        dateOfPoll: state.line.dateOfPoll,
        isLoading: state.line.isLoading,
        err: state.line.err,
        truePoll: state.line.truePoll,
        falsePoll: state.line.falsePoll,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchFalsePolls: () => dispatch(fetchFalsePolls()),
    fetchTruePolls: () => dispatch(fetchTruePolls())
})

class LineGraph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataChart: {}
        };
    }
    componentDidMount() {
        this.props.fetchFalsePolls()
        this.props.fetchTruePolls()

        var truePoll = []
        var falsePoll = []
        var dateOfPoll = []
        for (let data of this.props.truePoll) {
            dateOfPoll.push(data.date)
            truePoll.push(parseInt(data.counts))
        }
        for (let data of this.props.falsePoll) {
            dateOfPoll.push(data.date)
            falsePoll.push(parseInt(data.counts))
        }
        this.setState({
            dataChart: {
                labels: dateOfPoll,
                datasets: [
                    {   //yes 
                        label: 'Person with Yes',
                        data: truePoll,
                        borderColor: ['rgba(51,255,0,0.2)'],
                        backgroundColor: ['rgba(51,255,0,0.2)'],
                        pointBackgroundColor: 'rgba(51,255,0,0.2)',
                        pointBorderColor: 'rgba(51,255,0,0.2)'
                    },
                    {   //no
                        label: 'Person with No',
                        data: falsePoll,
                        borderColor: ['rgba(255, 99, 132, 0.2)'],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                        pointBorderColor: 'rgba(255, 99, 132, 0.2)'
                    }
                ]

            }
        })
    }
    render() {
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
        }
        if (this.props.isLoading) {
            return (
                <>
                    <div className="center">

                        <CircularProgress color="secondary" />
                    </div>

                </>
            )
        }
        return (
            <>
                <Card className="lineStyle">
                    <CardContent>
                        <h1>Visualization of Result</h1>
                    </CardContent>
                    <Line height="600px" width="800px" data={this.state.dataChart} options={options} />
                </Card>
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LineGraph))
