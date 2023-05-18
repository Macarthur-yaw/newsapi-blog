// import { response } from "express";
import { useState,useEffect } from "react";

const Sports = () => {
const[sports,setSports]=useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(false);

useEffect(()=>{
    const api_key="d1c2809523fc41148b9c1aa6fcf9c0ae";
    const url="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey="+api_key;

    fetch(url).then(response=>
        response.json()).then((data)=>{
        setSports(data.articles);
        setLoading(false);
    }).catch((error)=>{
        setError(true);
        setLoading(false);
    })
},[]);

const getEntertainment=sports.map((index,content)=>{

    return (
        <div key={content} className="newsBlock">
      <div className="text">
        <div className="title">{index.title}</div>
        <div className="content">{index.content}</div>
      </div>
      <img className="image" src={index.urlToImage} alt={content.title} />
    </div>
    )
})

    return ( 
        <div className="professionalWebsite">
        <h1>Latest News</h1>

  {loading ?(<div className="spinner"></div>):error}

  {error&&  (<div>Error</div>)}
      <div className="newsContainer" >{getEntertainment}</div>
        </div>
     );
}
 
export default Sports;