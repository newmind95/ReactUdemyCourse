import React, { useState, useEffect } from 'react'

const App = () => {
   
    const [news, setNews] = useState([])
    const [searchQuery, setSearchState] = useState('react')
    const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react')
    const [loading, setLoading] = useState(false)

    const fetchNews = () => {
        setLoading(true)
        fetch(url)
            .then(result => result.json())
            .then(data => (setNews(data.hits), setLoading(false)))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchNews()
    }, [url])

    const handleChangeClick = e => {
        setSearchState(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    }

    return (
        <div>
            <h3>News</h3>
            {loading ? <h3>Loading...</h3> : ""}
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchQuery} onChange={handleChangeClick}/>
                <button>Search</button>
            </form>
            {news.map((n, i) => (
                <p key={i}>{n.title}</p>
            ))}
        </div>
    )

}

export default App;
