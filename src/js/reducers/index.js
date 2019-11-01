import { DATA_LOADED, CHANGE_FILTERS } from '../constants/index'

const initialState = {
    remoteVehicles: [],
    vehicleFilters: {
        data: '',
        make: '',
        model: '',
        body: '',
        transmission: '',
        minYear: '',
        maxYear: '',
        minPrice: '',
        maxPrice: '',
        minKms: '',
        maxKms: ''
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

