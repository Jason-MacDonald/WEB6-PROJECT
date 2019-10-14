import React from 'react';

import './admin-add-vehicle.css'

class AddVehicleForm extends React.Component {
    render() {
        return (
            <div className='add-vehicle-form-main-div'>
                <form method='POST'>
                    <h2>Add a Car</h2>
                    <input type="text" placeholder="Make..."/>
                    <input type="text" placeholder="Model..."/>
                    <input type="text" placeholder="Body..."/>
                    <input type="text" placeholder="Transmission..."/>
                    <input type="text" placeholder="Price..."/>
                    <input type="text" placeholder="Year..."/>
                    <input type="text" placeholder="Kms..."/>
                    <textarea placeholder="Description"/>

                    <input className="submit" type="submit" value="Add Vehicle" />
                </form>
            </div>
        )
    }
}

export default AddVehicleForm;
