import React, { useState } from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Faker from 'faker';

const plotSections = [
    {
        id: '1',
      name: 'exposistion',
      desc: Faker.lorem.sentences()
    },
    {
        id: '2',
      name: 'rising action',
      desc: Faker.lorem.sentences()
    },
    {
        id: '3',
      name: 'climax',
      desc: Faker.lorem.sentences()
    },
    {
        id: '4',
      name: 'falling action',
      desc: Faker.lorem.sentences()
    },
    {
        id: '5',
      name: 'resolution',
      desc: Faker.lorem.sentences()
    }
  ]
function PlotOrganizer(){

    const [plot, updateSection] = useState(plotSections);

    function handleOnDragEnd(result) {
        console.log(result)
        if (!result.destination) return;
        const items = Array.from(plot);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateSection(items);
    }

    return (
        <div>
          <header>
            <h1>Plot Organizer</h1>
            </header>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="plotSections">
                    {(provided) => (
                    <ul className="plotSections" {...provided.droppableProps} ref={provided.innerRef}>
                    {plot.map(({name, desc, id}, index) => {
                        return (
                            <Draggable index={index} key={id} draggableId={id} >
                                {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <div className="plotSections">
                                        <b>{name}</b>
                                    </div>
                                    
                                    <p>{desc}</p>
                                    
                                </div>
                        )}
                        </Draggable>
                        );
                    })}
                    {provided.placeholder}
                    </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
      );
}


export default PlotOrganizer