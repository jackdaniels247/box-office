import React,{useEffect,useState} from 'react'
import Mainpagelayout from '../components/Mainpagelayout'
import { useShows } from '../misc/CustomHooks'
import {apiGet} from '../misc/config';
import Showgrid from '../components/Shows/Showgrid';

const Star = () =>{

    const [starred] =useShows();

    const[shows,setShows]=useState(null);
    const[isLoading,setIsLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        if(starred&&starred.length>0){
           const promises= starred.map(showId=>apiGet(`/shows/${showId}`));

           Promise.all(promises)
           .then(apiData=>apiData.map(show=>({show})))
           .then(results=>{
               setShows(results);
               setIsLoading(false);
           })
           .catch(err=>{
               setError(err.message);
               setIsLoading(false);
           })

        }
        else{
           setIsLoading(false);
        }
    },[starred])

    return(
        <Mainpagelayout>
            {isLoading&&<div>Shows are still loading...</div> }
            {error && <div>Error occured : {error}</div>}
            {!isLoading&&!error&&!shows&&<div>No Shows were added</div>}
            {!isLoading&&!error&&shows&&<Showgrid data={shows}/>}
        </Mainpagelayout>
    )
} 
   


export default Star
