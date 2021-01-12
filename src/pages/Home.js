import React,{useState} from 'react'
import Actorgrid from '../components/Actors/Actorgrid';
import CustomRadio from '../components/CustomRadio';
import Mainpagelayout from '../components/Mainpagelayout'
import Showgrid from '../components/Shows/Showgrid';
import {apiGet} from '../misc/config';
import { useLastQuery } from '../misc/CustomHooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const Home = () => {
     
    const [input, setInput]=useLastQuery(); 
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
            
                <Showgrid data={results}/>
            
            :
                <Actorgrid data={results}/>
            
           );
               
           
        }
        return null;
    }


    return (
        <Mainpagelayout>
            <SearchInput type='text' onChange={onInputChange} value={input} onKeyDown={onKeyDown} placeholder='Search for Something...' />

            <RadioInputsWrapper>
                <div>
                <CustomRadio 
                label='Shows' 
                id="shows-search"  
                onChange={onRadioChange} 
                value="shows" 
                checked={isShowsSearch}
                />
                </div>
                
                <div>
                <CustomRadio 
                label='Actors' 
                id="actor-search"  
                onChange={onRadioChange} 
                value="people" 
                checked={!isShowsSearch}
                />
                </div>
                
            </RadioInputsWrapper>

            <SearchButtonWrapper>
            <button type='submit'onClick={onSearch}>Search</button>
            </SearchButtonWrapper>
            

            {renderResults()}
        </Mainpagelayout>
    )
}
    


export default Home
