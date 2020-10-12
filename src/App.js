import React, { Component } from 'react'
import {
  BrowserRouter as 
  Router,
  Switch,
  Route
} from "react-router-dom";

import CharacterGenerator from './components/CharacterGenerator'
import PlotOrganizer from './components/PlotOrganizer'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
 
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
          component={PlotOrganizer}/>

        </Switch>
        
      </Router>
      </div>
    )
  }
}
export default App