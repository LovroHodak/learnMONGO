import React, {useState, useEffect} from 'react'
import axios from 'axios' 
import { Link } from 'react-router-dom'

export default function OneHero({match, handleDeleteSH, increaseEditSHStrength}) {

    const [hero, setHero] = useState({})

    useEffect(() => {
        console.log('match.params', match.params)
        let matchId = match.params.id
        axios.get(`http://localhost:5000/api/superHeros/${matchId}`)
        .then((response) => {
            console.log('response.data: ', response.data)
            setHero(response.data)
        })

        

    }, [])

    const increaseStrength = () => {
        console.log('match.params', match.params)
        
        setHero({strength: hero.strength + 1, name: hero.name, health: hero.health - 1})
        
        console.log('hero.strength', hero.strength)
        
        increaseEditSHStrength({strength: hero.strength, name: hero.name, health: hero.health, id: match.params.id})
    }

    return (
        <div>
            <h1>Hero ID</h1>
            <div style={{border: '1px solid black'}}>
                <p>Name: {hero.name}</p>
                <p>Strength: {hero.strength}</p>
                <p>Health: {hero.health}</p>
                <div>
                    <button><Link to={`/superHeros/${hero.id}/edit`}>Edit</Link></button>
                    <button onClick={() => handleDeleteSH(hero.id)}>Delete</button>
                </div>
                <div>
                    <button onClick={(increaseStrength)}>Add Strength</button>
                </div>
                
            </div>
        </div>
    )
}