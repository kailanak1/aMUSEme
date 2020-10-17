import React from 'react';



import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';

import plotData from './plotData';
import PlotSection from './PlotSection'

const Container = styled.div`
  display: flex;
  `
  class InnerList extends React.Component {
    //if the reference to the array has changed, allow a render (optimizes performance)
    shouldComponentUpdate(nextProps){
        if(nextProps.tasks === this.props.tasks){
            return false
        }
        return true 
    }
    render(){
        return this.props.tasks.map((task, index) => {
            return <Task key={task.id} task={task} index={index} />
        });
    }
}

 

class PlotOrganizerContainer extends React.Component {
  state = plotData
   
  onDragUpdate = (update, provided) => {
    const message = update.destination
    ? `You have moved the scene to posistion ${update.destination.index + 1}`
    : `You are currently not over a droppable area`; 
    
    provided.announce(message);
  }
  
    onDragEnd = (result, provided) => {
      
  
      const message = result.destination
      ? `You have moved the scene from posistion ${result.source.index + 1} to ${result.destination.index + 1}`
      : `The scene has been retured to its starting posistion of ${result.source.index + 1}`
  
      provided.announce(message);
  
      const { destination, source, draggableId, type } = result;
      if(! destination){ 
        return; 
      }
      if(
        destination.droppableId === source.droppableId && destination.index === source.index
      ){
        return 
      }
      //for reording columns and scenes, must break up the logic
      if(type === 'column'){
        const newColumnOrder=Array.from(this.state.columnOrder)
        newColumnOrder.splice(source.index, 1)
        newColumnOrder.splice(destination.index, 0, draggableId)
  
        const newState = {
          ...this.state, 
          columnOrder: newColumnOrder,
        }
        this.setState(newState)
        return;
      }
      //to move between columns, need to use something other than droppable ids
      const start = this.state.columns[source.droppableId]; 
      const finish = this.state.columns[destination.droppableId]
      if(start === finish){
        //create new object for the things that were changed
      const newsceneIds = Array.from(start.sceneIds);
      //change sceneId from old indext to new index.
      //from index, remove one item
      newsceneIds.splice(source.index, 1)
      newsceneIds.splice(destination.index, 0, draggableId)
      //create new column with same properties, with new targets array
      const newColumn = {
        ...start, 
        sceneIds: newsceneIds, 
  
      }
  
      const newState = {
        ...this.state, 
        columns: {
          ...this.state.columns, 
          [newColumn.id]: newColumn,
        },
      }
  
      this.setState(newState)
      return;
      }
  
      //Moving from one list to another 
      const startsceneIds = Array.from(start.sceneIds)
      startsceneIds.splice(source.index, 1)
      const newStart = {
        ...start, 
        sceneIds: startsceneIds, 
      }
      const finishsceneIds = Array.from(finish.sceneIds); 
      finishsceneIds.splice(destination.index, 0, draggableId)
      const newFinish = {
        ...finish, 
        sceneIds: finishsceneIds,
      }
  
      const newState = {
        ...this.state, 
        columns: {
          ...this.state.columns, 
          [newStart.id]: newStart, 
          [newFinish.id]: newFinish, 
        },
      }
      this.setState(newState)
    }
  
  render(){
    return(
      <DragDropContext
      onDragEnd={this.onDragEnd}>
        <Droppable
        droppableId="main-conntext"
        direction="horizontal"
        type="column">
          {provided => (
          <Container
          {...provided.droppableProps}
          ref={provided.innerRef}
          >
            {this.state.columnOrder.map((columnId, index) => {
              const column = this.state.columns[columnId];

              return( <SceneList 
                key={column.id} 
                column={column} 
                sceneMap={this.state.scenes} 
                index={index}
                />
              );
            })}
            {provided.placeholder}
          </Container>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}


export default PlotOrganizerContainer