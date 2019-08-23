import React from 'react';
import Faker from 'faker';

import './vehicle.css';

class Vehicles extends React.Component {
    render () {
        return (
            <div className='vehicle-main-div'>
                <img alt="Vehicle" src={Faker.image.transport()}/>
                <h4>2019 Subaru Legacy</h4>
                <p>Automatic</p>
                <h4 id='kms'>999,999km</h4>
                <h4 id='price'>$99,000</h4>
                <p id='location'>{Faker.address.city()}</p>
            </div>
        )
    }
}

export default Vehicles;
