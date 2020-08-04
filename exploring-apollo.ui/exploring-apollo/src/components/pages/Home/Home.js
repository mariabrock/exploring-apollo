import React from 'react';
import './Home.scss';
import Auth from '../Auth/Auth';

class Home extends React.Component {

  componentDidMount() {

  }

  render() {
    return (

      <div className="container">
        <h1 className="text-white center">Exploring Apollo</h1>
        <div className="container center-align">
        <Auth />
        </div>
      </div>
    );
  }
}

export default Home;
