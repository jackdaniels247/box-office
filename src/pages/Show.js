import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {apiGet} from '../misc/config';

const Show = () => {
    const {id} = useParams();
    const [show,setShow] =useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{

        let isMounted=true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(res=>{
            
                
                    if(isMounted){
                    setShow(res)
                    setIsLoading(false);
                    }
                
                
            
            
    
    }).catch(err=>{
        if(isMounted){
            setError(err.message);
            setIsLoading(false);
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
