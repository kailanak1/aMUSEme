import React, {Component} from 'react';
import styled from 'styled-components';

import {Draggable} from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey; 
    border-radius: 2px; 
    padding: 8px; 
    margin-bottom: 8px;
    background-color: white;
`


export default class Scene extends React.Component{
    render(){
        return(
            <Draggable draggableId={this.props.scene.id} index={this.props.index}>
                {provided => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                    {this.props.scene.content}
                    </Container>
                )}
            </Draggable>
        )
    }
}