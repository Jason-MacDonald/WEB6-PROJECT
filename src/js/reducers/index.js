import { ADD_VEHICLE } from '../constants/index'

const initialState = {
    vehicles: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_VEHICLE:
            return Object.assign({}, state, {
                vehicles: state.vehicles.concat(action.payload)
            });
        default:
            return state;
    }

};

export default rootReducer;

