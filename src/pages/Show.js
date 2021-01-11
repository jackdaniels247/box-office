/* eslint no-underscore-dangle: "off" */

import React,{useEffect,useReducer} from 'react'
import {useParams} from 'react-router-dom'
import Cast from '../components/Shows/Cast';
import Details from '../components/Shows/Details';
import Season from '../components/Shows/Season';
import ShowMainData from '../components/Shows/ShowMainData';
import {apiGet} from '../misc/config';

const initialState={
    show:null,
    isLoading:true,
    error:null
}

const reducer=(prevState,action)=>{
    switch(action.type){

    case 'FETCH_SUCCESS':{
        return {isLoading:false,error:null,show:action.show};
    }

    case 'FETCH_FAILED':{
        return {...prevState,isLoading:false,error:action.error};
    }
    

        default: return prevState;
    }
}



const Show = () => {
    const {id} = useParams();
    

    const [{isLoading,error,show},dispatch]=useReducer(reducer,initialState);

    useEffect(()=>{

        let isMounted=true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(res=>{
            
                
                    if(isMounted){

                    dispatch({type:'FETCH_SUCCESS',show:res});    
                    
                    }
                
                
            
            
    
    }).catch(err=>{
        if(isMounted){

            dispatch({type:'FETCH_FAILED',error:err.message})
            
        }
        
    });


    return ()=>{
        isMounted=false;
    }
    },[id])
    
    if(isLoading){
        return<div>Data is being loaded.</div>
    }
    if(error){
    return <div>Error occurs : {error}</div>
    }

   
    return (
        <div>
            <ShowMainData 
            image={show.image}
            name={show.name}
            rating={show.rating}
            summary={show.summary}
            tags={show.genres}
            />
            <div>
                <h2>Details</h2>
                <Details 
                status={show.status}
                premiered={show.premiered}
                network={show.network}
                />
            </div>

            <div>
                <h2>Seasons</h2>
                <Season 
                seasons={show._embedded.seasons}
                />
            </div>

            <div>
                <h2>Cast</h2>
                <Cast 
                cast={show._embedded.cast}
                />
            </div>
        </div>
    )


  
}

export default Show
