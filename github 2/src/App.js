import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import Api from './components/api';
import {AddHeader} from './components/header/Header'
import SearchUsers from './components/users/SearchUsers'
import ShowProfiles from './components/ShowProfiles'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FavouriteUsers from './components/favourites/FavouriteUsers'
import FavouriteRepos from './components/favourites/FavouriteRepos'

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
            <AddHeader/>
            <ShowProfiles />
          </Route>
          <Route path="/favouriteUsers">
            <AddHeader/>
            <FavouriteUsers />
          </Route>
          <Route path="/favouriteRepos">
            <AddHeader/>
            <FavouriteRepos />
          </Route>
          <Route path="/search">
            <AddHeader/>
            <SearchUsers />
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App



