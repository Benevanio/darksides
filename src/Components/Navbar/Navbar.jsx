import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="title">Star Wars</h1>
            <ul className="nav__links">
                <li className="nav__link">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav__link">
                    <Link to="/people">People</Link>
                </li>
                <li className="nav__link">
                    <Link to="/planet">Planet</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar