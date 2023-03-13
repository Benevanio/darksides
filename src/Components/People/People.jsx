import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';

const People = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then((response) => response.json())
            .then((data) => {
                setPeople(data.results);
                setLoading(false);
            });
    }, []);
    if (loading) {

        return <div>Loading...</div>;
    }


    return (
        <>
        <Navbar />
            <div className="people">
                <h1>People</h1>
                {people.map((person) => (
                    <div key={person.name}>
                        <h2>{person.name}</h2>
                        <p>Height: {person.height}</p>
                        <p>Mass: {person.mass}</p>
                        <p>Hair Color: {person.hair_color}</p>
                        <p className="divider"></p>
                    </div>
                ))}
            </div>
        </>


    )
}

export default People