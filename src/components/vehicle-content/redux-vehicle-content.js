import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from '../../js/actions/index';

// Imports the styling for Vehicle Content.
import './vehicle-content.css';

export class ReduxVehicleContent extends Component {
    // Updates vehicle information in the database whenever this component is mounted incase it has changed.
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div className='vehicle-content-main-div'>
                <div className="vehicles-wrapper">
                    {this.props.vehicles.map(vehicle => (
                        <div className='vehicle-main-div'>
                            <img alt='Vehicle' src={require('../../img/basket-ldv.jpg')} />
                            <h4>{vehicle.year} {vehicle.make} {vehicle.model}</h4>
                            <p>{vehicle.transmission}</p>
                            <h4 id='kms'>{vehicle.kms} kms</h4>
                            <h4 id='price'>${vehicle.price}</h4>
                            <p id='location'>{vehicle.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // Super ugly but filters the vehicles by each criteria if criteria has been selected.
    let filteredVehicles = state.remoteVehicles;
    let vehicleFilters = state.vehicleFilters;
    console.log (vehicleFilters);

    filteredVehicles = state.vehicleFilters.make != 'Any Make' ? state.remoteVehicles.filter(vehicle => vehicle.make == state.vehicleFilters.make) : filteredVehicles; 
    filteredVehicles = state.vehicleFilters.model != 'Any Model' ? filteredVehicles.filter(vehicle => vehicle.model == state.vehicleFilters.model) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.body != 'Any Body' ? filteredVehicles.filter(vehicle => vehicle.body == state.vehicleFilters.body) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.transmission != 'Any Transmission' ? filteredVehicles.filter(vehicle => vehicle.transmission == state.vehicleFilters.transmission) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.minYear != 'Min Year' ? filteredVehicles.filter(vehicle => vehicle.year > state.vehicleFilters.minYear) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.maxYear != 'Max Year' ? filteredVehicles.filter(vehicle => vehicle.year < state.vehicleFilters.maxYear) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.minPrice != 'Min Price' ? filteredVehicles.filter(vehicle => vehicle.price > state.vehicleFilters.minPrice) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.maxPrice != 'Max Price' ? filteredVehicles.filter(vehicle => vehicle.price < state.vehicleFilters.maxPrice) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.minKms != 'Min Kms' ? filteredVehicles.filter(vehicle => vehicle.kms > state.vehicleFilters.minKms) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.maxKms != 'Max Kms' ? filteredVehicles.filter(vehicle => vehicle.kms < state.vehicleFilters.maxKms) : filteredVehicles;
    return { vehicles: filteredVehicles.slice(0, 25)};
}

export default connect(
    mapStateToProps,
    { getData }
)(ReduxVehicleContent);