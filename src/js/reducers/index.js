import { ADD_VEHICLE } from '../constants/index'
import { DATA_LOADED } from '../constants/index'

const initialState = {
    vehicles: [],
    remoteVehicles: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_VEHICLE:
            return Object.assign({}, state, {
                vehicles: state.vehicles.concat(action.payload)
            });
        case DATA_LOADED:
            return Object.assign({}, state, {
                remoteVehicles: state.remoteVehicles.concat(action.payload)
            });
        default:
            return state;
    }
};

export default rootReducer;

