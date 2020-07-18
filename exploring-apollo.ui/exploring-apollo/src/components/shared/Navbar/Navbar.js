import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import './Navbar.scss';

class Navbar extends React.Component  {
  componentDidMount() {
    let sidenav = document.querySelector("#mobile-links");
    M.Sidenav.init(sidenav, {});
 }
  
  render() {
    return (

      <div>
        <nav className="nav-wrapper blue-grey darken-3">
          <div className="container">
          <a href="#" className="btn-floating blue-grey lighten-3"><i class="fas fa-rocket"></i></a>
          <a href="#" className="sidenav-trigger" data-target="mobile-links"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">Home</a></li>
              <li><a href="#">Missions</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#" className="btn-floating blue-grey lighten-3"><i class="fas fa-user-astronaut"></i></a></li>
              <li><span className="badge white-text pink new"></span></li>
            </ul>
          </div>
        </nav>

        <div>
          <ul className="sidenav" id="mobile-links">
          <li><a href="#" className="btn-floating blue-grey lighten-3 z-depth-0"><i className="material-icons">person</i></a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Missions</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        
      </div>    
    );
  };
}

export default Navbar;