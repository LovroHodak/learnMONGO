import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function EditSuperHero({match, handleEditSH}) {

    const [hero, setHero] = useState({})

    useEffect(() => {
        console.log('match.params', match.params)
        let propsId = match.params.id
        axios.get(`http://localhost:5000/api/superHeros/${propsId}`)
        .then((response) => {
            console.log('response.data', response.data)
            setHero(response.data)
        })
    }, [])

    const handleStrength = (e) => {
        e.preventDefault()
        let cloneHero = JSON.parse(JSON.stringify(hero))
        cloneHero.strength = e.target.value
        setHero(cloneHero)
    }

    const handleHealth = (e) => {
        e.preventDefault()
        let cloneHero = JSON.parse(JSON.stringify(hero))
        cloneHero.health = e.target.value
        setHero(cloneHero)
    }

    return (
            <div>
                <p>{hero.name}</p>
                <label>Strength: 
                <input type='text' onChange={handleStrength} value={hero.strength} /> </label>
                <label>Health: 
                <input type='text' onChange={handleHealth} value={hero.health} /> </label>
                <button type='submit' onClick={() => handleEditSH(hero)  } >Edit</button>
            </div>
    )
}
