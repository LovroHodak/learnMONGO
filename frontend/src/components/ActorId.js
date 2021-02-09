import React, {useState, useEffect} from 'react'
import axios from 'axios' 
import { Link } from 'react-router-dom'

export default function ActorId({match}) {

    const [actor, setActor] = useState({})

    useEffect(() => {
        console.log(match)
        let matchId = match.params.id
        axios.get(`http://localhost:5000/api/actors/${matchId}`)
        .then((response) => {
            console.log('response.data: ', response.data)
            setActor(response.data)
        })
    }, [])

    return (
        <div>
            <h1>Actor ID</h1>
            <p>get request</p>
            <div style={{border: '1px solid black'}}>
                <p>Name: {actor.name}</p>
                <p>LastName: {actor.lastname}</p>
                <p>Age: {actor.age}</p>
            </div>
        </div>
    )
}
