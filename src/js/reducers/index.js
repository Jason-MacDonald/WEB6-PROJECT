import { DATA_LOADED, CHANGE_FILTERS, LOG_IN } from '../constants/index'

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
    },
    account : {
        username: '',
        password: ''
    }
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_LOADED:
            return Object.assign({}, state, {
                remoteVehicles: action.payload //state.remoteVehicles.concat(action.payload)
            });
        case CHANGE_FILTERS:
            // Updates the filters to the input provided by the payload from the form.
            return Object.assign({}, state, {
                vehicleFilters: action.payload //state.remoteVehicles.concat(action.payload)
            });
        case LOG_IN:
            return Object.assign({}, state, {
                account: action.payload //state.remoteVehicles.concat(action.payload)
            });
        default:
            return state;
    }
};

export default rootReducer;

