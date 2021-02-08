import React from 'react'

export default function Movies({movies}) {
    return (
        <div>
                        <h1>Movies</h1>
                        <p>I am referencing actors by id</p>
            <div>
                {movies.map((movie, i) => {
                    return (<div key={i} style={{ border: "2px solid black" }}>
                        <p><b>{i + 1}.</b> Title: {movie.title}</p>
                        <p>Year: {movie.year}</p>
                        <p>Actor id: {movie.star}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}
