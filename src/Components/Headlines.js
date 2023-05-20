import React, { useState, useEffect } from 'react';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faTwitter,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Headlines = () => {
  const [news, setNews] = useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(false);
const[share,setShare]=useState(false);
const[id,setId]=useState(0);
const navigate=useNavigate();

const showShares=()=>{
  setShare(prevState=>!prevState);
}

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
  function changeContent(event){
    // const selectedArticle = newsBlocks[index];
    // console.log(index);
    const key=event.currentTarget.closest(".newsBlock").key;
    console.log(key);
    const matchingContent=news.find((article) => article.id === key);
    console.log(matchingContent);
  }

  const newsBlocks = news.map((article, index) => (
    
    <div key={index} onClick={changeContent} className={index===2 ? "news1": "newsBlock"}>
     
      <img className="image" src={article.urlToImage} alt={article.title} />
   
      <div className="text">
        
        <div className="title">{article.title}

</div>
        <div style={{textAlign:"end"}} >
        <FontAwesomeIcon onClick={showShares} icon={faArrowUpFromBracket} />

        <div className={share ?"shareBtn":"hidden"}>

          <div style={{fontSize:"10px"}}>
        {article.title}    
          </div>
<FontAwesomeIcon icon={faInstagram} style={{color:"red",fontSize:"35px"}}/>
<FontAwesomeIcon icon={faTwitter} style={{color:"blue",fontSize:"35px"}} />
<FontAwesomeIcon icon={faWhatsapp} style={{color:"green",fontSize:"35px"}}/>
        </div>
        
        </div>
        
        </div>
      
      </div>
    
  ));

  return (
    <div>
      <h1>Latest News</h1>
      {newsBlocks}
    </div>
  );
};

export default Headlines;