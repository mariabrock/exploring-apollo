import React from 'react';

import './App.scss';
import Home from '../components/pages/Home/Home';
import Navbar from '../components/shared/Navbar/Navbar';

class App extends React.Component {

  render() {

    return (
      <div>
          <Navbar />
          <Home />

      </div>
    );
  }
}

export default App;
