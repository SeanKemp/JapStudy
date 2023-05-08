import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

// Home page
class Home extends React.Component {
  constructor(props) {
    super(props);
 }

  render() {
    return (
      <div className="background">
        <div className="formStyle container">
          <div className="row space">
            <h1 className="">Welcome to the Japanese Study Website</h1>
            <img className='headerImg' src={require('./img/jap_header.png')} />
            <p>This is a personal website that is not meant to be used by other people</p>
            
          </div>
          <br/>
          <div className="row">
            <label>To get started click on the Study link below</label><br/>
            <Link className="btn btn-md btn-primary" to='/study'>Study</Link>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
