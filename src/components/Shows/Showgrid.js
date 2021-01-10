import React from 'react'
import Showcard from './Showcard'
import NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../Styled';

const Showgrid = ({data}) => 
    (
        <FlexGrid>
        {
            data.map(({show}) => <Showcard key={show.id} id={show.id} name={show.name} image={show.image?show.image.medium :NOT_FOUND} summary={show.summary}/>)
        }
        </FlexGrid>
    )


export default Showgrid
