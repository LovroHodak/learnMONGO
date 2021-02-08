import React from 'react'

export default function Actors({actors}) {
    return (
        <div>
            <h1>Actors</h1>
            <p>I get actors normally</p>
            <div>
                {actors.map((actor, i) => {
                    return (<div key={i} style={{ border: "2px solid black" }}>
                        <p><b>{i + 1}.</b> Name: {actor.name}</p>
                        <p>Lastname: {actor.lastname}</p>
                        <p>Age: {actor.age}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}
