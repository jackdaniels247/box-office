import React from 'react'
import Showcard from './Showcard'
import NOT_FOUND from '../../images/not-found.png';

const Showgrid = ({data}) => 
    (
        <div>
        {
            data.map(({show}) => <Showcard key={show.id} name={show.name} image={show.image?show.image.medium :NOT_FOUND} summary={show.summary}/>)
        }
        </div>
    )


export default Showgrid
