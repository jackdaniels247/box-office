import React,{useState} from 'react'
import Mainpagelayout from '../components/Mainpagelayout'

const Home = () => {
     
    const [input, setInput]=useState(''); 


    const onSearch=()=>{
// http://api.tvmaze.com/search/shows?q=girls

    fetch(`http://api.tvmaze.com/search/shows?q=${input}`).then(response=>response.json())
    .then(result=>console.log(result));


    }

    const onInputChange=(ev)=>{
        setInput(ev.target.value);
        console.log(ev.target.value)
    }
    
    const onKeyDown=(ev)=>{
        if(ev.keyCode===13){
            onSearch();
        }
    }


    return (
        <Mainpagelayout>
            <input type='text' onChange={onInputChange} value={input} onKeyDown={onKeyDown} />
            <input type='submit' value="Search" onClick={onSearch}  />
        </Mainpagelayout>
    )
}
    


export default Home
