import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from '../App';
import AuthRouter from './auth.router';
import UserRouter from './user.router';
import DevicesRouter from './devices.router';
import EmployeesRouter from './employees.router';
import IdentifyRouter from './identify.router';
import PlacesRouter from './places.router';
import NoMatch from '../NoMatch';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/login" component={AuthRouter} />
        <Route path="/user" component={UserRouter} />
        <Route path="/devices" component={DevicesRouter} />
        <Route path="/employees" component={EmployeesRouter} />
        <Route path="/identify" component={IdentifyRouter} />
        <Route path="/places" component={PlacesRouter} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
