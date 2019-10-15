import React from 'react';

import './admin-delete-vehicle.css'

class DeleteVehicleForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:4200/api/vehicles/' + this.id.value, {method: 'delete',});
        console.log("Vehicle Deleted!")
    }

    render() {
        return (
            <div className='delete-vehicle-form-main-div'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Delete a Car</h2>
                    <input ref={(ref) => {this.id = ref}} type="text" id='id' placeholder="id..." name='id'/>
                    <input className="submit" type="submit" id='submit' value="Delete Vehicle" />
                </form>
            </div>
        )
    }
}

export default DeleteVehicleForm;
