import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from '../../js/actions/index';

export class ReduxVehicleContent extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <>

            </>
        )
    }   
}

function mapStateToProps(state) {
    var vehicles = state.remoteVehicles;
    
    const filteredVehicles = vehicles;

    return {
        vehicles: filteredVehicles.slice(0, 20)
    }
}

export default connect(
    mapStateToProps,
    {getData}
)(ReduxVehicles);