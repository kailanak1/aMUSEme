import React, { useState } from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Faker from 'faker';

const plotSections = [
    {
      id: 'exposistion',
      desc: Faker.lorem.sentences()
    },
    {
      id: 'rising action',
      desc: Faker.lorem.sentences()
    },
    {
      id: 'climax',
      desc: Faker.lorem.sentences()
    },
    {
      id: 'falling action',
      desc: Faker.lorem.sentences()
    },
    {
      id: 'resolution',
      desc: Faker.lorem.sentences()
    }
  ]
function PlotOrganizer(){

    const [plotSections, updateSection] = useState(plotSections);

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(plotSections);
        const [reorderedItem] = items.splice(result.source, 1);
        items.splice(result.destination, 0, reorderedItem);

        updateSection(items);
    }

    return (
        <div>
          <header>
            <h1>Plot Organizer</h1>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="plotSections">
                    {(provided) => (
                    <ul className="plotSections" {...provided.droppableProps} ref={provided.innerRef}>
                    {plotSections(({id, name, thumb}) => {
                        return (
                            <Draggable key={id} draggableId={id} >
                                {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className="plotSections-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                            </div>
                            <p>
                            { name }
                            </p>
                        </li>
                        )}
                        </Draggable>
                        );
                    })}
                    {provided.placeholder}
                    </ul>
                    )}
                </Droppable>
            </DragDropContext>
          </header>
        </div>
      );
}


export default PlotOrganizer