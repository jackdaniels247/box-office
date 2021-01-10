import React,{useState} from 'react'
import Mainpagelayout from '../components/Mainpagelayout'
import {apiGet} from '../misc/config';

const Home = () => {
     
    const [input, setInput]=useState(''); 
    const[results,setResults]=useState(null);
    const[searchOption,setsearchOption]=useState('shows');

    const isShowsSearch=searchOption==='shows';

    const onSearch=()=>{
// http://api.tvmaze.com/search/shows?q=girls
    
    apiGet(`/search/${searchOption}?q=${input}`)
    .then(result=> setResults(result));


    
    }
    console.log(searchOption);

    const onInputChange=(ev)=>{
        setInput(ev.target.value);
        
    }
    
    const onRadioChange=(ev)=>{
      setsearchOption(ev.target.value);
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
           return(
               results[0].show ?
            
                results.map(item=> <div key={item.show.id}>{item.show.name}</div>)
            
            :
                results.map(item=> <div key={item.person.id}>{item.person.name}</div>)
            
           );
               
           
        }
        return null;
    }


    return (
        <Mainpagelayout>
            <input type='text' onChange={onInputChange} value={input} onKeyDown={onKeyDown} />

            <div>
                <label htmlFor="shows-search">
                    Shows
                    <input id="shows-search" type="radio" onChange={onRadioChange} value="shows" checked={isShowsSearch} />
                </label>

                <label htmlFor="actor-search">
                    Actors
                    <input id="actor-search" type="radio" onChange={onRadioChange} value="people" checked={!isShowsSearch} />
                </label>
            </div>


            <input type='submit' value="Search" onClick={onSearch}  />

            {renderResults()}
        </Mainpagelayout>
    )
}
    


export default Home
