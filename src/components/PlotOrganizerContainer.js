import React from 'react'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import plotData from './plotData'
import Column from './column'

class PlotOrganizerContainer extends React.Component{
  state = plotData

  onDragEnd = (result) =>{
    
  }

  render(){
    return( 
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId]
          const scenes = column.sceneIds.map(sceneId => this.state.scenes[sceneId])

          return <Column key={column.id} column={column} scenes={scenes}/>
          
        })
      }
      </DragDropContext>
    )
  }

}

export default PlotOrganizerContainer