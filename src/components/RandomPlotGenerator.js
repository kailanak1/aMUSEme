import React from 'react'
import RandomPlotData from './RandomPlotData'

import styled from 'styled-components'


const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 550px;
`

class RandomPlotGenerator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            number: 1,
            sentences: [],
            genre: 'fantasy'
        }
    }

    componentDidMount(){
        this.setState(prevState => ({
            sentences: [...prevState.sentences, `${this.genreRelatedSetting(RandomPlotData)} ${this.genreRelatedSettingDescription(RandomPlotData)}, this story involves ${this.genreRelatedCharacter(RandomPlotData)} and ${this.genreRelatedConflict(RandomPlotData)}.`],
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
        let plightRef = data.genres.fantasy.setting.plights
        let plight = Object.keys(plightRef[plightNum])
        
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


    renderRandomPlot = () => {
        return  <p>{`${this.genreRelatedSetting(RandomPlotData)} ${this.genreRelatedSettingDescription(RandomPlotData)}, this story involves ${this.genreRelatedCharacter(RandomPlotData)} and ${this.genreRelatedConflict(RandomPlotData)}.`}</p>
    }

    reset() {
        this.setState({
            sentences: []
        });
    }

    onClick = () => {
        this.reset()

        this.setState(prevState => ({
            sentences: [...prevState.sentences, `${this.genreRelatedSetting(RandomPlotData)} ${this.genreRelatedSettingDescription(RandomPlotData)}, this story involves ${this.genreRelatedCharacter(RandomPlotData)} and ${this.genreRelatedConflict(RandomPlotData)}.`],
        }))
    }

    render(){
        return(
            <div>
                <h1>Random Plot Generator</h1>
                <button onClick={this.onClick}>Generate new ideas</button>
                <Container>{this.state.sentences}</Container>
            </div>
        )
    }
}

export default RandomPlotGenerator