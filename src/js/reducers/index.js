// Imports the constants to be used for action.state.
import { DATA_LOADED, CHANGE_FILTERS, LOG_IN } from '../constants/index'

// Creates the initial state, 
// Could adjust search form component to apply ['Any *'].
const initialState = {
    remoteVehicles: [],
    vehicleFilters: {
        data: '', // Not sure why I put this here...
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
        email: ''
    }
};

// Returns the appropriate state. 
function rootReducer(state = initialState, action) {
    switch (action.type) {
        // Returns the appropriate state depending on the action.type.
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