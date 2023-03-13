import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
const Planet = () => {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
            .then((response) => response.json())
            .then((data) => {
                setPlanets(data.results);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="planet">
                <h1>Planet</h1>
                {planets.map((planet) => (
                    <div key={planet.name}>
                        <h2>{planet.name}</h2>
                        <p>Climate: {planet.climate}</p>
                        <p>Population: {planet.population}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p className="divider"></p>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Planet