import Card from "./Card";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from "./Loading";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const NewsArticle = ({ theme, pageSize, countryName, setProgress }) => {
    document.title = "portfolio - TopNews"
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        setProgress(10);
        const URL = `https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=d3229a5381fd468196e6b1fd25c95e23&page=${page}&pageSize=${pageSize}`;
        setLoading(true)
        let newsData = await axios(URL);
        setProgress(30);
        setProgress(70);
        setNews(newsData.data.articles)
        setTotalResults(newsData.data.totalResults)
        setLoading(false)
        setProgress(100);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        const URL = `https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=d3229a5381fd468196e6b1fd25c95e23&page=${page + 1}&pageSize=${pageSize}`;
        setPage(page + 1)
        let moreNewsData = await axios(URL);
        setNews(news.concat(moreNewsData.data.articles))
        setTotalResults(moreNewsData.data.totalResults)
    };

    return (<>
        <div style={{ color: theme === "dark" && "black" }} className="container">
            <div className={`mb-1 text-center text-${theme === "dark" && "white"} `}>
                <h2>NewsToday - Top General Headlines</h2>
                <hr />
            </div>
            {loading && <Loading />}

            <InfiniteScroll
                dataLength={news.length}
                next={fetchMoreData}
                hasMore={news.length !== totalResults}
                loader={<Loading />}
            >
                <div className="container">
                    <div className="row">
                        {news.map((el) => {
                            return (
                                <>
                                    <div className="col-md-4" key={el.url}>
                                        <Card image={el.urlToImage} title={el.title} description={el.description} url={el.url} />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    </>);
}

NewsArticle.defaultProps = {
    countryName: "in",
    pageSize: 9,
}

NewsArticle.propTypes = {
    countryName: PropTypes.string,
    pageSize: PropTypes.number,
}


export default NewsArticle;