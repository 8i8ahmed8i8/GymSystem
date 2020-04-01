import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Notifcation from "./Notification";
import Collect from "./Collect";


class myRouter extends Component {
  

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/notification" component={Notifcation} />
          <Route path="/collect" component={Collect} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default myRouter;
