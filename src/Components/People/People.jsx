/* eslint-disable no-unreachable */
import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import './People.scss'

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

        return <div><div className="socket">
            <div className="gel center-gel">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c1 r1">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c2 r1">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c3 r1">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c4 r1">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c5 r1">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c6 r1">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>

            <div className="gel c7 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>

            <div className="gel c8 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c9 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c10 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c11 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c12 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c13 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c14 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c15 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c16 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c17 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c18 r2">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c19 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c20 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c21 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c22 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c23 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c24 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c25 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c26 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c28 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c29 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c30 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c31 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c32 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c33 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c34 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c35 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c36 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>
            <div className="gel c37 r3">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
            </div>

        </div></div>;

        ;
    }


    return (
        <>
            <Navbar />
            <div className="card">
                <h1 className="card__title">People</h1>
                {people.map((person) => (
                    <div key={person.name} className="card__content">
                        <h2 className="card__content__name">{person.name}</h2>
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