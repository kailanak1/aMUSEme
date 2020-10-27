import React from 'react'

const randomPlotData = {
    genres: {
        'fantasy':
        {
            characters: [
                'elf',
                'witch',
                'monster',
                'prince', 
                'princess', 
                'assassin', 
                'hunter',
                'angel', 
                'demon',
                'warrior',
                'knight',
                'wanderer',
                'wizard', 
                'warlock', 
                'alchemist'
            ],
            setting: {
                places: [
                    'village',
                    'kingdom',
                    'world',
                    'country',
                    'town',
                    'stronghold',
                    'castle',
                    'keep',
                    'trading post',
                    'port city',
                    'border town',
                    'colony',
                    'mining town',
                    'forest',
                    'river',
                    'mountain',
                    'cave',
                    'canyon',
                    'island'
                    
                ], actions: [
                    'beset by',
                    'in the parth of',
                    'consumed by',
                    'on the verge of',
                    'conquered by',
                    'covered in',
                    
                ], plights: [
                    {'beasts':[0, 1, 2, 4, 5]},
                    {'a raging storm':[0, 1, 2]},
                    {'plague':[0, 1, 2, 3]},
                    {'collapse':[0, 3]},
                    {'celebration':[0, 2, 3]},
                    {'a malicious ruler':[0, 1, 4]},
                    {'ice':[0, 1, 2, 5]},
                    {'lava':[0, 1, 2, 5]},
                    {'moss':[0, 1, 2, 5]},
                    {'a foreign army':[0, 1, 4]},
                ]
            },
            conflict: {
               character:{
                   problems: [
                    'death',
                    'ascension',
                    'plotting ',
                    'bordom',
                    'kidnapping ',
                    'coming',
                    'dissapearance',
                    'birth',
                    'betrayal',
                   ],
                   instigator: [
                    'of a king',
                    'of a queen',
                    'of a ruler',
                    'of a diplomat',
                    'of a hidden heir',
                    'of a sage',
                    'of a noble',
                    'of a knight',
                    'of a commoner',
                   ]
               }, 
               quest:{
                   action:[
                    'hunt for',
                    'quest for',
                    'destruction of',
                    'race for',
                    'discovery of',
                    'tornament for',
                    'protection of',
                    'obsession over',
                    'war over',
                   ],
                   item:[
                    'a panacea',
                    'a rare, magical beast',
                    'a mystical weapon',
                    'a magical artifact',
                    'a secret tome',
                    'a map',
                    'a hidden village',
                    'a birthright',
                    'a portal to another world',
                   ]
               }
            },
        },
    }
}

export default randomPlotData