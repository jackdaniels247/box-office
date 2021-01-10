import React from 'react'
import Actorcard from './Actorcard'
import NOT_FOUND from '../../images/not-found.png';

const Actorgrid = ({data}) => 
    (
        <div>
            {
                data.map(({person})=><Actorcard key={person.id} name={person.name} country={person.country?person.country:null} birthday={person.birthday} deathday={person.deathday} gender={person.gender} image={person.image?person.image.medium:NOT_FOUND} />)
            }
        </div>
    )


export default Actorgrid
