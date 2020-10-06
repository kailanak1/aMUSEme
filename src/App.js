import React, { Component } from 'react'
import CharacterGenerator from './components/CharacterGenerator'
 
class App extends Component {


 
 
  render() {
    return (
     <div>
       <h1>Generate a character!</h1>
        <CharacterGenerator/>
      </div>
    )
  }
}
 
export default App