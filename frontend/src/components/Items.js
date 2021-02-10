import React from "react";
import { Link } from 'react-router-dom'

export default function Items({ items }) {
  return (
    <div>
      <h2>Items</h2>
      <button><Link to='/addProduct'>Create New product</Link></button>
      <p>Just a simple get request</p>
      <div>
        {items.map((item, i) => {
          return (
            <div key={i} style={{ border: "1px solid black" }}>
              <p>
                <b>_Id:</b> {item._id}
              </p>
              <p>
                <b>Name:</b> {item.name}
              </p>
              <p>
                <b>Description:</b> {item.description}
              </p>
              <p>
                <b>Price:</b> {item.price} €
              </p>
              <p>
                <b>Stock:</b> {item.countInStock}
              </p>
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: "200px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
