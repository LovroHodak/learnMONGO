import React from 'react'
import './styles/Home.css'

export default function Home() {
    return (
        <div className='home'>
            <h1 className='homeTitle'>This is my home page!</h1>
            <h3>1. axios.get /products</h3>
            <h3>2. axios.get /authors</h3>
            <h3>3. axios.get /actors</h3>
            <h3>2. axios.get /movies</h3>
            <h3>3. axios.get /populatedMovies</h3>
        </div>
    )
}
