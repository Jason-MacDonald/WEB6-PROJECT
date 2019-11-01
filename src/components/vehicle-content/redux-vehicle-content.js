import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from '../../js/actions/index';

export class ReduxVehicleContent extends Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div className='vehicle-content-main-div'>
                <div className="vehicles-wrapper">
                    {this.props.vehicles.map(vehicle => (
                        <div className='vehicle-main-div'>
                            <img alt='Vehicle' src={require('../../img/blue-flower.jpeg')} />
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
    let filteredVehicles = state.remoteVehicles;
    filteredVehicles = state.vehicleFilters.make !== '' ? state.remoteVehicles.filter(vehicle => vehicle.make == state.vehicleFilters.make) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.model !== '' ? filteredVehicles.filter(vehicle => vehicle.model == state.vehicleFilters.model) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.body !== '' ? filteredVehicles.filter(vehicle => vehicle.body == state.vehicleFilters.body) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.transmission !== '' ? filteredVehicles.filter(vehicle => vehicle.transmission == state.vehicleFilters.transmission) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.minYear !== '' ? filteredVehicles.filter(vehicle => vehicle.year > state.vehicleFilters.minYear) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.maxYear !== '' ? filteredVehicles.filter(vehicle => vehicle.year < state.vehicleFilters.maxYear) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.minPrice !== '' ? filteredVehicles.filter(vehicle => vehicle.price > state.vehicleFilters.minPrice) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.maxPrice !== '' ? filteredVehicles.filter(vehicle => vehicle.price < state.vehicleFilters.maxPrice) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.minKms !== '' ? filteredVehicles.filter(vehicle => vehicle.kms > state.vehicleFilters.minKms) : filteredVehicles;
    filteredVehicles = state.vehicleFilters.maxKms !== '' ? filteredVehicles.filter(vehicle => vehicle.kms < state.vehicleFilters.maxKms) : filteredVehicles;
    
    return { vehicles: filteredVehicles.slice(0, 50)};
}

export default connect(
    mapStateToProps,
    { getData }
)(ReduxVehicleContent);