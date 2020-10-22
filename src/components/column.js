import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Scene from './scene'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`
const Title = styled.h3`
    padding: 8px; 

`
const SceneList = styled.div`
    padding: 8px
`

export default class Column extends React.Component{
    render(){
        console.log(this.props)
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {provided => (
                        <SceneList
                        ref={provided.innerRef }
                        {...provided.droppableProps}
                        >
                        {this.props.scenes.map((scene, index) => <Scene key={scene.id} scene={scene} index={index}/>)}
                        {provided.placeholder}
                    </SceneList>
                    )}
                </Droppable>
            </Container>
        )
    }
}