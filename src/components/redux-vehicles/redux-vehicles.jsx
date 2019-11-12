import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from '../../js/actions/index';

export class ReduxVehicles extends Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        let index = 0;
        return (
            <>
                <div className='vehicle-content-main-div'>
                    <div className="featured-vehicles-wrapper">
                        {this.props.vehicles.map(vehicle => (
                            <div className='vehicle-main-div' key={index++}>
                                <img alt='Vehicle' src={require('../../img/LDV-T60-Busket.jpg')} />
                                <h4>{vehicle.year} {vehicle.make} {vehicle.model}</h4>
                                <p>{vehicle.transmission}</p>
                                <h4 id='kms'>{vehicle.kms} kms</h4>
                                <h4 id='price'>${vehicle.price}</h4>
                                <p id='location'>{vehicle.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

// function mapStateToProps(state) {
//     //var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//     var vehicles = state.remoteVehicles;

//     //const result = words.filter(word => word.length > 6);
//     const featuredVehicles = vehicles.filter(vehicle => vehicle.featured == true);

//     return {
//         //vehicles: state.remoteVehicles.slice(0, 10)
//         vehicles: featuredVehicles.slice(0, 10)
//     }
// }

function mapStateToProps (state) {
    return { vehicles: state.remoteVehicles.filter(vehicle => vehicle.featured === 1).slice(0, 8)};
}

export default connect(
    mapStateToProps,
    { getData }
)(ReduxVehicles);