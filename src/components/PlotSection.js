import React from 'react'
import styled from 'styled-components'
import {Droppable, Draggable} from 'react-beautiful-dnd'

const Container = styled.div`
    margin: 8px; 
    border: 1px solid lightgrey;
    background-color: white;
    border-radius: 2px;
    width: 220px;

    display: flex;
    flex-direction: column;
`
const Title = styled.h3`
    padding 8px;
` 

const SceneList = styled.div`
    padding: 8px; 
    flex-grow: 1; 
    min-height: 100px;
`

class SceneList extends React.Component{
    shouldComponentUpdate(nextProps){
        if(nextProps.scenes === this.props.scenes){
            return false
        }
        return true 
    }
    render(){
        return this.props.scenes.map((scene, index) => {
            return <Scene key={scene.id} scene={scene} index={index} />
        });
    }
}

export default class PlotSection extends React.Component{

    render(){
        return(
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {(provided) => (
                <Container
                {...provided.draggableProps}
                ref={provided.innerRef}
                >
                    <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
                    <Droppable droppableId={this.props.column.id} type="task">
                        {(provided, snapshot) => (
                        <SceneList 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            <InnerList scenes={this.props.scenes}/>
                            {provided.placeholder}
                        </SceneList>
                        )}
                    </Droppable>
                </Container>
                )}
            </Draggable>
        )
    }
}