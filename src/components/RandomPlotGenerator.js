import React from 'react'
import RandomPlotData from './RandomPlotData'

class RandomPlotGenerator extends React.Component{

    genreRelatedCharacter = (data)=> {
        let charList = data.genres.fantasy.characters
        let number =  Math.floor(Math.random() * charList.length)
        console.log(number)
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
        console.log(actionNum)
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

    render(){
        return(
            <div>
                <h1>Random Plot Generator</h1>
                <p>{`A story that involves ${this.genreRelatedCharacter(RandomPlotData)} in a ${this.genreRelatedSetting(RandomPlotData)} ${this.genreRelatedSettingDescription(RandomPlotData)} and ${this.genreRelatedConflict(RandomPlotData)}.`} </p>
            </div>
        )
    }

}

export default RandomPlotGenerator