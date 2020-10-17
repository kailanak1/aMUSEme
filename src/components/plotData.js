const plotData = {
    scenes: {
        'scene-1': { id: 'scene-1', content: 'The protagonsist moves to a creepy house.'},
        'scene-2': { id: 'scene-2', content: 'The protagonist finds a hidden door.'},
        'scene-3': { id: 'scene-3', content: `The protagonist meets her other parents.`},
        'scene-4': { id: 'scene-4', content: `The protagonist goes back to her own world.`},
    },
    columns: {
        'column-1':{
            id: 'column-1',
            title: 'Exposition',
            sceneIds: ['scene-1', 'scene-2', 'scene-3', 'scene-4']
        },
        'column-2':{
            id: 'column-2',
            title: 'Rising Action',
            sceneIds: []
        },
        'column-3':{
            id: 'column-3',
            title: 'Climax',
            sceneIds: []
        },
        'column-4':{
            id: 'column-4',
            title: 'Falling Action',
            sceneIds: []
        },
        'column-5':{
            id: 'column-5',
            title: 'Resolution',
            sceneIds: []
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5']
}

export default plotData