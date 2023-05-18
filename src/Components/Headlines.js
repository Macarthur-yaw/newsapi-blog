import React, { useState, useEffect } from 'react';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Headlines = () => {
  const [news, setNews] = useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(false);

  useEffect(() => {
    const api_key = "d1c2809523fc41148b9c1aa6fcf9c0ae";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setNews(data.articles);
      setLoading(false);
    }).catch((error)=>{
        console.log(error);
        setError(true);
        setLoading(false);
    });
  }, []);

  const newsBlocks = news.map((article, index) => (
    
    <div key={index} className={index===2 ? "news1": "newsBlock"}>
     
      <img className="image" src={article.urlToImage} alt={article.title} />
   
      <div className="text">
        
        <div className="title">{article.title}</div>
        <div className="content">{article.content}</div>
      </div>
    </div>
  ));
 

  return (
    <div className="professionalWebsite">
      <h1>Latest News</h1>
      {loading &&(<div className="spinner"> </div>)}
   {error? (<div>Error Loading Page</div>):loading}
   
      <div className="newsContainer" >
    
        {newsBlocks
      
      }</div>
    </div>
  );
};

export default Headlines;
