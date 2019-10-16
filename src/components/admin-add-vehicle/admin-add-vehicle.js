import React from 'react';

import './admin-add-vehicle.css'

// Setup for dropdowns
const dataSource = [
    ['Any Make', []],
    ['Audi', ['A4', 'TT']],
    ['BMW', ['330i']],
    ['Chevrolet', ['Sonic']],
    ['Ford', ['Courier', 'Ecosport', 'Fairmont', 'Falcon', 'Kuga', 'Laser', 'Ranger', 'Transit']],
    ['Holden'],
    ['Honda'],
    ['Hyundai'],
    ['LDV'],
    ['Lexus'],
    ['Mazda'],
    ['Mitsubishi']
];

const makeItems = [];
const modelItems = [];

let selectedMake = 4; //TODO: Update index depending on make chosen in drop down.

// Pushes appropriate JSX elementS into variable to be rendered in the appropriate selection element on the form.
// eslint-disable-next-line
for (const [index, value] of dataSource.entries()) {
    makeItems.push(<option key={index}>{value[0]}</option>)
}
// eslint-disable-next-line
for (const [index, value] of dataSource[selectedMake][1].entries()) {
    modelItems.push(<option key={index}>{value}</option>)
}

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
        //Sets up all the input data sources.
        // TODO: Move seperately to be used by other inputs.
        const bodyOptions = ['Any Body', 'Convertable', 'Coupe', 'Hatchback', 'Sedan', 'Station Wagon', 'SUV', 'Ute', 'Van'];

        //Sets up the appropriate selection option values.
        const yearOptions = [];
        const currentYear = new Date().getFullYear();
        for (let i = (currentYear); i > (currentYear - 50); i--) {
            yearOptions.push(i);
        }

        const priceOptions = [];
        for (let i = 1000; i < 76000; i += 2000) {
            priceOptions.push(i);
        }

        const kmsOptions = [];
        for (let i = 10000; i < 300000; i += 10000){
            kmsOptions.push(i);
        }

        return (
            <div className='add-vehicle-form-main-div'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Add a Car</h2>
                    {/* <input ref={(ref) => {this.make = ref}} type="text" id='make' placeholder="Make..." name='make' required/> */}
                    <select ref={(ref) => {this.make = ref}} id='make' name='make'>
                        {makeItems}
                    </select>
                    {/* <input ref={(ref) => {this.model = ref}}  type="text" placeholder="Model..." name='model' required/> */}
                    <select ref={(ref) => {this.model = ref}} id='model' name='model'>
                        {modelItems}
                    </select>                   
                    {/* <input ref={(ref) => {this.body = ref}}  type="text" placeholder="Body..." name='body'/> */}
                    <select ref={(ref) => {this.body = ref}} id='body' name='body'>
                        {bodyOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select> 
                    <input ref={(ref) => {this.transmission = ref}}  type="text" placeholder="Transmission..." name='transmission' required/>
                    <input ref={(ref) => {this.price = ref}}  type="number" placeholder="Price..." name='price' required/>
                    <input ref={(ref) => {this.year = ref}}  type="number" placeholder="Year..." name='year' required/>
                    <input ref={(ref) => {this.kms = ref}}  type="number" placeholder="Kms..." name='kms' required/>
                    <input ref={(ref) => {this.seats = ref}}  type="number" placeholder="Seats..." name='seats' required/>
                    <input ref={(ref) => {this.location = ref}}  type="text" placeholder="Location..." name='location' required/>
                    <textarea ref={(ref) => {this.description = ref}}  placeholder="Description" name='description' required/>
                    <input ref={(ref) => {this.featured = ref}}  type="checkbox" placeholder="Featured..." name='featured' required/>

                    <input className="submit" type="submit" id='submit' value="Add Vehicle" />
                </form>
            </div>
        )
    }
}

export default AddVehicleForm;
