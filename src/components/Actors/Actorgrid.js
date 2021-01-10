import React from 'react'
import Actorcard from './Actorcard'
import NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../Styled';

const Actorgrid = ({data}) => 
    (
        <FlexGrid>
            {
                data.map(({person})=><Actorcard key={person.id} name={person.name} country={person.country?person.country.name:null} birthday={person.birthday} deathday={person.deathday} gender={person.gender} image={person.image?person.image.medium:NOT_FOUND} />)
            }
        </FlexGrid>
    )


export default Actorgrid
