import { ADD_VEHICLE, CHANGE_VEHICLE_FILTERS, DATA_LOADED, GET_FILTERED_VEHICLES, GET_FILTERS } from '../constants/index'

const initialState = {
    vehicles: [], // TODO: remove - testing array with vehicles added
    remoteVehicles: [],
    vehicleFilters: {
        data: '',
        make: '',
        model: '',
        body: '',
        transmission: 'Automatic',
        minYear: '',
        maxYear: '',
        minPrice: '',
        maxPrice: '',
        minKms: '',
        maxKms: '100000'
    }
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_VEHICLE:
            return Object.assign({}, state, {
                vehicles: state.vehicles.concat(action.payload)
            });
        case DATA_LOADED:
            return Object.assign({}, state, {
                remoteVehicles: action.payload //state.remoteVehicles.concat(action.payload)
            });
        default:
            return state;
    }
};

export default rootReducer;

