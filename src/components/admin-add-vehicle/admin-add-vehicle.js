import React from 'react';

import './admin-add-vehicle.css'

// Setup for dropdowns
const dataSource = [
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

let selectedMake = 3; //TODO: Update index depending on make chosen in drop down.

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
        // TODO: Need to remove component after successful POST.
        // console.log(this.featured.value);

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
            
        })
        .then(() => {
            console.log("New Vehicle Added!")
        })
        .catch(err => {
            console.log(err)
        })       
    }

    // Returns a form. When submitted, this state (value) = ref
    // TODO: Research further how this works.
    render() {
        //Sets up all the input data sources.
        // TODO: Move seperately to be used by other inputs.
        const bodyOptions = ['Convertable', 'Coupe', 'Hatchback', 'Sedan', 'Station Wagon', 'SUV', 'Ute', 'Van'];

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
                    <select ref={(ref) => {this.make = ref}} id='make' name='make' required>
                        <option value="" disabled selected hidden>Make...</option>
                        {makeItems}
                    </select>
                    {/* <input ref={(ref) => {this.model = ref}}  type="text" placeholder="Model..." name='model' required/> */}
                    <select ref={(ref) => {this.model = ref}} id='model' name='model' required>
                    <option value="" disabled selected hidden>Model...</option>
                        {modelItems}
                    </select>                   
                    {/* <input ref={(ref) => {this.body = ref}}  type="text" placeholder="Body..." name='body'/> */}
                    <select ref={(ref) => {this.body = ref}} id='body' name='body' required>
                        <option value="" disabled selected hidden>body...</option>
                        {bodyOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select> 
                    

                    {/* <input ref={(ref) => {this.transmission = ref}}  type="text" placeholder="Transmission..." name='transmission' required/> */}
                    <select ref={(ref) => {this.transmission = ref}} id='transmission' name='transmission' required>
                        <option value="" disabled selected hidden>Transmission...</option>
                        <option>Manual</option>
                        <option>Automatic</option>
                        <option>Tiptronic</option>
                    </select>
                    
                    {/* <input ref={(ref) => {this.price = ref}}  type="number" placeholder="Price..." name='price' required/> */}
                    <select ref={(ref) => {this.price = ref}} name='price' id='price' required>
                        <option value="" disabled selected hidden>Price...</option>
                        {priceOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select> 
                    
                    {/* <input ref={(ref) => {this.year = ref}}  type="number" placeholder="Year..." name='year' required/> */}
                    <select ref={(ref) => {this.year = ref}} name='year' id='year' required>
                        <option value="" disabled selected hidden>Year...</option>
                        {yearOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select> 
                    
                    {/* <input ref={(ref) => {this.kms = ref}}  type="number" placeholder="Kms..." name='kms' required/> */}
                     <select ref={(ref) => {this.kms = ref}} name=''>
                     <option value="" disabled selected hidden>Kms...</option>
                        {kmsOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                     </select>   

                    {/* <input ref={(ref) => {this.seats = ref}}  type="number" placeholder="Seats..." name='seats' required/> */}
                    <select ref={(ref) => {this.seats = ref}} id='seats' name='seats'>
                        <option value="" disabled selected hidden>Seats...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                    </select>
                    
                    {/* <input ref={(ref) => {this.location = ref}}  type="text" placeholder="Location..." name='location' required/> */}
                    <select ref={(ref) => {this.location = ref}} name='location'>
                        <option value="" disabled selected hidden>Location...</option>
                        <option>Nelson</option>
                        <option>Richmond</option>
                        <option>Tahunanui</option>
                    </select>

                    <textarea ref={(ref) => {this.description = ref}}  placeholder="Description" name='description' required/>
                    <input ref={(ref) => {this.featured = ref}}  type="checkbox" placeholder="Featured..." name='featured'/>

                    <input className="submit" type="submit" value="Add Vehicle" />
                </form>
            </div>
        )
    }
}

export default AddVehicleForm;
