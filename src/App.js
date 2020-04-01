import React, { Component } from 'react';
import './App.css';
import Notifcation from './Notification';
import Collect from './Collect';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";





class App extends Component {
  

  render() {
    return (
      <div className="App">
       
        <div>
          <Router>
            <div>
              <nav className="nav">
                <ul >
                  <li>
                    <Link to={"/home"} className="nav-link">
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/collect"} className="nav-link">
                    register
                    </Link>
                  </li>
                  <li>
                    <Link to={"/notification"} className="nav-link">
                      Notification
                    </Link>
                  </li>
                </ul>
              </nav>
              
              <Switch>
                 <Route exact path='/home' component={Home} /> 
                <Route  path="/collect" component={Collect} />
                <Route path="/notification" component={Notifcation} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
