import React from 'react'

export default function Authors({authors}) {
    return (
        <div>
            <h1>Authors</h1>
            <p>using two schemas in 1 model</p>
            
            <div>
                {authors.map((author, i) => {
                    return (<div key={i} style={{ border: "2px solid black" }}>
                        <p>_id: {author._id}</p>
                        <p><b style={{ color: 'red' }}>{i + 1}.</b> Author: {author.name}</p>
                        <p>Age: {author.age}</p>
                        <div>
                            {author.books.map((book, i) => {
                                return (<div key={i} style={{ border: "1px dashed black" }}>
                                <p>_id: {book._id}</p>
                                    <p>Title: {book.title}</p>
                                    <p>Pages: {book.pages}</p>
                                </div>)
                            })}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}
