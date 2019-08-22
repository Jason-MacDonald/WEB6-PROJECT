import React from 'react';

import './nav.css'

class Nav extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    render () {
        return (
            <div className="nav-main-div">
                <ul>
                    <li>Home</li>
                    <li>Vehicles</li>
                    <li>Finance</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Nav;
