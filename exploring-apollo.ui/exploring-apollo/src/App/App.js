import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
// import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connection';

import './App.scss';

firebaseConnection();

// const PublicRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {

    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" exact component={Home} />

            <Route path="/missions" exact component={Missions} />
            <Route path="/timeline/:missionId" exact component={Timeline} />
            <PrivateRoute path="/Profile/:userId" exact component={Profile} />
            <Route path="/event/:eventId" exact component={Event} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
