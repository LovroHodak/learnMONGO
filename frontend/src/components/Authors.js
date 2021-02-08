import React from 'react'

export default function Authors({authors}) {
    return (
        <div>
            <h1>Authors</h1>
            <h2>I am using - mongodb references between collections</h2>
            <div>
                {authors.map((author, i) => {
                    return (<div key={i} style={{ border: "2px solid black" }}>
                        <p>{i + 1}. Author: {author.name}</p>
                        <p>Age: {author.age}</p>
                        <div>
                            {author.books.map((book, i) => {
                                return (<div key={i} style={{ border: "1px dashed black" }}>
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
