import React from "react";

export default function AddSuperHeros({ handleAddSuperHeros }) {
  return (
    <div>
      <h1>AddSuperHeros</h1>
      <div>
        <form onSubmit={handleAddSuperHeros}>
          <div>
            <label>Name: </label>
            <input name="name" type="text" placeholder="Enter name" />
          </div>
          <div>
            <label>Strength: </label>
            <input name="strength" type="text" placeholder="Enter strength" />
          </div>
          <div>
            <label>Health: </label>
            <input name="health" type="number" placeholder="Enter health" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
