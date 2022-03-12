import Card from "./Card";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from "./Loading";
import PropTypes from 'prop-types'

const NewsArticle = ({ theme, pageSize, countryName }) => {
    document.title = "portfolio - TopNews"
    let [news, setNews] = useState([])
    let [page, setPage] = useState(1);
    let [loading, setLoading] = useState(false);

    const handleNext = async () => {
        setLoading(true)
        const URL = `https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=d3229a5381fd468196e6b1fd25c95e23&page=${page + 1}&pageSize=${pageSize}`
        const nextResults = await axios(URL);
        setLoading(false)
        setNews(nextResults.data.articles)
        setPage(page + 1)
    }
    const handlePrevious = async () => {
        setLoading(true)
        const URL = `https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=d3229a5381fd468196e6b1fd25c95e23&page=${page - 1}&pageSize=${pageSize}`
        const previousResult = await axios(URL);
        setLoading(false)
        setNews(previousResult.data.articles)
        setPage(page - 1)
    }
    useEffect(() => {
        const getResults = async () => {
            setLoading(true)
            const URL = `https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=d3229a5381fd468196e6b1fd25c95e23&pageSize=${pageSize}`
            const results = await axios(URL);
            setLoading(false)
            setNews(results.data.articles)
        }
        getResults()
    }, [])

    return (<>
        <div style={{ color: theme === "dark" && "black" }} className="container">
            <div className={`mb-1 text-center text-${theme === "dark" && "white"} `}>
                <h2>NewsToday - Top General Headlines</h2>
                <hr />
            </div>
            {loading && <Loading />}
            <div className="row">
                {news.map((el) => {
                    return (
                        <>
                            <div className="col-md-4">
                                <div key={el.url}>
                                    <Card image={el.urlToImage} title={el.title} description={el.description} url={el.url} />
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={page <= 1} onClick={handlePrevious} type="button" className="btn btn-danger">&larr; Previous</button>
            <button onClick={handleNext} type="button" className="btn btn-danger">next &rarr;</button>
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