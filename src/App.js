import './App.css';
import Header from './components/header/Header'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import PollMain from './components/PollMain/PollMain';
import DataTable from './components/dataTable/DataTable'
import Signin from "./components/User/Signin"
import Signup from "./components/User/Signup"
import DrawerTag from "./components/Drawer"
import { makeStyles } from '@material-ui/core/styles'
import BarGraph from './components/barGraph/BarGraph';
import LineGraph from './components/LineGraph/LineGraph';
import Instructions from './components/Instructions/Instructions';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/configureStore';
import FaceDetection from './components/FaceDetection/FaceDetection';
import PrivateRoute from "./auth/PrivateRoutes"
import Landing from "./components/Landing/Landing"

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
        
          <Switch>
          <Route exact path="/"  component={Landing}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
            <PrivateRoute exact path="/instructions" component={()=>{return <Instructions classes={classes}/>}} />
            <PrivateRoute exact path="/vote" component={()=>{return <PollMain classes={classes}/>}} />
            <PrivateRoute path="/data" component={()=>{return <DataTable classes={classes}/>}} />
            <PrivateRoute path="/barGraph" component={()=>{return <BarGraph classes={classes}/>}} />
            <PrivateRoute path="/lineGraph" component={()=>{return <LineGraph classes={classes}/>}} />
            <PrivateRoute path="/faceDetection" component={FaceDetection} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
