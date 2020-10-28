import React, { Component } from 'react'
import {
  BrowserRouter as 
  Router,
  Switch,
  Route
} from "react-router-dom";

import CharacterGenerator from './components/CharacterGenerator'
import PlotOrganizerContainer from './components/PlotOrganizerContainer'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import RandomPlotGenerator from './components/RandomPlotGenerator';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <NavBar/>
          </header>
        <Switch>

        <Route
          exact
          path='/'
          component={Landing}/>

          <Route
          exact
          path='/CharacterGenerator'
          component={CharacterGenerator}/>

          <Route
          exact
          path='/PlotOrganizer'
          component={PlotOrganizerContainer}/>

          <Route 
          exact
          path='/RandomPlotGenerator'
          component={RandomPlotGenerator}/>

          <Route
          exact
          path='/Login'
          component={Login}/>

        </Switch>
        
      </Router>
      </div>
    )
  }
}
export default App