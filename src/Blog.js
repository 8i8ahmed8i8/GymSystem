import React, { Component } from 'react';
import Notification from './Notification';
import Collect from './Notification';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

class Blog extends Component {
    render() {
        return (

            <div className="App">
                <nav>
                    <ul>
                        <Link to="/notification">Notification</Link>

                        <Router>
                            <Route path="/notification" exact component={Notification} />
                        </Router>

                    </ul>
                    <ul>
                        <Link to="/collect">Form-Table</Link>
                        <Router>
                            <Route path="/collect" exact component={Collect} />
                        </Router>
                    </ul>
                </nav>

            </div>

        );
    }
}
export default withRouter(Blog) ;
