import React,{useEffect,useReducer} from 'react'
import {useParams} from 'react-router-dom'
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

    console.log('show',show);
    return (
        <div>
            This is show
        </div>
    )


  
}

export default Show
