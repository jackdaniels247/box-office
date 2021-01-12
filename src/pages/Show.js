/* eslint no-underscore-dangle: "off" */

import React from 'react'
import {useParams} from 'react-router-dom'
import Cast from '../components/Shows/Cast';
import Details from '../components/Shows/Details';
import Season from '../components/Shows/Season';
import ShowMainData from '../components/Shows/ShowMainData';
import { useShow } from '../misc/CustomHooks';
import {ShowPageWrapper,InfoBlock} from './Show.styled';


const Show = () => {
    const {id} = useParams();
    

    const [{isLoading,error,show}]=useShow(id);

   
    
    if(isLoading){
        return<div>Data is being loaded.</div>
    }
    if(error){
    return <div>Error occurs : {error}</div>
    }

   
    return (
        <ShowPageWrapper>
            <ShowMainData 
            image={show.image}
            name={show.name}
            rating={show.rating}
            summary={show.summary}
            tags={show.genres}
            />
            <InfoBlock>
                <h2>Details</h2>
                <Details 
                status={show.status}
                premiered={show.premiered}
                network={show.network}
                />
            </InfoBlock>

            <InfoBlock>
                <h2>Seasons</h2>
                <Season 
                seasons={show._embedded.seasons}
                />
            </InfoBlock>

            <InfoBlock>
                <h2>Cast</h2>
                <Cast 
                cast={show._embedded.cast}
                />
            </InfoBlock>
        </ShowPageWrapper>
    )


  
}

export default Show
