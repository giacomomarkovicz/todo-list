import React from "react";

import { Switch, Route } from "react-router-dom";

import Login from "./pages/loginAndRegister/login";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
  </Switch>
);

export default Routes;