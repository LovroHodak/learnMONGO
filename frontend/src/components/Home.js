import React from 'react'

export default function Home({ items }) {
    return (
        <div>
            <h2>Home</h2>
            <div>
                {
                    items.map((item, i) => {
                        return (<div key={i} style={{border: '1px solid black'}}>
                            <p><b>Id:</b> {item._id}</p>
                            <p><b>Name:</b> {item.name}</p>
                            <p><b>Description:</b> {item.description}</p>
                            <p><b>Price:</b> {item.price} €</p>
                            <p><b>Stock:</b> {item.countInStock}</p>
                            <img src={item.imageUrl} alt={item.name} style={{width:'200px'}} />
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
