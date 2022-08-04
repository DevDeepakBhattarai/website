import React, { useState,useEffect,useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { useMemo } from 'react';
// import { useMemo } from 'react';


Main.propTypes={
  owner:PropTypes.string.isRequired,
}
Main.defaultProps={
  owner:'Deepak',
}
export default function Main(props) {
  let id=1;
  const [news,setNews]=useState([]);
  const previousNews=useRef([]);
 let pageNumber=1;
 

  const handleScroll=useCallback((e)=>{
    console.log(e.target.documentElement.scrollTop)
    console.log(window.innerHeight)
    
     if(e.target.documentElement.scrollTop+window.innerHeight +100 > e.target.documentElement.scrollHeight)
     {
      loadMoreNews()
      
    }
     
    },[news])

    const loadMoreNews=()=>{
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${pageNumber}`) 
      .then(Response=>{
        setNews(prevResponse=>[...prevResponse ,...Response.data.results])
        previousNews.current=news})
      .catch(e=>console.log("Data didn't fetch "+e));
      pageNumber++;
     }

     

    useEffect(()=>{
     loadMoreNews();
     
     window.addEventListener('scroll',handleScroll);

     return ()=>{
      console.log('Cleanup Function');
      window.removeEventListener('scroll',handleScroll)}
    },[])

    

  return (
    <main>
       {news.map(element=>{
        return (
        <div className='NewsDiv' key={id++}>
        <details>
          <summary>{!element.name?'News':element.name}</summary>
        </details>
        </div>
        )
       })}

        <h1>{props.owner} Website</h1>
        <p>This is a beginner website .I am learning React which is very cool </p>
    </main>
    
    
  )
}

