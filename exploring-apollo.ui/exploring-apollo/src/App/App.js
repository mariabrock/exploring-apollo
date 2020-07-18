import React from 'react';

import './App.scss';
import Home from '../components/pages/Home/Home';
import Navbar from '../components/shared/Navbar/Navbar';
import Missions from '../components/pages/Missions/Missions';

class App extends React.Component {

  render() {

    return (
      <div>
          <Navbar />
          <Home />
          <Missions />

      </div>
    );
  }
}

export default App;
