import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home">
                <h1 className="title">Star Wars</h1>

                <div className="links__Left">
                    <Link to="/people">People</Link>

                </div>
                <div className="links__Right">
                    <Link to="/planet">Planet</Link>
                </div>
            </div>
        </>

    )
}

export default Home