import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import {Switch, Route} from 'react-router-dom'
import FrontPage from './containers/FrontPage'
import StatePage from './containers/StatePage'
import ParkPage from './containers/ParkPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="FrontPage">
        <Header />
        <Switch>
          <Route path='/park/:parkCode' component={ParkPage}/>
          <Route path='/state/:state' component={StatePage}/>
          <Route path='/' render={()=> <FrontPage/> }/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
