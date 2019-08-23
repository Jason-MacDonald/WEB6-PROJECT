import React from 'react';

import './vehicle.css';

class Vehicles extends React.Component {
    render () {
        return (
            <div className='vehicle-main-div'>
                <img alt="Vehicle"/>
                <p>2010 Subaru Legacy</p>
                <p>Automatic</p>
                <p>999,999km</p>
                <p>$99,000</p>
            </div>
        )
    }
}

export default Vehicles;
