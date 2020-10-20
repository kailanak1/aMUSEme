import React from 'react'
import '@atlaskit/css-reset'
import plotData from './plotData'
import Column from './column'

class PlotOrganizerContainer extends React.Component{
  state = plotData

  render(){
    return this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId]
      const scenes = column.sceneIds.map(sceneId => this.state.scenes[sceneId])

      return <Column key={column.id} column={column} scenes={scenes}/>
    })
  }

}

export default PlotOrganizerContainer