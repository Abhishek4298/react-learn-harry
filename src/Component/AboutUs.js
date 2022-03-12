import AboutCard from "./AboutCard";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AboutUs = ({ theme }) => {
    let [news, setNews] = useState([])
    let [page, setPage] = useState(1);

    const handleNext = async () => {
        const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1ecabbb9934e4e8f9694c607b57cb497&page=${page + 1}&pageSize=20`
        const nextResults = await axios(URL);
        setNews(nextResults.data.articles)
        setPage(page + 1)
    }
    const handlePrevious = async () => {
        const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1ecabbb9934e4e8f9694c607b57cb497&page=${page - 1}&pageSize=20`
        const previousResult = await axios(URL);
        setNews(previousResult.data.articles)
        setPage(page - 1)

    }
    useEffect(() => {
        const getResults = async () => {
            const URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1ecabbb9934e4e8f9694c607b57cb497"
            const results = await axios(URL);
            setNews(results.data.articles)
        }
        getResults()
    }, [])

    return (<>
        <div style={{ color: theme === "dark" && "black" }} className="container">
            <div className="row">
                {news.map((el) => {
                    return (
                        <>
                            <div className="col-md-4">
                                <div key={el.url}>
                                    <AboutCard image={el.urlToImage} title={el.title} description={el.description} url={el.url} />
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

export default AboutUs;