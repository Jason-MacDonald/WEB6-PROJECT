import React, {Component} from 'react';
import { connect } from 'react-redux';
import {changeFilters} from '../../js/actions/index'
import {withRouter} from 'react-router-dom'

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

// Pushes appropriate JSX elementS into variable to be rendered in the appropriate selection element on the form.
// eslint-disable-next-line
for (const [index, value] of dataSource.entries()) {
    makeItems.push(<option key={index}>{value[0]}</option>)
}
// eslint-disable-next-line
for (const [index, value] of dataSource[selectedMake][1].entries()) {
    modelItems.push(<option key={index}>{value}</option>)
}
// eslint-disable-next-line
// for (const [index, value] of dataSource.entries()) {
//     makeItems.push(<option key={index}>{value[0]}</option>)
// }

function mapDispatchToProps(dispatch) {
    return {
        changeFilters: filters => dispatch(changeFilters(filters))
    };
}

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: '',
            make: 'Any Make',
            model: 'Any Model',
            body: 'Any Body',
            transmission: 'Any Transmission',
            minPrice: 'Min Price',
            maxPrice: 'Max Price',
            minYear: 'Min Year',
            maxYear: 'Max Year',
            minKms: 'Min Kms',
            maxKms: 'Max Kms'
        };

        this.goHome = this.goHome.bind(this)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const vehicleFilters = this.state;
        this.props.changeFilters(vehicleFilters);
        this.goHome();
    }

    goHome() {
        this.props.history.push('/vehicles/')
      }


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

        // Nothing incredibly exciting here.
        // Changes to vehicle page and provides data for componentDidMount fetch to get filtered search results.
        return (
            <div className='search-form-main-div'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Find a Car</h2>
                    {/* <input type='text' placeholder='Keywords...' /> */}
                    <select id='make' value={this.state.make} onChange={this.handleChange}>
                        {makeItems};
                    </select>
                    <select id='model' value={this.state.model} onChange={this.handleChange}>
                        <option>Any Model</option>
                        {modelItems};
                    </select>
                    <select id='body' value={this.state.body} onChange={this.handleChange}>
                        {bodyOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>
                    <select id='transmission' value={this.state.transmission} onChange={this.handleChange}>
                        <option>Any Transmission</option>
                        <option>Automatic</option>
                        <option>Manual</option>
                        <option>Tiptronic</option>
                    </select>
                    <select className="inline-block" id='minPrice' value={this.state.minPrice} onChange={this.handleChange}>
                        <option>Min Price</option>
                        {priceOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>

                    <p className="inline-block">to</p>

                    <select className="inline-block" id='maxPrice' value={this.state.maxPrice} onChange={this.handleChange}>
                        <option>Max Price</option>
                        {priceOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>

                    <select className="inline-block" id='minYear' value={this.state.minYear} onChange={this.handleChange}>
                        <option>Min Year</option>
                        {yearOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>

                    <p>to</p>

                    <select className="inline-block" id='maxYear' value={this.state.maxYear} onChange={this.handleChange}>
                        <option>Max Year</option>
                        {yearOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>

                    <select className="inline-block" id='minKms' value={this.state.minKms} onChange={this.handleChange}>
                        <option>Min Kms</option>
                        {kmsOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>

                    <p>to</p>

                    <select className="inline-block" id='maxKms' value={this.state.maxKms} onChange={this.handleChange}>
                        <option>Max Kms</option>
                        {kmsOptions.map((value, index) => {
                            return <option key={index}>{value}</option>
                        })}
                    </select>
                    <input className="submit" type="submit" value="Find Car" />
                </form>
            </div>
        )
    }
}

const ReduxSearchForm = connect (
    null,
    mapDispatchToProps
) (SearchForm);

export default withRouter(ReduxSearchForm);
