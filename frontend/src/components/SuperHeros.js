import React from 'react'
import {Link} from 'react-router-dom'

export default function SuperHeros({superHeros}) {
    return (
        <div>
            <h1>Super Heros</h1>
            {superHeros.length === 0 ? (<h2>No heros</h2>) : (
                <div>
                    {superHeros.map((hero, i) => {
                        return (<Link key={i} to={`/superHeros/${hero.id}`}><div style={{border: '1px solid black'}}>
                            <p>Id: {hero.id}</p>
                            <p>Name: {hero.name}</p>
                            <p>Strength: {hero.strength}</p>
                            <p>Health: {hero.health}</p>
                        </div></Link>)
                    }).reverse()}
                </div>
                )}
        </div>
    )
}
