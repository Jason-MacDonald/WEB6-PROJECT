import React from 'react';

import './admin-add-vehicle.css'

class AddVehicleForm extends React.Component {
    constructor() {
        super();
        // TODO: Research further how this works.
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // TODO: Research further how this works.
    handleSubmit(event) {
        event.preventDefault();
        //console.log(this.featured.value);

        // This is a fetch directly on the form component.
        // TODO: Find out if there is a way to do this via the back end vehicles.js  
        fetch('http://localhost:4200/api/vehicles', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                //"id": 99, // Not needed as Auto Increment is enabled.
                "year": this.year.value,
                "transmission": this.transmission.value,
                "description": this.description.value,
                "price": this.price.value,
                "kms": this.kms.value,
                "location": this.location.value,
                "seats": this.seats.value,
                "model": this.model.value,
                "make": this.make.value,
                "body": this.body.value,
                "featured": this.featured.checked
            })
        });
        // TODO: There is not enough error handling etc here!
        console.log("New Vehicle Added!")
    }

    // Returns a form. When submitted, this state (value) = ref
    // TODO: Research further how this works.
    render() {
        return (
            <div className='add-vehicle-form-main-div'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Add a Car</h2>
                    <input ref={(ref) => {this.make = ref}} type="text" id='make' placeholder="Make..." name='make'/>
                    <input ref={(ref) => {this.model = ref}}  type="text" placeholder="Model..." name='model'/>
                    <input ref={(ref) => {this.body = ref}}  type="text" placeholder="Body..." name='body'/>
                    <input ref={(ref) => {this.transmission = ref}}  type="text" placeholder="Transmission..." name='transmission'/>
                    <input ref={(ref) => {this.price = ref}}  type="number" placeholder="Price..." name='price'/>
                    <input ref={(ref) => {this.year = ref}}  type="number" placeholder="Year..." name='year'/>
                    <input ref={(ref) => {this.kms = ref}}  type="number" placeholder="Kms..." name='kms'/>
                    <input ref={(ref) => {this.seats = ref}}  type="number" placeholder="Seats..." name='seats'/>
                    <input ref={(ref) => {this.location = ref}}  type="text" placeholder="Location..." name='location'/>
                    <textarea ref={(ref) => {this.description = ref}}  placeholder="Description" name='description'/>
                    <input ref={(ref) => {this.featured = ref}}  type="checkbox" placeholder="Featured..." name='featured'/>

                    <input className="submit" type="submit" id='submit' value="Add Vehicle" />
                </form>
            </div>
        )
    }
}

export default AddVehicleForm;
