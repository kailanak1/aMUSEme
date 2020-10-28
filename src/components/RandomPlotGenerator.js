import React from 'react'
import RandomPlotData from './RandomPlotData'

class RandomPlotGenerator extends React.Component{

    genreRelatedCharacter = (data)=> {
        let charList = data.genres.fantasy.characters
        let number =  Math.floor(Math.random() * charList.length) + 1
         return charList[number]
        
      }
      
    genreRelatedSetting = (data) => {
        let settingList = data.genres.fantasy.setting.places
        let placeNumber =  Math.floor(Math.random() * settingList.length) + 1
        return settingList[placeNumber]
      }

    render(){
        return(
            <div>
                <h1>Random Plot Generator</h1>
                <p>{`A (genre) story that involves ${genreRelatedCharacter(RandomPlotData)} in a ${genreRelatedSetting(RandomPlotData)} and (genre related problem).`} </p>
            </div>
        )
    }

}

export default RandomPlotGenerator