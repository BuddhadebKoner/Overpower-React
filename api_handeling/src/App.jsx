import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

// 0a7ca0b62512461dbf79040ba79389d5

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            apiKey: '0a7ca0b62512461dbf79040ba79389d5',
            country: 'in',
            page: pageNumber
          }
        });
        setArticles(prevArticles => [...prevArticles, ...response.data.articles]);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
      setIsLoading(false);
    };
    fetchNews();
  }, [pageNumber]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    });

    if (articles.length > 0) {
      observer.observe(document.getElementById('observer'));
    }

    return () => observer.disconnect();
  }, [articles]);

  return (
    <>
      <div className="container">
        <h1>India Today</h1>
        <div className="feed">
          {articles.map((article, index) => (
            <div className="article" key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              {article.urlToImage && <img src={article.urlToImage} alt="Article" />}
              <a href={article.url}>Read more</a>
              <p>Published at: {article.publishedAt}</p>
            </div>
          ))}
          <div id="observer"></div>
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
    </>
  )
}

export default App
