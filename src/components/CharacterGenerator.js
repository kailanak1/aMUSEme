import React, { Component } from 'react'
import Faker from 'faker'

class CharacterGenerator extends Component{
    constructor(props){
        super(props)
        this.state = {
            characters: []
        }
    }

    componentWillMount() {
      this.handleClick()
      }
    
      reset() {
        this.setState({
            characters: []
        });
    }
    handleClick = () => {
        this.reset()
        for (let i = 0; i < 5; i++) {
            const character = {
              firstName: Faker.name.firstName(), 
              lastName: Faker.name.lastName(), 
              eyeColor: Faker.commerce.color(),
              hairColor: Faker.commerce.color()
            }
          
            
            this.setState(prevState => ({
              characters: [...prevState.characters, character],
            }))
          }
    }

    renderCharacters(character){
        return (
            <div style={{border: 'solid 1px #ee'}}>
                <p>{`${character.firstName}` + ` ` + `${character.lastName}` }</p>
                <ul>
                    <li>{`eye color:` + ` ` +  `${character.eyeColor}`}</li>
                    <li>{`hair color:` + ` ` +  `${character.hairColor}`}</li>
                </ul>
            </div>
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Generate a new set!</button>
                {this.state.characters.map(character => this.renderCharacters(character))}
            </div>
        )
    }
}

export default CharacterGenerator