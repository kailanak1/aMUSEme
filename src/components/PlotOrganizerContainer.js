import React from 'react'
import '@atlaskit/css-reset'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import plotData from './plotData'
import Column from './column'


const Container = styled.div`
  display: flex;
`

class PlotOrganizerContainer extends React.Component{
  state = plotData

  onDragEnd = result =>{
    const {destination, source, draggableId, type } = result; 

    if(!destination){
      return;
    }

    if(
      destination.droppableId === source.droppableId && 
      destination.index === source.index 
    ){
      return;
    }

    //column reordering 

    if(type==='column'){
      const newColumnOrder = Array.from(this.state.columnOrder); 
      newColumnOrder.splice(source.index, 1); 
      newColumnOrder.splice(destination.index, 0, draggableId)

      const newState = {
        ...this.state, 
        columnOrder: newColumnOrder
      }

      this.setState(newState)
      return;
    }

    //scene reordering

    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    //if moving in one column
    if(start === finish){
      const newSceneIds = Array.from(start.sceneIds)
    newSceneIds.splice(source.index,1)
    newSceneIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...start, 
      sceneIds: newSceneIds,
    };

    const newState = {
      ...this.state, 
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      },
    };

    this.setState(newState)
    //call endpoint here
    return;
    }


    //if moving between multiple columns

    const startSceneIds = Array.from(start.sceneIds)
    startSceneIds.splice(source.index, 1)
    const newStart = {
      ...start, 
      sceneIds: startSceneIds,
    }; 

    const finishSceneIds = Array.from(finish.sceneIds); 
    finishSceneIds.splice(destination.index, 0, draggableId); 
    const newFinish = {
      ...finish, 
      sceneIds: finishSceneIds
    }

    const newState = {
      ...this.state, 
      columns: {
        ...this.state.columns, 
        [newStart.id]: newStart, 
        [newFinish.id]: newFinish 
      }
    }; 

    this.setState(newState)
    //call endpoint here
    
  }

  render(){
    return( 
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {provided => (
                <Container
                {...provided.droppableId}
                ref={provided.innerRef}
                >
                {this.state.columnOrder.map((columnId, index) => {
                  const column = this.state.columns[columnId]
                  const scenes = column.sceneIds.map(sceneId => this.state.scenes[sceneId])
    
                  return <Column key={column.id} column={column} scenes={scenes} index={index}/>
                  })
                }
                {provided.placeholder}
              </Container>
          )}
        </Droppable>
      </DragDropContext>
    )
  }

}

export default PlotOrganizerContainer