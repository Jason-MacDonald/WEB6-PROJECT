import React from 'react';
import { Link } from 'react-router-dom'

import './nav.css'

const Nav = () => {
    return (
        <div className="nav-main-div">
            <nav>
                <ul>
                    <li>
                        <h1>The car company</h1>
                    </li>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/vehicles/">Vehicles</Link>
                    </li>
                    <li>
                        <Link to="/finance/">Finance</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/contact/">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Nav;