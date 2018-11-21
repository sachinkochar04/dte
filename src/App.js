import React, { Component } from 'react';
import EmployeeDetails from './Components/EmployeeDetails/EmployeeDetails.jsx';
import ManageAvailabilityCodes from './Components/Admin/ManageAvailabilityCodes.jsx';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
class App extends Component {


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ EmployeeDetails } />          
          <Route path="/admin" component={ ManageAvailabilityCodes }/>          
        </Switch>
      </Router>
    );
  }
}

export default App;
