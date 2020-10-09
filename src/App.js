import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import CharacterGenerator from './components/CharacterGenerator'
import PlotOrganizer from './components/PlotOrganizer'
import NavBar from './components/NavBar'
 
class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <CharacterGenerator/>
        <PlotOrganizer/>
      </Router>
    )
  }
}
export default App