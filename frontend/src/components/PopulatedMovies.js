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
              <p>PopulatedMovie _id: {popMov._id}</p>
              <p>Year: {popMov.year}</p>
              <p>(actor)Star _id: {popMov.star._id}</p>
              <p>(actor)Star name: {popMov.star.name}</p>
              <p>(actor)Star lastname: {popMov.star.lastname}</p>
              <p>(actor)Star age: {popMov.star.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
