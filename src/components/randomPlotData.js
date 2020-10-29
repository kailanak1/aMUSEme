import React from 'react'

const randomPlotData = {
    genres: {
        'fantasy':
        {
            characters: [
                'an elf',
                'a witch',
                'a monster',
                'a prince', 
                'a princess', 
                'an assassin', 
                'a hunter',
                'an apprentence', 
                'a demon',
                'a warrior',
                'a knight',
                'a wanderer',
                'a wizard', 
                'a warlock', 
                'an alchemist'
            ],
            setting: {
                places: [
                    'In a village',
                    'In a kingdom',
                    'In a world',
                    'In a country',
                    'In a town',
                    'In a stronghold',
                    'In a castle',
                    'In a keep',
                    'At a trading post',
                    'In a port city',
                    'At a border town',
                    'In acolony',
                    'In a mining town',
                    'In a forest',
                    'In a river',
                    'On a mountain',
                    'In a cave',
                    'In a canyon',
                    'On an island'
                    
                ], actions: [
                    'beset by',
                    'in the path of',
                    'consumed by',
                    'on the verge of',
                    'conquered by',
                    'covered in',
                    'threatened by'
                    
                ], plights: [
                    {' beasts':[0, 1, 2, 4, 5, 6]},
                    {' a raging storm':[0, 1, 2, 6]},
                    {' a plague':[0, 1, 2, 3, 6]},
                    {' collapse':[0, 3, 6]},
                    {' a celebration':[2, 3, 6]},
                    {' a malicious ruler':[0, 1, 4, 6]},
                    {' ice':[0, 1, 2, 5, 6]},
                    {' lava':[0, 1, 2, 5, 6]},
                    {' moss':[0, 1, 2, 5, 6]},
                    {' an invading army':[0, 1, 4, 6]},
                ]
            },
            conflict: [
               {
                 type1:{
                   problem: [
                    'the death',
                    'the ascension',
                    'the plotting ',
                    'the bordom',
                    'the kidnapping ',
                    'the coming',
                    'the dissapearance',
                    'the birth',
                    'the betrayal',
                   ],
                   instigator: [
                    ' of a king',
                    ' of a queen',
                    ' of a ruler',
                    ' of a diplomat',
                    ' of a hidden heir',
                    ' of a sage',
                    ' of a noble',
                    ' of a knight',
                    ' of a commoner',
                   ]
               },
               },
               { 
               type2:{
                   problem:[
                    'the hunt for',
                    'a quest for',
                    'the destruction of',
                    'a race for',
                    'the discovery of',
                    'a tornament for',
                    'the protection of',
                    'an obsession over',
                    'a war over',
                   ],
                   instigator:[
                    ' a panacea',
                    ' a rare, magical beast',
                    ' a mystical weapon',
                    ' a magical artifact',
                    ' a secret tome',
                    ' a map',
                    ' a hidden village',
                    ' a birthright',
                    ' a portal to another world',
                   ]
               },
               }
            ],
        },
    }
}

export default randomPlotData