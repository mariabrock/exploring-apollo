import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.scss';
import Home from '../components/pages/Home/Home';
import Navbar from '../components/shared/Navbar/Navbar';
import Missions from '../components/pages/Missions/Missions';
import Timeline from '../components/pages/Timeline/Timeline';
import ContentPage from '../components/pages/ContentPage/ContentPage';

// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

class App extends React.Component {

  render() {

    return (
      <div>
        <Router>
            <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/missions" exact component={Missions} />
            <Route path="/timeline/:missionId" exact component={Timeline} />
            <Route path="/content/:eventId" exact component={ContentPage} />

            {/* <Route path="/about" exact component={About} /> */}
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
