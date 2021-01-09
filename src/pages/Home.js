import React,{useState} from 'react'
import Mainpagelayout from '../components/Mainpagelayout'
import {apiGet} from '../misc/config';

const Home = () => {
     
    const [input, setInput]=useState(''); 
    const[results,setResults]=useState(null);

    const onSearch=()=>{
// http://api.tvmaze.com/search/shows?q=girls
    
    apiGet(`/search/shows?q=${input}`)
    .then(result=> setResults(result));


    
    }

    const onInputChange=(ev)=>{
        setInput(ev.target.value);
        
    }
    
    const onKeyDown=(ev)=>{
        if(ev.keyCode===13){
            onSearch();
        }
    }

    const renderResults=()=>{
        if(results && results.length===0){
           return <div>No results</div>
        }
        if(results && results.length>0){
           return <div>
               {
                   results.map(item=> <div key={item.show.id}>{item.show.name}</div>)
               }
           </div>
        }
        return null;
    }


    return (
        <Mainpagelayout>
            <input type='text' onChange={onInputChange} value={input} onKeyDown={onKeyDown} />
            <input type='submit' value="Search" onClick={onSearch}  />

            {renderResults()}
        </Mainpagelayout>
    )
}
    


export default Home
