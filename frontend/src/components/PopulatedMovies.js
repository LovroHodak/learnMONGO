import React from "react";

export default function PopulatedMovies({ populatedMovies }) {
  return (
    <div>
      <h1>PopulatedMovies</h1>
      <p>I am populating actor id with actor propertys</p>
      <div>
        {populatedMovies.map((popMov, i) => {
          return (
            <div key={i} style={{ border: "2px solid black" }}>
              <p>
                <b>{i + 1}.</b> Title: {popMov.title}
              </p>
              <p>Year: {popMov.year}</p>
              <p>Star name: {popMov.star.name}</p>
              <p>Star lastname: {popMov.star.lastname}</p>
              <p>Star age: {popMov.star.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
