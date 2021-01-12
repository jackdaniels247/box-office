import React from 'react'
import Showcard from './Showcard'
import NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../Styled';
import { useShows } from '../../misc/CustomHooks';

const Showgrid = ({data}) => {

    const [starredState,dispatchStarred]=useShows();

    


    return(
        <FlexGrid>
        {
            data.map(({show}) => {
                const isStarred=starredState.includes(show.id); 

                const onStarClick=()=>{
                    if(isStarred){
                        dispatchStarred({type:'REMOVE',showId:show.id});
                    }
                    else{
                        dispatchStarred({type:'ADD',showId:show.id});
                    }
                }

                return(
                    <Showcard 
                    key={show.id} 
                    id={show.id} 
                    name={show.name} 
                    image={show.image?show.image.medium :NOT_FOUND} 
                    summary={show.summary}
                    onStarClick={onStarClick}
                    isStarred={isStarred}
                    />)
            }
               
                    )
            
            
            
        }
        </FlexGrid>
    )
}
    


export default Showgrid
