
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";


class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    login = () => {
      this.setState({ isAuthenticated: true });
    }
  
    logout = () => {
      this.setState({ isAuthenticated: false });
    }

  render() {
     const isAuthenticated = Auth.isAuthenticated() 
     console.log(isAuthenticated)
  return (
      <Router>
        <div>
          <NavigationBar isLoggedin={isAuthenticated}/>
          <Switch>
            <Route exact path = '/'
              component = {LandingPage}
            />
            <Route exact path = '/register'
              component = {Register}
            />
            <ProtectedRoute exact path = '/Success' 
              component = {Success}
            />
            <Route path="*" component = {() => "404 NOT FOUND"}/>
          </Switch>
        </div>
      </Router>
  );
}
}

export default App;