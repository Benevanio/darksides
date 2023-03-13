import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home">
                <h1 className="title">Star <span className="title__span">Wars</span></h1>

                <div className="links__cardLeft">
                    <Link to="/people">People</Link>

                </div>
                <div className="links__CardRight">
                    <Link to="/planet">Planet</Link>
                </div>
            </div>
        </>

    )
}

export default Home