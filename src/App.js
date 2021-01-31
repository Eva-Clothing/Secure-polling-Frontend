import './App.css';
import Header from './components/header/Header'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import PollMain from './components/PollMain/PollMain';
import DataTable from './components/dataTable/DataTable'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import BarGraph from './components/barGraph/BarGraph';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import LineGraph from './components/LineGraph/LineGraph';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Instructions from './components/Instructions/Instructions';
import HowToVoteRoundedIcon from '@material-ui/icons/HowToVoteRounded';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/configureStore';
import FaceDetection from './components/FaceDetection/FaceDetection';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';


const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

const store = ConfigureStore;

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <div style={{ display: 'flex' }}>
            <Drawer
              style={{ width: "22%" }}
              variant="persistent"
              anchor="left"
              open={true}
              classes={{ paper: classes.drawerPaper }}
            >
              <List>
                <Link to='/' className={classes.link} >
                  <ListItem button>
                    <ListItemIcon>
                      <InfoRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Instructions" />
                  </ListItem>
                </Link>

                <Link to='/vote' className={classes.link} >
                  <ListItem button>
                    <ListItemIcon>
                      <HowToVoteRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Vote" />
                  </ListItem>
                </Link>

                <Link to='/data' className={classes.link} >
                  <ListItem button>
                    <ListItemIcon>
                      <StorageRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Data" />
                  </ListItem>
                </Link>

                <Link to='/barGraph' className={classes.link} >
                  <ListItem button>
                    <ListItemIcon>
                      <BarChartRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="BarData" />
                  </ListItem>
                </Link>

                <Link to='/lineGraph' className={classes.link} >
                  <ListItem button>
                    <ListItemIcon>
                      <TimelineRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="LineData" />
                  </ListItem>
                </Link>

                <Link to='/faceDetection' className={classes.link} >
                  <ListItem button>
                    <ListItemIcon>
                      <SecurityRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="faceDetection" />
                  </ListItem>
                </Link>

              </List>
            </Drawer>
          </div>
          <Switch>
            <Route exact path="/" component={Instructions} />
            <Route exact path="/vote" component={PollMain} />
            <Route path="/data" component={DataTable} />
            <Route path="/barGraph" component={BarGraph} />
            <Route path="/lineGraph" component={LineGraph} />
            <Route path="/faceDetection" component={FaceDetection} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
