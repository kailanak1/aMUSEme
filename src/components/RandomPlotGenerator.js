import React from 'react'
import randomPlotData from './randomPlotData'
import ChallengeForm from './ChallengeForm'

import styled from 'styled-components'


const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 750px;
    padding: 8px 
`

const Button = styled.button`
    margin: 8px; 
    padding; 8px;

    &:hover {
        color: blue;
        cursor: pointer;
      }
`

class RandomPlotGenerator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            number: 1,
            sentences: [],
            genre: 'fantasy', 
            form: false
        }
    }

    componentDidMount(){
        this.setState(prevState => ({
            sentences: [...prevState.sentences, `${this.genreRelatedSetting(randomPlotData)} ${this.genreRelatedSettingDescription(randomPlotData)}, this story involves ${this.genreRelatedCharacter(randomPlotData)} and ${this.genreRelatedConflict(randomPlotData)}.`],
        }))
    }

    genreRelatedCharacter = (data)=> {
        let charList = data.genres.fantasy.characters
        let number = Math.floor(Math.random() * charList.length)
        return charList[number]
    }
      
    genreRelatedSetting = (data) => {
        let settingList = data.genres.fantasy.setting.places
        let placeNumber =  Math.floor(Math.random() * settingList.length) 
        return settingList[placeNumber]
    }

    genreRelatedSettingDescription = (data) => {
        let settingDesc = ""
        let plightList = data.genres.fantasy.setting.plights
        let plightNum =  Math.floor(Math.random() * plightList.length)
        let plight = Object.keys(plightList[plightNum])
        
        let plightArr = Object.values(plightList[plightNum]).flat()
        let actionNum = plightArr[Math.floor(Math.random() * plightArr.length)]
        let action = data.genres.fantasy.setting.actions[actionNum]
        let stringedPlight = JSON.stringify(plight).replace(/[\[\]']+/g,'').replace(/\"/g, "")
      
        return settingDesc.concat(action, stringedPlight)
    }
    
    genreRelatedConflict = (data) => {
        let conflict = ""
        let conflictList = data.genres.fantasy.conflict
        let num = Math.floor(Math.random() * conflictList.length)
        let conflictType = conflictList[num]
        let conflictWrapper = conflictType[`type${num+1}`]
        let problem = conflictWrapper.problem[Math.floor(Math.random() * conflictWrapper.problem.length)]
        let instigator = conflictWrapper.instigator[Math.floor(Math.random() * conflictWrapper.instigator.length)]
      
        return conflict.concat(problem, instigator)
    }

    onChallengeClick = () => {
        this.setState(prevState => ({
            form: !prevState.form
          }))
        
    }

    renderRandomPlot = () => {
        return this.state.sentences.map((sentence, idx) => 
             <Container key={idx}>
                 {sentence}
                 <Button onClick={this.onChallengeClick}>Challenge</Button>
             </Container>
        )
    }

    reset() {
        this.setState({
            sentences: []
        });
    }

    onClick = () => {
        this.reset()

        for(let i = 0; i < this.state.number; i++){
            const sentence = `${this.genreRelatedSetting(randomPlotData)} ${this.genreRelatedSettingDescription(randomPlotData)}, this story involves ${this.genreRelatedCharacter(randomPlotData)} and ${this.genreRelatedConflict(randomPlotData)}.`
        
        
        this.setState(prevState => ({
            sentences: [...prevState.sentences, sentence],
        }))
        }
    }

    handleNumChange = (event) => {
        this.setState({
            number: event.target.value
        })
    }

    showHint = () => {
        this.setState({
            showHint: !false
        })
    }


    render(){
        return(
            <div>
                <h1>Random Plot Generator</h1>
                <label>Number of ideas
                        <input
                        type="number"
                         value={ this.state.number } 
                         min={1} max={10} 
                         onChange={ (e) => this.handleNumChange(e) }/>
                </label> 
                <Button 
                onClick={this.onClick}>Generate new ideas</Button>
                {this.renderRandomPlot()}
                {this.state.form ? <ChallengeForm/>: null}
            </div>
        )
    }
}

export default RandomPlotGenerator