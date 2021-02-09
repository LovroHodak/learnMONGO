import React from 'react'
import {Link} from 'react-router-dom'

export default function Actors({actors}) {
    return (
        <div>
            <h1>Actors</h1>
            <p>I get actors normally</p>
            <div>
                {actors.map((actor, i) => {
                    return (<Link to={`/actors/${actor._id}`} key={i}>
                        <p><b>{i + 1}.</b> Name: {actor.name}</p>
                        <p>_id: {actor._id}</p>
                        <p>Lastname: {actor.lastname}</p>
                        <p>Age: {actor.age}</p>
                    </Link>)
                })}
            </div>
        </div>
    )
}
