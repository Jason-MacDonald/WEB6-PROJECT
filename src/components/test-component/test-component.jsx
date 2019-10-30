import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {vehicles: state.vehicles};
};

const ConnectedVehicleList = ({vehicles}) => (
    <ul>
        {vehicles.map(vehicle => (
            <li key={vehicle.id + 1}>{vehicle.make}</li>
        ))}
    </ul>
);

const VehicleList = connect(mapStateToProps) (ConnectedVehicleList);

export default VehicleList;