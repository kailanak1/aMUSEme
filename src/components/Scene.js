import React, {Component} from 'react';
import SceneForm from './SceneForm'
import styled from 'styled-components';

import {Draggable} from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey; 
    border-radius: 2px; 
    padding: 8px; 
    margin-bottom: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDragging ? 'lightblue' : 'white')};
`


export default class Scene extends Component{
    render(){
        return(
            <Draggable draggableId={this.props.scene.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                  <SceneForm/>
                    </Container>
                )}
            </Draggable>
        )
    }
}