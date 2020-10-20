import React, { Component } from 'react'
import Faker from 'faker'

import styled from 'styled-components'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`
const Title = styled.h3`
    padding: 8px; 

`
const DetailList = styled.div`
    padding: 8px
`


class CharacterGenerator extends Component{
    constructor(props){
        super(props)
        this.state = {
            number: 5,
            characters: [],
            naturalHColor: false,
            naturalEColor: false,
            age: ''
        }
    }

    componentWillMount() {
        for (let i = 0; i < 5; i++) {
            const character = {
              firstName: Faker.name.firstName(), 
              lastName: Faker.name.lastName(), 
              eyeColor: Faker.commerce.color(),
              hairColor: Faker.commerce.color(), 
              age: this.generateRandomAge()
            }
          
            
            this.setState(prevState => ({
              characters: [...prevState.characters, character],
            }))
          }
    }
    
    reset() {
        this.setState({
            characters: []
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.reset()
       
        for (let i = 0; i < this.state.number; i++) {
            const character = {
              firstName: Faker.name.firstName(), 
              lastName: Faker.name.lastName(), 
              eyeColor: this.state.naturalEColor ? this.generateRandomNaturalEyeColor() : Faker.commerce.color(),
              hairColor: this.state.naturalHColor ? this.generateRandomNaturalHairColor() : Faker.commerce.color(), 
              age: this.generateRandomAge()
            }
          
            
            this.setState(prevState => ({
              characters: [...prevState.characters, character],
            }))
          }
    }

    handleHairInputChange(event) {
        if(!this.state.naturalHColor){
            this.setState({
                naturalHColor: event.target.value
            });
        } else {
            this.setState({
                naturalHColor: !event.target.value
            });
        }
      }


      handleEyeInputChange(event) {
        if(!this.state.naturalEColor){
            this.setState({
                naturalEColor: event.target.value
            });
        } else {
            this.setState({
                naturalEColor: !event.target.value
            });
        }
      }
    
    generateRandomAge(){
        const ages = {
            26: 'child', 
            42: 'young adult', 
            92: 'adult', 
            100: 'older adult'
        }
       let number =  Math.floor(Math.random() * 100) + 1 
       for (let keys in ages){
         if (number <= keys){
           return ages[keys]
         }
       }
      }


    generateRandomNaturalHairColor(){

        const naturalHairColors = {
                 40: 'black',
                 75: 'brunette', 
                 95: 'blonde', 
                 100: 'red'
       }
     
       let number =  Math.floor(Math.random() * 100) + 1 
       for (let keys in naturalHairColors){
         if (number <= keys){
           return naturalHairColors[keys]
         }
       }
     }

     generateRandomNaturalEyeColor(){

        const naturalEyeColors = {
                 60: 'brown',
                 93: 'blue', 
                 95: 'hazel', 
                 97: 'amber',
                 99: 'gray', 
                 100: 'violet red'
       }
     
       let number =  Math.floor(Math.random() * 100) + 1 
       let keys;
       for (keys in naturalEyeColors){
         if (number <= keys){
           return naturalEyeColors[keys]
         }
       }
     }

     handleNumChange(event){
        this.setState({
            number: event.target.value
        })
    }

      

    renderCharacters(character){
        return (
            <Container>
                <Title>{`${character.firstName} ${character.lastName}` }</Title>
                <DetailList>
                    <ul>
                        <li>{`eye color: ${character.eyeColor}`}</li>
                        <li>{`hair color: ${character.hairColor}`}</li>
                        <li>{`age: ${character.age}`}</li>
                    </ul>
                </DetailList>
            </Container>
        )
    }

    render(){
        
        return(
            <div>
                <h1>Generate a character!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Number of characters
                        <input
                        type="number"
                         value={ this.state.number } 
                         min={1} max={20} 
                         onChange={ (e) => this.handleNumChange(e) }/>
                    </label>
                    <label>Use natural hair color
                        <input 
                        name="naturalHColor"
                        type="checkbox"
                        checked={this.state.naturalHColor}
                        onChange={(e) => this.handleHairInputChange(e)} />
                    </label>
                    <label>Use natural eye color
                        <input 
                        name="naturalEColor"
                        type="checkbox"
                        checked={this.state.naturalEColor}
                        onChange={(e) => this.handleEyeInputChange(e)} />
                    </label>
                    <input type="submit" value="submit" />
                </form>
                {this.state.characters.map(character => this.renderCharacters(character))}
            </div>
        )
    }
}

export default CharacterGenerator