import React from "react";

export default function AddActor({handleAddActor}) {
  return (
    <div>
      <h1>Add Actor</h1>
      <p>post request</p>
      <form onSubmit={handleAddActor}>
        <input name="name" type="text" placeholder="Enter name" />
        <input name="lastname" type="text" placeholder="Enter lastname" />
        <input name="age" type="number" placeholder="Enter age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
