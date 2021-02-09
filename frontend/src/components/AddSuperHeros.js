import React from 'react'

export default function AddSuperHeros({handleAddSuperHeros}) {
    return (
        <div>
            <h1>AddSuperHeros</h1>
            <div>
      <form onSubmit={handleAddSuperHeros}>
        <input name="name" type="text" placeholder="Enter name" />
        <input name="strength" type="text" placeholder="Enter strength" />
        <input name="health" type="number" placeholder="Enter health" />
        <button type="submit">Submit</button>
      </form>
    </div>
        </div>
    )
}
