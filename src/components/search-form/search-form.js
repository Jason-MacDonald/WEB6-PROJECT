import React from 'react';

import './search-form.css'

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

// eslint-disable-next-line
for(const [index, value] of dataSource.entries()) {
    makeItems.push(<option key={index}>{value[0]}</option>)
}
// eslint-disable-next-line
for(const [index, value] of dataSource[selectedMake][1].entries()) {
    modelItems.push(<option key={index}>{value}</option>)
}
// eslint-disable-next-line
for(const [index, value] of dataSource.entries()) {
    makeItems.push(<option key={index}>{value[0]}</option>)
}

class SearchForm extends React.Component {
    render () {

        const bodyOptions = ['Any Body', 'Convertable', 'Coupe', 'Hatchback', 'Sedan', 'Station Wagon', 'RV/SUV', 'Ute', 'Van'];
        
        const yearOptions = [];
        const currentYear = new Date().getFullYear();
        for (let i = (currentYear); i > (currentYear - 50); i--) {
            yearOptions.push(i);
        }

        const priceOptions = [];
        for (let i = 1; i < 76; i += 2) {
            priceOptions.push(i + 'k');
        }

        return (
            <div className='search-form-main-div'>
                <form>
                    <h2>Find a Car</h2>
                    <input type='text' placeholder='Keywords...'/>
                    <select id='DDmake'>
                        {makeItems};
                    </select>
                    <select>
                        <option>Any Model</option>
                        {modelItems};
                    </select>
                    <select>
                        {bodyOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>
                    <select>
                        <option>Any Transmission</option>
                        <option>Automatic</option>
                        <option>Manual</option>
                        <option>Tiptronic</option>
                    </select>
                    <select className="inline-block">
                        <option>Any Price</option>
                        {priceOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>

                    <p className="inline-block">to</p>

                    <select className="inline-block">
                        <option>Any Price</option>
                        {priceOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>

                    <select className="inline-block">
                        <option>Any Year</option>
                        {priceOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>

                    <p>to</p>
                    
                    <select className="inline-block">
                    <option>Any Year</option>
                        {yearOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>
                    <input className="submit" type="submit" value="Find Car"/>
                </form>
            </div>
        )
    }
}

export default SearchForm;