import React from 'react';
import './Home.scss';

class Home extends React.Component {

  componentDidMount() {

  }

  render() {
    return (

      <div className="container">
        <h1 className="text-white center">Exploring Apollo</h1>
        <a href="#" className="waves-effect waves-light btn-large blue-grey darken-3" type="submit" name="action">Login</a>

      </div>
    );
  }
}

export default Home;
