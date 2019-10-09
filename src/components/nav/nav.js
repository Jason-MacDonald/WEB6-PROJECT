import React from 'react';
import { Link } from 'react-router-dom'

import './nav.css'

const Nav = () => {
    return (
        <div >
            <div className="header-main-div">
                <p>The Car Company | enquiry@thecarcompany.co.nz</p>
            </div>
            <nav className="nav-main-div">
                <ul className="nav-wrapper">
                    <li id="nav-logo">
                        <Link to="/"><h2>The car company</h2></Link>
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
                    <li>
                        <Link to="/login/">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Nav;