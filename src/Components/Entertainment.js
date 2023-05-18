// import { response } from "express";
import { useState,useEffect } from "react";

const Entertainment = () => {
const[entertainment,setEntertainment]=useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(false);

useEffect(()=>{
    const api_key="d1c2809523fc41148b9c1aa6fcf9c0ae";
    
    const url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="+api_key;

    fetch(url).then(response=>
        response.json()).then((data)=>{

            if(data.articles){
                setEntertainment(data.articles);
                setLoading(false);
            }
            else{
                setError(true);
                setLoading(false);
            }
       
        
    }).catch((error)=>{
        console.log(error);
        setError(true);
        setLoading(false);
    })
},[]);

const getEntertainment=entertainment.map((index,content)=>{

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
 
export default Entertainment;