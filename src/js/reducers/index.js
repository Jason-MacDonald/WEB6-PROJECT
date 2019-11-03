import { DATA_LOADED, CHANGE_FILTERS } from '../constants/index'

const initialState = {
    remoteVehicles: [],
    vehicleFilters: {
        data: '',
        make: 'Any Make',
        model: 'Any Model',
        body: 'Any Body',
        transmission: 'Any Transmission',
        minYear: 'Min Year',
        maxYear: 'Max Year',
        minPrice: 'Min Price',
        maxPrice: 'Max Price',
        minKms: 'Min Kms',
        maxKms: 'Max Kms'
    }
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_LOADED:
            return Object.assign({}, state, {
                remoteVehicles: action.payload //state.remoteVehicles.concat(action.payload)
            });
        case CHANGE_FILTERS:
            return Object.assign({}, state, {
                vehicleFilters: action.payload //state.remoteVehicles.concat(action.payload)
            });
        default:
            return state;
    }
};

export default rootReducer;

