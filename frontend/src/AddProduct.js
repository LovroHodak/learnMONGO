import React from "react";

export default function AddProduct({handleAddProducts}) {
  return (
    <div>
      <h1>Add Product</h1>
      <p>post request</p>
      <form onSubmit={handleAddProducts}>
        <input name="name" type="text" placeholder="Enter name" />
        <input name="description" type="text" placeholder="Enter description" />
        <input name="price" type="number" placeholder="Enter price" />
        <input name="countInStock" type="number" placeholder="Enter countInStock" />
        <input name="imageUrl" type="text" placeholder="Enter imageUrl" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
