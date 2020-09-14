import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import Api from './components/api';
import {AddHeader} from './components/header/Header'
import Users from './components/users/Users'
import ShowProfiles from './components/ShowProfiles'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import User from './components/users/User';

function App() {


  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <AddHeader/>
            <Api/>
          </Route>
          <Route path="/profile">
            <ShowProfiles />
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App



