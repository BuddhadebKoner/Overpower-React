import React, { useState, useEffect } from 'react';
// import axios from '../../ axiosConfig';
import axios from 'axios';
import './Newsfeed.css'

export default function Newsfeed() {

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
                        country: 'in', // Fetching headlines from India
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

    const openArticle = (url) => {
        window.open(url, '_blank');
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    const SkeletonLoader = () => (
        <>
            <div className="article skeleton">
                <div className="skeleton-heading"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-image"></div>
                <div className="skeleton-text"></div>
            </div>
            <div className="article skeleton">
                <div className="skeleton-heading"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-image"></div>
                <div className="skeleton-text"></div>
            </div>
        </>
    );

    return (<>
        <div className="api-creadit">
            <p>Api creadit :&ensp;</p>
            <a href="https://newsapi.org/" target='blank'>newsapi</a>
        </div>
        
        <div className="main-news-box">
            <div className="container">
                <h1 className='main-heading' >Stay Updated About India</h1>
                <div className="feed">
                    {isLoading && <SkeletonLoader />}
                    {articles.map((article, index) => (
                        <div className="article" key={index}>
                            <h2 onClick={() => openArticle(article.url)}>{article.title}</h2>
                            <p>{article.description}</p>
                            <div className="articel-images-box">
                                {article.urlToImage && <img src={article.urlToImage} alt="Article" onClick={() => openArticle(article.url)} />}
                            </div>
                            <p>Published at: {formatDate(article.publishedAt)}</p>
                        </div>
                    ))}
                    <div id="observer"></div>
                </div>
            </div>
        </div>
    </>
    );
}
